import type { Metadata } from "next";
import Link from "next/link";
import { NextPage } from "@/components/next-page";

export const metadata: Metadata = { title: "History" };

function Entry({
  year,
  title,
  children,
}: {
  year: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <div className="y">{year}</div>
      <div className="b">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </li>
  );
}

export default function HistoryPage() {
  return (
    <>
      <header className="pagehead wrap">
        <span className="orn" aria-hidden="true" />
        <h1>Since 1969</h1>
        <p>
          The family&apos;s work in education starts with Gail Richardson, who has been
          building companies for schools for more than fifty years.
        </p>
      </header>

      <section className="sect wrap line" aria-labelledby="tl-h">
        <h2 className="sr" id="tl-h">
          Timeline
        </h2>
        <ol className="tl">
          <Entry year="1969" title="La Petite Academy">
            Gail Richardson, a former assistant school superintendent, and his wife open
            preschools with a set curriculum in Springfield and Mattoon, Illinois, at a time
            when paid preschool barely existed. They build about twenty centres and sell the
            company to a Kansas City buyer. It later grows into a national chain of about
            600.
          </Entry>
          <Entry year="Early 1970s" title="Prescription Learning">
            Each struggling student gets a “prescription” of reading and maths materials,
            with progress measured by University of Iowa assessments. School districts in
            Chicago, New York, Detroit, Atlanta and Los Angeles sign multi-year contracts,
            and the company grows to about 200 people. Jostens buys it in the mid-1980s.
          </Entry>
          <Entry year="1985" title="Educational Management Group">
            Gail starts the company in Arizona and Brent joins him. Teachers request a
            lesson; film crews on six continents shoot it; it reaches the classroom by
            satellite, often followed by a live conversation with a scientist or an author.
            Gail recalls a classroom in Hawaii talking with the geneticist Francis Collins
            the morning after a teacher asked about DNA.
          </Entry>
          <Entry year="1995" title="Sale to Simon & Schuster">
            Simon &amp; Schuster acquires Educational Management Group to deliver school
            materials on screen as well as on paper. The company has 258 employees in
            Arizona on the day of the sale.{" "}
            <a href="https://www.edweek.org/education/publisher-buys-company-for-on-line-delivery-of-school-materials/1995/03">
              Education Week, March 1995
            </a>
          </Entry>
          <Entry year="1990s" title="Private Networks and Masters Online">
            Private Networks delivers satellite training for teachers, nurses and hospital
            staff, and is sold to an investor group in 1998. Masters Online, started late in
            the decade, offers some of the first master&apos;s degrees a teacher can earn
            without moving to a campus.
          </Entry>
          <Entry year="About 2000" title="Mind Streams">
            Gail starts Mind Streams to bring off-campus master&apos;s degrees to working
            teachers, first with Houston Baptist University and then with Grand Canyon
            University. The family still owns it.
          </Entry>
          <Entry year="2002" title="Online degrees at Grand Canyon">
            Masters Online and Grand Canyon University launch three online master&apos;s
            programmes and sign up about 1,200 students.
          </Entry>
          <Entry year="2004" title="Grand Canyon University">
            With the university about to close, Brent and Chris lead the takeover.{" "}
            <Link href="/gcu">More on the GCU page.</Link>
          </Entry>
          <Entry year="2008" title="Public offering">
            Grand Canyon Education lists on Nasdaq as LOPE. Gail calls it the best
            investment the family ever made.
          </Entry>
          <Entry year="2017" title="Lopes Capital">
            Brent and Chris Richardson start the family office in Scottsdale, Arizona.
          </Entry>
          <Entry year="2021" title="Cobalt">
            Gail starts Cobalt, which helps private schools grow their enrolment. He still
            runs it alongside Mind Streams.
          </Entry>
        </ol>
      </section>

      <section className="sect tint">
        <div className="wrap">
          <blockquote className="pull">
            <p>
              We charge more than anybody. We do more training than anybody. And we&apos;ll
              fix anything that anybody has.
            </p>
            <div className="by">
              Gail Richardson, on the rule he took from watching IBM and has applied to every
              company since
            </div>
          </blockquote>
        </div>
      </section>

      <NextPage href="/introductions" label="Request an introduction" />
    </>
  );
}
