import './series.page.css'
import useFetchHooks from '../../components/useFetchHook'
import MovieCard from '../../components/Card';
import SwipeableTextMobileStepper from '../../components/carousel.component';
import PaginationComponent from '../../components/pagination';
import InputSearch from '../../components/Input.component';
import Title from '../../components/title.component';
import { useState } from 'react';

export default function Series() {
    const [getMovie, setMovie] = useState("");
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}`

    const { trending, handlePageChange } = useFetchHooks(url);
    console.log(trending)

    function handleChange(e) {
        const value = e.target.value;
        setMovie(value);
    }

    // const filteredMovie = trending.filter((mov) =>
    //     mov.title.toLowerCase().includes(getMovie.toLowerCase())
    // );

    return (
        <div>
            <SwipeableTextMobileStepper />
            <InputSearch
                type="text"
                placeholder="Search any Movie"
                change={handleChange}
                val={getMovie}
            />
            <Title text="trending series" />
            <div className='trend-movies'>
                {trending.map((mov) => {
                    return (
                        <MovieCard key={mov.id} movie={mov} />
                    )
                })}
            </div>

            <PaginationComponent change={handlePageChange} />
        </div>
    )
}