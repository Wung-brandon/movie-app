import './search.page.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchSearchHooks from '../../components/fetchSearch';
import MovieCard from '../../components/Card';
import InputSearch from '../../components/Input.component';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const api_key = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&page=${page}`;
  const { trending, totalPages } = useFetchSearchHooks(url, searchQuery);
  const navigate = useNavigate();

  function handleChange(e) {
    const value = e.target.value;
    setSearchQuery(value);
    setPage(1);
  }

  const handlePageChange = (event, selectedPage) => {
    
    setPage(selectedPage);
  };

  const handleMovieClick = (id) => {
    navigate(`/trending/${id}`);
  };

  return (
    <div>
      <InputSearch
        type="text"
        placeholder="Search any Movie"
        change={handleChange}
        val={searchQuery}
      />

      <div className="movie-list">
        {trending.map((mov) => (
          <div
            className="movie-card"
            key={mov.id}
            onClick={() => handleMovieClick(mov.id)}
          >
            <MovieCard movie={mov} />
          </div>
        ))}
      </div>

      <Stack spacing={2} sx={{ marginBottom: '1rem', marginLeft: '1rem', zIndex: 1000 }}>
        <Pagination
          count={totalPages}
          variant="outlined"
          color="success"
          shape="rounded"
          page={page}
          onChange={handlePageChange}
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'white',
            },
            '& .Mui-selected': {
              backgroundColor: 'teal',
              color: '#151922',
            },
            '& .MuiPaginationItem-page:hover': {
              backgroundColor: 'teal',
              color: '#151922',
            },
          }}
        />
      </Stack>
    </div>
  );
}