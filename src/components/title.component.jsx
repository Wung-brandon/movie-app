

import WhatshotIcon from '@mui/icons-material/Whatshot';


export default function Title(props){
    return(
    <div className="today">
        <WhatshotIcon className='trend-icon' /><h2 style={{textTransform:"capitalize"}}>{props.text}</h2><WhatshotIcon className='trend-icon' />
    </div>
    )
}