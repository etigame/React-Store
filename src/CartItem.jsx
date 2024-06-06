import AddToCart from './AddToCart'
import { useContext } from 'react'
import DataContext from './context/DataContext'

export default function CartItem({ item }) {
  const { _id, name, emoji, price, amount, category } = item
  const { cartItems, setCartItems, setItemDetails } = useContext(DataContext)

  const handleDeleteItem = () => {
    let cloneCart = { ...cartItems } // we need to clone because if we do changes to the original object, it still have the same address in memory - so re-render won't work.
    delete cloneCart[_id]
    setCartItems(cloneCart)
  }

  return (
    <div>
      <button onClick={handleDeleteItem}>X</button>
      <div onClick={() => setItemDetails(item)}>
        <h3>{name}</h3>
        <h3>{emoji}</h3>
        {/* <img className="product-img" src={image} alt="Item's image" /> */}
        <h4>${price}</h4>
      </div>
      <AddToCart amount={amount} _id={_id} />
    </div>
  )
}
