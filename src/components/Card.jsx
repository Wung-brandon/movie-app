
import Image from "./Image.component"
import { NavLink } from "react-router-dom"
import '../pages/Trending_page/trending.page.css'
import Tooltip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';

export default function MovieCard({ movie }){

    const title = movie.title || movie.name // Check if the movie has a 'title', otherwise use 'name'
    const release_date = movie.release_date || movie.first_air_date

    return(
        <div>
    <div className='movies-trend' key={movie.id}>
        <NavLink to={`trending/${movie.id}`} style={{ textDecoration: 'none', color: 'white' }}>
            <div className='card'>
            <Image
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'}
                alt={title}
            />
            <h4 className='title'>
                Title: <span>{title}</span>
            </h4>
            <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
                <div style={{marginLeft:"0.7rem"}}>
                    <Rating name="read-only" value={movie.vote_average/2} precision={0.1} readOnly />
                </div>
            </Tooltip>
            <p className='release'>Release Date: {release_date}</p>
            </div>
        </NavLink>
        </div>
    </div>
    )
}