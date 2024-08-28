import './trending.page.css'
import Title from '../../components/title.component';
import { useState } from 'react';
import PaginationComponent from '../../components/pagination';
import useFetchHooks from '../../components/useFetchHook';
import MovieCard from '../../components/Card';
import SwipeableTextMobileStepper from '../../components/carousel.component';
import InputSearch from '../../components/Input.component';


export default function TrendingPage() {
    // console.log("api key", process.env.REACT_APP_API_KEY)
    
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`

    const { trending, handlePageChange } = useFetchHooks(url);
    const [movieSearch, setMovieSearch] = useState('');

    function handleChange(e) {
        const value = e.target.value;
        setMovieSearch(value);
    }

    const filteredMovies = trending.filter((mov) =>
        mov.title.toLowerCase().includes(movieSearch.toLowerCase())
    );

    return (
        <div className='trending'>
            <SwipeableTextMobileStepper />
            <Title text="trending today" />
            {/* <div className="today">
                <WhatshotIcon className='trend-icon' /><h2>trending today</h2><WhatshotIcon className='trend-icon' />
            </div> */}
{/*             
            <div className='search-part'>
                <input
                    type='text'
                    placeholder='Search any movie'
                    onChange={handleChange}
                    value={movieSearch}
                />
            </div> */}
            <InputSearch 
                type='text' 
                placeholder="Search any Movie" 
                change={handleChange} 
                val={movieSearch} 
            />
            <div className='trend-movies'>
                {filteredMovies.map((movie) => {
                    return (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                })}
            </div>
            <PaginationComponent change={handlePageChange} />

        </div>
    )
}