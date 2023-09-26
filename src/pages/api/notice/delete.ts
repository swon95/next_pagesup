import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if(req.method === 'DELETE') {
    try {
      await prisma.notice.delete({
        where: { id: Number(id) },
      })
      console.log('Delete successful'); // 삭제 성공 로그
      res.status(200).json({ success: true, message: 'Notice deleted successfully' });
    } catch (error: any) {
        console.error('Error deleting notice:', error.message); // 에러 메시지 확인
      res.status(500).json({ error: "Unable to delete notice" })
    }
  } else {
    console.log('Invalid method:', req.method); // 유효하지 않은 메서드 로그
    res.status(405).end() // Method Not Allowed
  }
}
