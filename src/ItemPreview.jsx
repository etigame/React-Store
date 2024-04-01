import AddToCart from './AddToCart'

function ItemPreview({item, setTotal}) {
    return (
        <div>
            <h3>{item.name}</h3>
            <img className='product-img' src={item.image} alt="Item's image" />
            <h4>${item.price}</h4>
            <AddToCart setTotal={setTotal} />
        </div>
    )
}

export default ItemPreview