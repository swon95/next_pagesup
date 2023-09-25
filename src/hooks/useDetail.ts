import { useState, useEffect } from "react";
import axios from "axios";

interface Notice {
  id: number;
  title: string;
  content: string;
  // 기타 필요한 필드들
}

function useDetail(id: number) {
  const [notice, setNotice] = useState<Notice | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/notice/read`, { params: { id } });
        setNotice(res.data);
      } catch (error) {
        if(error instanceof Error) {
          setError(error.message);          
        } else {
          setError("An error occurred")
        }
      } finally {
        setLoading(false);
      }
    };

    if (!isNaN(id)) {
      fetchData();
    }
  }, [id]);

  return { notice, error, loading };
}

export default useDetail;
