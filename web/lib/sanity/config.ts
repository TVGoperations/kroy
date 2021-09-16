const config = {
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  useCdn: process.env.NODE_ENV === "production",
};

export default config;
