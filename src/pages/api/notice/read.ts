import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../utils/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // HTTP 메서드 확인
  if (req.method === "GET") {
    try {
      // id 파라미터 값을 숫자로 변환
      const id = Number(req.query.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid id parameter" });
      }

      // 데이터베이스에서 고유한 공지 찾기
      const notice = await prisma.notice.findUnique({
        where: { id },
        select: {
          id: true,
          title: true,
          content: true,
        },
      });

      // 공지가 존재하지 않으면 404 Not Found 응답 반환
      if (!notice) return res.status(404).json({ error: "Notice not found." });

      // 찾아진 공지를 JSON 형식으로 반환
      return res.json(notice);
    } catch (error) {
      console.error("Error fetching notice:", error);
      // 서버 오류 발생 시 500 Internal Server Error 응답 반환
      return res.status(500).json({ error: "Failed to fetch notice." });
    }
  }

  // GET 요청이 아닌 경우 405 Method Not Allowed 응답 반환
  return res.status(405).end();
}
