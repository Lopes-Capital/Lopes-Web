import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display, Libre_Caslon_Text } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const display = Libre_Caslon_Display({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const text = Libre_Caslon_Text({
  variable: "--font-text",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lopes Capital | Richardson family office",
    template: "%s | Lopes Capital",
  },
  description:
    "Lopes Capital is the private family office of the Richardson family, led by Brent and Chris Richardson, the operators behind the 2004 rescue of Grand Canyon University.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>

        <header className="wrap mast">
          <Link className="brand" href="/">
            <Image
              src="/brand/lopes-capital-logo.png"
              alt="Lopes Capital"
              width={94}
              height={132}
              loading="eager"
            />
          </Link>
          <SiteNav />
        </header>

        <main id="main">{children}</main>

        <footer className="dark">
          <div className="wrap">
            <Image
              className="seal"
              src="/brand/lopes-capital-seal.png"
              alt="Lopes Capital"
              width={132}
              height={132}
            />
            <span className="place caps">Scottsdale, Arizona</span>
            <p>
              Lopes Capital is a private investment office. It invests the Richardson
              family&apos;s capital and also sponsors investment vehicles. Nothing on this
              site is an offer to sell securities or a solicitation of investment; any
              offering is made only through its own formal documents. Figures are drawn
              from public filings and the principals&apos; own account, as marked above.
            </p>
            <p>&copy; 2026 Lopes Capital</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
