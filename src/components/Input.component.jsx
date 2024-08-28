import '../pages/search_page/search.page.css'


export default function InputSearch(props){

    return(
        <div className='search-part'>
            <input 
                type={props.type} 
                placeholder={props.placeholder} 
                onChange={props.change}
                value={props.val}
                
            />
        </div>
    )
}