"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PAGES } from "@/lib/site";

export function SiteNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Pages">
      {PAGES.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          aria-current={pathname === page.href ? "page" : undefined}
        >
          {page.label}
        </Link>
      ))}
    </nav>
  );
}
