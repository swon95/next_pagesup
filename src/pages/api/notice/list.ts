import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../utils/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const notices = await prisma.notice.findMany({
        select: {
          id: true,
          title: true,
          content: true
      }
    }); // 모든 공지를 가져옴
      return res.json(notices);
    } catch (error) {
      console.error("Error fetching notices:", error)
      return res.status(500).json({ error: "Failed to fetch notices." });
    }
  }
  // 다른 HTTP 메서드에 대한 요청이 오면 405 Method Not Allowed를 반환
  return res.status(405).end();
}