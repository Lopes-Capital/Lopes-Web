import type { NextConfig } from "next";

// Addresses from the previous site, sent to their nearest page on this one.
// Temporary (307) so nothing is cached for good if a page ever comes back.
const RETIRED: Record<string, string> = {
  "/capital-markets": "/investments",
  "/real-estate": "/investments",
  "/education": "/investments",
  "/healthcare": "/investments",
  "/media-consumer": "/investments",
  "/submit": "/introductions",
  "/apply": "/",
  "/discover": "/",
  "/develop": "/",
  "/deliver": "/",
  "/disrupt": "/",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(RETIRED).map(([source, destination]) => ({
      source,
      destination,
      permanent: false,
    }));
  },
};

export default nextConfig;
