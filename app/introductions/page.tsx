import type { Metadata } from "next";
import { IntroductionForm } from "@/components/introduction-form";

export const metadata: Metadata = { title: "Introductions" };

export default function IntroductionsPage() {
  return (
    <section className="sect wrap" aria-labelledby="intro-h">
      <div className="head">
        <h1 id="intro-h">Request an introduction</h1>
      </div>
      <div className="two">
        <div>
          <p className="lead">
            Lopes Capital is a private investment office. If you are building or selling a
            company and think we should talk, tell us in a few lines.
          </p>
          <p className="fine">
            Say who you are, what the company does and why now. If there is a deck or a
            filing we should read first, add the link.
          </p>
        </div>
        <div>
          <IntroductionForm />
        </div>
      </div>
    </section>
  );
}
