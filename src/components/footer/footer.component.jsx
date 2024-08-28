import './footer.component.css'
import { NavLink } from 'react-router-dom'
import MovieIcon from '@mui/icons-material/Movie';
// import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from '@mui/icons-material/Tv';

export default function Footer(){
    const data = [
        {
            id : 0,
            icon : <WhatshotIcon />,
            name : "Trending",
            link : '/'
        },
        {
            id : 1,
            icon : <MovieIcon />,
            name : "movies",
            link : '/movies'
        },
        {
            id : 2,
            icon : <TvIcon />,
            name : "tv series",
            link : '/tv'
        },
        // {
        //     id : 3,
        //     icon : <SearchIcon />,
        //     name : "search",
        //     link : '/search'
        // }
    ]
    return(
        <div className="footer">
            <div className="shows">
                {data.map((val) => {
                    return(
                        <div className='all-data' key={val.id}>
                            <NavLink to={`${val.link}`} >
                                <button className='all-buttons'>
                                    {val.icon}
                                    <br />
                                    <h5>{val.name}</h5>
                                </button>
                            </NavLink>
                        
                        </div>
                    )
                })}
       
                
            </div>

        </div>
    )
}