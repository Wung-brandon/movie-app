import React from 'react';
import useMovieDetails from '../../components/fetchDetailsHook';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';


export default function MovieDetails() {
    const api_key = process.env.REACT_APP_API_KEY;
    const {id} = useParams()
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
    
    const { movieDetails, id: movieId} = useMovieDetails(url);
      // Access the id value
  console.log("Movie ID:", movieId);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const cardSytle = {
    display : "flex",
    flexDirection:"column",
    margin:"2rem 4rem",
    width:"50%"
  }

  const pTagStyle = {
    marginLeft: "0.5rem",
    marginTop: "0.5rem",
    marginBottom: "0.3rem"
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Movie Details</h1>
      <div className="card" style={cardSytle}>
        <img
          alt={movieDetails.title}
          className="img-pic"
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : 'https://www.fillmurray.com/200/300'
          }
        />
        <h4 className="title">
          Title: <span>{movieDetails.title}</span>
        </h4>
        <div style={{marginLeft:"0.7rem"}}>
                    <Rating name="read-only" value={movieDetails.vote_average/2} precision={0.1} readOnly></Rating>
                </div>
        <p className="release">Release Date: {movieDetails.release_date}</p>
        <p style={pTagStyle}>Popularity: {movieDetails.popularity}</p>
        <p style={pTagStyle}>Overview: <span style={{color:"teal", marginBottom:"2rem",}}>{movieDetails.overview}</span></p>

        <Link to='/' 
              style={{
                  textDecoration:"none",
                  marginLeft:"0.5rem", 
                  color:"white",
                  backgroundColor:"teal",
                  width:"7%",
                  padding:"0.2rem",
                  marginTop:"0.4rem",
                  borderRadius:"4px",
                  textAlign:"center"

                  }}>Back</Link>
        
      </div>
    </div>
  );
}