import { useState, useEffect } from 'react';

export const usePhotos = (category) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const page = category === 'all' ? 1 : Math.floor(Math.random() * 10) + 1;
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=40`)
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  return { photos, loading };
};