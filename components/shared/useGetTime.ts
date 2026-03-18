import { useEffect, useState } from 'react';

export const useGetTime = () => {
  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return time;
};
