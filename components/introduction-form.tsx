"use client";

import { useEffect, useRef, useState } from "react";

type Field = "name" | "email" | "msg";
type Values = { name: string; org: string; email: string; msg: string };
type Errors = Partial<Record<Field, string>>;

/**
 * form    – filling in the fields
 * ready   – the note is written out for a last read before sending
 * sending – request in flight
 * sent    – delivered
 * failed  – not delivered; the note stays on screen so nothing is lost
 */
type Stage = "form" | "ready" | "sending" | "sent" | "failed";

const CHECKS: { field: Field; message: string; test: (value: string) => boolean }[] = [
  {
    field: "name",
    message: "Add your name so we know who is writing.",
    test: (v) => v.length > 1,
  },
  {
    field: "email",
    message: "That email address looks incomplete. Check it has an @ and a domain.",
    test: (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v),
  },
  {
    field: "msg",
    message: "Add a few lines about the company, so there is something to reply to.",
    test: (v) => v.length > 19,
  },
];

const GENERIC_FAILURE = "We could not send it just now.";

function writeNote(v: Values): string {
  const name = v.name.trim();
  const org = v.org.trim();
  return (
    "Introduction request for Lopes Capital\n\n" +
    `From: ${name}${org ? ` (${org})` : ""}\n` +
    `Reply to: ${v.email.trim()}\n\n` +
    v.msg.trim()
  );
}

export function IntroductionForm() {
  const [values, setValues] = useState<Values>({ name: "", org: "", email: "", msg: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [checked, setChecked] = useState(false);
  const [stage, setStage] = useState<Stage>("form");
  const [failure, setFailure] = useState(GENERIC_FAILURE);
  const [copied, setCopied] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  const trapRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLPreElement>(null);
  const lastStage = useRef<Stage>("form");

  // Move focus to whichever panel just appeared, so keyboard and screen-reader
  // users land on it instead of on a control that has been hidden.
  useEffect(() => {
    const from = lastStage.current;
    lastStage.current = stage;
    if (stage === "ready" && from === "form") doneRef.current?.focus();
    if (stage === "form" && from !== "form") msgRef.current?.focus();
  }, [stage]);

  const note = writeNote(values);
  const set = (key: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));
  const invalid = (field: Field) => (checked ? (errors[field] ? "true" : "false") : undefined);

  function prepare(e: React.FormEvent) {
    e.preventDefault();
    const found: Errors = {};
    for (const check of CHECKS) {
      if (!check.test(values[check.field].trim())) found[check.field] = check.message;
    }
    setErrors(found);
    setChecked(true);
    const first = CHECKS.find((check) => found[check.field]);
    if (first) {
      const target = { name: nameRef, email: emailRef, msg: msgRef }[first.field];
      target.current?.focus();
      return;
    }
    setCopied("");
    setStage("ready");
  }

  async function send() {
    setStage("sending");
    setCopied("");
    const body = new FormData();
    body.set("name", values.name.trim());
    body.set("org", values.org.trim());
    body.set("email", values.email.trim());
    body.set("msg", values.msg.trim());
    body.set("website", trapRef.current?.value ?? "");
    try {
      const res = await fetch("/api/introductions", { method: "POST", body });
      if (res.ok) {
        setStage("sent");
        return;
      }
      // A 400 means the server rejected a field and says which; anything else is on our side.
      const data = res.status === 400 ? await res.json().catch(() => null) : null;
      setFailure(typeof data?.error === "string" ? data.error : GENERIC_FAILURE);
    } catch {
      setFailure(GENERIC_FAILURE);
    }
    setStage("failed");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(note);
      setCopied("Copied.");
    } catch {
      const el = noteRef.current;
      const selection = window.getSelection();
      if (el && selection) {
        const range = document.createRange();
        range.selectNodeContents(el);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setCopied("Copying is blocked here. The note is selected, so press Ctrl or Cmd and C.");
    }
  }

  const sending = stage === "sending";

  return (
    <>
      <form onSubmit={prepare} noValidate hidden={stage !== "form"}>
        <input
          ref={trapRef}
          className="trap"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="f2">
          <div>
            <label htmlFor="f-name">Your name</label>
            <input
              ref={nameRef}
              id="f-name"
              name="name"
              autoComplete="name"
              required
              maxLength={200}
              value={values.name}
              onChange={set("name")}
              aria-invalid={invalid("name")}
              aria-describedby="e-name"
            />
            <p className="err" id="e-name">
              {errors.name}
            </p>
          </div>
          <div>
            <label htmlFor="f-org">Company</label>
            <input
              id="f-org"
              name="org"
              autoComplete="organization"
              maxLength={200}
              value={values.org}
              onChange={set("org")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="f-email">Email</label>
          <input
            ref={emailRef}
            id="f-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            value={values.email}
            onChange={set("email")}
            aria-invalid={invalid("email")}
            aria-describedby="e-email"
          />
          <p className="err" id="e-email">
            {errors.email}
          </p>
        </div>
        <div>
          <label htmlFor="f-msg">What should we know?</label>
          <textarea
            ref={msgRef}
            id="f-msg"
            name="msg"
            required
            maxLength={4000}
            placeholder="Three or four lines is enough."
            value={values.msg}
            onChange={set("msg")}
            aria-invalid={invalid("msg")}
            aria-describedby="e-msg"
          />
          <p className="err" id="e-msg">
            {errors.msg}
          </p>
        </div>
        <div>
          <button className="btn" type="submit">
            Prepare my request
          </button>
        </div>
      </form>

      <div className="done" ref={doneRef} hidden={stage === "form"} tabIndex={-1}>
        <div role="status">
          {stage === "sent" ? (
            <>
              <h2>Your request has been sent</h2>
              <p className="fine">
                Thank you. Your note has reached Lopes Capital. A copy is below for your
                records.
              </p>
            </>
          ) : stage === "failed" ? (
            <>
              <h2>Your request was not sent</h2>
              <p className="fine">
                {failure} Your note is below, so nothing is lost. Try again, or copy it and
                keep it.
              </p>
            </>
          ) : (
            <>
              <h2>Your request is ready to send</h2>
              <p className="fine">
                Read it over. Nothing is sent until you press the button below.
              </p>
            </>
          )}
        </div>
        <pre ref={noteRef}>{note}</pre>
        <div className="acts">
          {stage !== "sent" && (
            <button className="btn" type="button" onClick={send} disabled={sending}>
              {sending ? "Sending" : stage === "failed" ? "Try again" : "Send my request"}
            </button>
          )}
          {(stage === "sent" || stage === "failed") && (
            <button className="btn btn-quiet" type="button" onClick={copy}>
              Copy the note
            </button>
          )}
          {stage !== "sent" && (
            <button
              className="btn btn-quiet"
              type="button"
              onClick={() => setStage("form")}
              disabled={sending}
            >
              Edit it
            </button>
          )}
        </div>
        <p className="fine copied" role="status">
          {copied}
        </p>
      </div>
    </>
  );
}
