import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  // PUT 요청일 경우, 아래 조건 실행
  if(req.method === 'PUT') {
    try {
        // Detail 에서 제목, 내용 가져와 req.body 에 담음
      const { id, title, content } = req.body;
      const notice = await prisma.notice.update({
        where: { id: Number(id) },
        data: { title, content },
      });
      res.status(200).json(notice);
    } catch (error: any) {
      console.error('Error updating notice:', error.message);
      res.status(500).json({ error: "Unable to update notice" })
    }
  } else {
    console.log('Invalid method:', req.method)
    res.status(405).end()
  }
}
