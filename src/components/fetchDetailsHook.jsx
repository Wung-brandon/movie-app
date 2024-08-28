import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

const useMovieDetails = (url) => {
  const [movieDetails, setMovieDetails] = useState(null);
//   const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [url]);

  return {  
            movieDetails, 
            
        };
};

export default useMovieDetails;