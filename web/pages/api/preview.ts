import type { NextApiRequest, NextApiResponse } from "next";

const Preview = async (req: NextApiRequest & { query: { slug: string } }, res: NextApiResponse) => {
  // Bail if no secret or slug defined
  if (req.query.token !== process.env.SANITY_STUDIO_PREVIEW_SECRET || !req.query.type) {
    return res.status(401).json({ message: "Invalid preview request" });
  }

  // Enable Preview Mode by setting the cookies and passing the sanity token for fetching
  res.setPreviewData(
    { token: process.env.SANITY_API_TOKEN },
    {
      maxAge: 20,
    }
  );

  const sanitizedSlug = req.query.slug.replace("/", "");

  // Redirect to the associated page
  res.redirect("/");
};

export default Preview;
