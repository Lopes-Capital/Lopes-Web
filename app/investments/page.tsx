import type { Metadata } from "next";
import Image from "next/image";
import { NextPage } from "@/components/next-page";

export const metadata: Metadata = { title: "Investments" };

const COMPANIES = [
  { name: "Watershed Carwash", file: "watershed-carwash.png", width: 197, height: 101 },
  { name: "FatCats", file: "fatcats.png", width: 363, height: 260 },
  { name: "Overwatch Capital", file: "overwatch-capital.png", width: 105, height: 89 },
  { name: "Grand Canyon University", file: "grand-canyon-university.png", width: 420, height: 77 },
  { name: "Woz U", file: "woz-u.png", width: 420, height: 155 },
  { name: "Seaborne Airlines", file: "seaborne-airlines.png", width: 420, height: 189 },
  { name: "FTAI Aviation", file: "ftai-aviation.png", width: 420, height: 156 },
  { name: "NeuroHome", file: "neurohome.png", width: 520, height: 114 },
  { name: "Lopes Labs", file: "lopes-labs.png", width: 520, height: 110 },
];

export default function InvestmentsPage() {
  return (
    <>
      <header className="pagehead wrap">
        <span className="orn" aria-hidden="true" />
        <h1>Investments</h1>
        <p>Lopes Capital invests in real estate and operating businesses.</p>
      </header>

      <section className="sect wrap line" aria-label="Companies">
        <ul className="logos">
          {COMPANIES.map((company) => (
            <li key={company.file}>
              {/* Unoptimized on purpose: the grid sizes each logo from its natural
                  dimensions, and the optimiser's 1x/2x srcset halves those on retina
                  screens. */}
              <Image
                src={`/investments/${company.file}`}
                alt={company.name}
                width={company.width}
                height={company.height}
                unoptimized
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="sect wrap line">
        <p className="lead narrow">
          Lopes Capital also sponsors investment vehicles alongside the family&apos;s
          capital. This site does not describe their terms.
        </p>
      </section>

      <NextPage href="/history" label="History" />
    </>
  );
}
