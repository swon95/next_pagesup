import { useState, useEffect } from "react";
import axios from "axios";


export type Notice = {
  id: number;
  title: string;
  content: string;
}

const useNotices = () => {
    
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/notice/list"); // API endpoint 수정 필요
        setNotices(response.data);
        console.log('reff: ', response.data)
        console.log(notices.length);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("dd"))
      } 
    }finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { notices, loading, error };
};

export default useNotices;