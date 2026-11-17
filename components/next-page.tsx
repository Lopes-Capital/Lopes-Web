import Link from "next/link";
import { Arrow } from "@/components/arrow";

/** The "Next: …" link that closes each section page. */
export function NextPage({ href, label }: { href: string; label: string }) {
  return (
    <p className="next wrap">
      <Link href={href}>
        Next: {label} <Arrow />
      </Link>
    </p>
  );
}
