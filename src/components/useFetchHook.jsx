import { useState, useEffect } from 'react';

const useFetchHooks = (url, searchQuery) => {
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);

    async function fetchTrending() {
        // const searchParam = searchQuery ? `&query=${searchQuery}` : '';
        const api_key = process.env.REACT_APP_API_KEY
        const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&query=${searchQuery}&page=${page}`;
        const data = await fetch(url)
        const trend = await data.json();
        setTrending(trend.results);
    }

    useEffect(() => {
        fetchTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, url, searchQuery]);

    const handlePageChange = (event, value) => {
        setPage(value);
    }; 

    return {
        trending,
        handlePageChange
    };
};

export default useFetchHooks;