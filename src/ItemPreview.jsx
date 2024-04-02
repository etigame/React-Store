import AddToCartContent from './AddToCartContent'

function ItemPreview({ item, cartItems, setCartItems, setItemDetails }) {
  const { name, image, price, barcode } = item
  return (
    <div>
      <div onClick={() => setItemDetails(item)}>
        <h3>{name}</h3>
        <img className="product-img" src={image} alt="Item's image" />
        <h4>${price}</h4>
      </div>
      <AddToCartContent
        item={item}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  )
}

export default ItemPreview
