import type { Metadata } from "next";
import { NextPage } from "@/components/next-page";

export const metadata: Metadata = { title: "GCU" };

export default function GcuPage() {
  return (
    <>
      <header className="pagehead wrap">
        <span className="orn" aria-hidden="true" />
        <h1>Grand Canyon University</h1>
        <p>2004 to 2017</p>
      </header>

      <section className="sect wrap line" aria-label="Summary">
        <div className="solo">
          <p className="lead">
            In January 2004, Brent and Chris Richardson and their partners took over Grand
            Canyon University, a Phoenix college that was out of money and weeks from
            closing.
          </p>
          <p>
            They took on about $20 million of the university&apos;s debt, kept the campus
            and its Christian identity, and built an online programme for working adults in
            education, business and healthcare. By 2008 revenue had reached $161 million.
          </p>
          <p>
            In November 2008 the company, Grand Canyon Education, listed on Nasdaq under the
            symbol LOPE. Today the university has more than 133,000 students and is the
            largest Christian university in the world.
          </p>
          <p className="fine">
            Sources:{" "}
            <a href="https://www.sec.gov/Archives/edgar/data/1434588/000095015308001977/p75463b1e424b1.htm">
              2008 prospectus
            </a>
            ,{" "}
            <a href="https://www.sec.gov/Archives/edgar/data/0001434588/000136231009002465/c81302e10vk.htm">
              2008 annual report
            </a>
            ,{" "}
            <a href="https://news.gcu.edu/gcu-news/grand-canyon-university-projects-record-enrollment-of-133000-students-for-2025-26-academic-year/">
              GCU News
            </a>
            .
          </p>
        </div>
      </section>

      <NextPage href="/team" label="Team" />
    </>
  );
}
