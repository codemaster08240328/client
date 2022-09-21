import { useState, useEffect } from 'react';

export function useAsyncFetch<T>(url: string){
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res: Response) => res.json())
      .then((res: T) => {
        setLoading(false);
        setData(res);
      })
      .catch((e: Error) => {
        setLoading(false);
        setError(e.message);
      })
  }, [url]);

  return {
    loading,
    data,
    error,
  }
}