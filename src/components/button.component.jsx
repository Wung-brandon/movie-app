

export default function Button(props){

    return(
        <div>
            <button className={props.className}>{props.text}</button>
        </div>
    )
}