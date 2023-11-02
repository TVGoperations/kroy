const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const BASE_URL = process.env.NODE_ENV === "development" ? `http://localhost:3000` : "https://kroy.vercel.app";
module.exports = withBundleAnalyzer({
  env: {
    BASE_URL,
    SANITY_STUDIO_API_DATASET: process.env.SANITY_STUDIO_API_DATASET,
    SANITY_STUDIO_API_PROJECT_ID: process.env.SANITY_STUDIO_API_PROJECT_ID,
    SANITY_STUDIO_API_TOKEN: process.env.SANITY_STUDIO_API_TOKEN,
    SANITY_STUDIO_API_VERSION: process.env.SANITY_STUDIO_API_VERSION,
  },
  images: {
    domains: ["cdn.sanity.io", "www.youtube.com", "yt3.ggpht.com"],
  },
});
