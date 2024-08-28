import './header.component.css'
import VideocamIcon from '@mui/icons-material/Videocam';

export default function Header(){
    return(
        <div className="header">
            <VideocamIcon sx={{marginRight: "4px", fontSize:"2rem"}}/> <h2>The Movie central</h2>

        </div>
    )
}