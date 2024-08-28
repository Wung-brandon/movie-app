import '../pages/Trending_page/trending.page.css'

export default function Image(props){
    return(
        <div>
            <img 
                src={props.src}     
                alt={props.alt} 
                className='img-pic'
            />

        </div>
    )
}