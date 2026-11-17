/** The five section pages, in reading order. Drives the masthead nav and the home index. */
export const PAGES = [
  {
    href: "/gcu",
    label: "GCU",
    summary: "Grand Canyon University, 2004 to 2017.",
  },
  {
    href: "/team",
    label: "Team",
    summary: "Brent and Chris Richardson, and the investment team.",
  },
  {
    href: "/investments",
    label: "Investments",
    summary: "The sectors and companies the office has invested in.",
  },
  {
    href: "/history",
    label: "History",
    summary: "A timeline from 1969, starting with Gail Richardson.",
  },
  {
    href: "/introductions",
    label: "Introductions",
    summary: "Tell us about your company in a few lines.",
  },
] as const;
