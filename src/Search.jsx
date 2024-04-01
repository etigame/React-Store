export default function Search({onInput}) {
    return (
        <div>
            <input type="search" placeholder='Search item' onInput={onInput}/>
        </div>
    )
}