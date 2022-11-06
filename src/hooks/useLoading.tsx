import { useState } from 'react';

const useLoading = () => {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 300);
  return isLoading;
};
export default useLoading;
