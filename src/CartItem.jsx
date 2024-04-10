import AddToCart from './AddToCart'
import { useContext } from 'react'
import DataContext from './context/DataContext'

export default function CartItem({ item }) {
  const { barcode, name, image, price, amount } = item
  const { cartItems, setCartItems, setItemDetails } = useContext(DataContext)

  const handleDeleteItem = () => {
    let cloneCart = { ...cartItems } // we need to clone because if we do changes to the original object, it still have the same address in memory - so re-render won't work.
    delete cloneCart[barcode]
    setCartItems(cloneCart)
  }

  return (
    <div>
      <button onClick={handleDeleteItem}>X</button>
      <div onClick={() => setItemDetails(item)}>
        <h3>{name}</h3>
        <img className="product-img" src={image} alt="Item's image" />
        <h4>${price}</h4>
      </div>
      <AddToCart amount={amount} barcode={barcode} />
    </div>
  )
}
