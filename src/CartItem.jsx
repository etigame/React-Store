import AddToCart from './AddToCart'

export default function CartItem({ item, cartItems, setCartItems }) {
  const { barcode, name, image, price, amount } = item

  const handleDeleteItem = () => {
    let cloneCart = { ...cartItems } // we need to clone because if we do changes to the original object, it still have the same address in memory - so re-render won't work.
    delete cloneCart[barcode]
    setCartItems(cloneCart)
  }

  return (
    <div>
      <button onClick={handleDeleteItem}>X</button>
      <h3>{name}</h3>
      <img className="product-img" src={image} alt="Item's image" />
      <h4>${price}</h4>
      <AddToCart
        amount={amount}
        barcode={barcode}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  )
}
