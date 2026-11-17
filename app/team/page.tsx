import type { Metadata } from "next";
import Image from "next/image";
import { NextPage } from "@/components/next-page";

export const metadata: Metadata = { title: "Team" };

function Portrait({ src, name }: { src: string; name: string }) {
  return <Image className="portrait" src={src} alt={name} width={360} height={360} />;
}

export default function TeamPage() {
  return (
    <>
      <section className="sect wrap" aria-labelledby="principals-h">
        <div className="head">
          <h1 id="principals-h">Team</h1>
        </div>
        <div className="people">
          <article className="person">
            <Portrait src="/team/brent-richardson.jpg" name="Brent Richardson" />
            <h2>Brent Richardson</h2>
            <span className="role caps">Principal</span>
            <p>
              Brent has built education companies since 1985, when he joined his father,
              Gail Richardson, to start Educational Management Group. The company sent
              custom lessons to K-12 classrooms by satellite and was sold to Simon &amp;
              Schuster in 1995.
            </p>
            <p>
              He then helped build Private Networks, which trained teachers and healthcare
              staff, and ran Masters Online, an early online degree business.
            </p>
            <p>
              In 2004 he led the takeover of Grand Canyon University. He was CEO until July
              2008, took the company public that November, and served as Executive Chairman
              of Grand Canyon Education until January 2017.
            </p>
            <p>
              In 2017 he led Dream Center Education Holdings&apos; acquisition of the Art
              Institutes, Argosy University and South University; the system entered
              receivership in 2019.
            </p>
          </article>
          <article className="person">
            <Portrait src="/team/chris-richardson.jpg" name="Chris Richardson" />
            <h2>Chris Richardson</h2>
            <span className="role caps">Principal</span>
            <p>
              Chris is a lawyer who has spent his career inside the family&apos;s companies.
              He worked for an Arizona Superior Court judge before joining the family
              business.
            </p>
            <p>
              He moved to Grand Canyon University&apos;s legal office at the 2004 takeover
              and became General Counsel in 2007. He held that role through the 2008 public
              offering and served as General Counsel and a director of Grand Canyon
              Education until May 2012.
            </p>
            <p>
              The brothers are deliberate opposites. Brent has a high tolerance for risk and
              Chris has close to none, which is why they have worked together for more than
              twenty years.
            </p>
          </article>
        </div>

        <div className="head sub">
          <h2>Investment team</h2>
        </div>
        <div className="people">
          <article className="person">
            <Portrait src="/team/jake-richardson.jpg" name="Jake Richardson" />
            <h3>Jake Richardson</h3>
            <span className="role caps">Investments</span>
          </article>
        </div>
      </section>

      <NextPage href="/investments" label="Investments" />
    </>
  );
}
