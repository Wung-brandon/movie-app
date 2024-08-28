import { useEffect, useState } from 'react';

const useFetchSearchHooks = (url, searchQuery) => {
  const [trending, setTrending] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrending(data.results);
        setTotalPages(data.total_pages);
        console.log("total pages",data.total_pages)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    const filterResults = () => {
      if (searchQuery) {
        const filteredResults = trending.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setTrending(filteredResults);
      }
    };

    filterResults();
  }, [searchQuery, trending]);

  return { trending, totalPages };
};

export default useFetchSearchHooks;