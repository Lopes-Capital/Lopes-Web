import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <header className="pagehead wrap">
      <span className="orn" aria-hidden="true" />
      <h1>Page not found</h1>
      <p>There is nothing at this address.</p>
      <Link className="btn" href="/">
        Back to the front page
      </Link>
    </header>
  );
}
