import type { NextApiRequest, NextApiResponse } from "next";

const ExitPreview = async (_req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData();
  res.writeHead(307, { Location: "/" });
  res.end();
};

export default ExitPreview;
