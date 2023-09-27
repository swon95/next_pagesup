import { useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function useDelete() {
  const router = useRouter();
  
  const deleteNotice = useCallback(async (id: number) => {
    try {
        console.log('Sending delete request for id:', id); // id 값 확인
      const res = await axios.delete(`/api/notice/delete`, { params: { id } })
      
      console.log('delete successfully: ', res.data);
      
      router.push('/list'); // 또는 다른 경로로 리다이렉트
    } catch (error: any) {
      console.error(error.message);
    }
  }, [router]);
  
  return { deleteNotice };
}

export default useDelete;
