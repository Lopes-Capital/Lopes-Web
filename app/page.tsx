import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { PAGES } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero wrap">
        <span className="orn" aria-hidden="true" />
        <h1>The private investment office of the Richardson family.</h1>
        <p className="lede">
          Lopes Capital invests in real estate and operating businesses from Scottsdale,
          Arizona. The family has been building companies since 1969.
        </p>
        <Link className="btn" href="/introductions">
          Request an introduction
        </Link>
      </section>

      <section className="sect wrap line" aria-labelledby="idx-h">
        <h2 className="sr" id="idx-h">
          On this site
        </h2>
        <ul className="index">
          {PAGES.map((page) => (
            <li key={page.href}>
              <Link href={page.href}>
                <span className="t">{page.label}</span>
                <span className="d">{page.summary}</span>
                <Arrow />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
