import {useContext} from 'react'
import DataContext from './context/DataContext'


export default function AddToCartContent({ item }) {
  const {cartItems, setCartItems} = useContext(DataContext)
  let {id} = item 
  let itemAmount = cartItems[id] ? cartItems[id].amount : 0
  let cloneCart = { ...cartItems }

  let handlePlus = () => {
    cloneCart[id].amount += 1
    setCartItems(cloneCart)
  }

  let handleMinus = () => {
    if (itemAmount === 1) handleDeleteItem()
    else {
      cloneCart[id].amount -= 1
      setCartItems(cloneCart)
    }
  }

  const handleDeleteItem = () => {
    let cloneCart = { ...cartItems }
    delete cloneCart[id]
    setCartItems(cloneCart)
  }

  const handleAddToCart = () => {
    cloneCart[id] = {...item, amount: itemAmount + 1}
    setCartItems(cloneCart)
  }

  return (
    <div>
      {itemAmount === 0 ? (
        <button onClick={handleAddToCart}>Add To Cart</button>
      ) : (
        <div>
          <button onClick={handlePlus}>+</button>
          <span>{itemAmount}</span>
          <button onClick={handleMinus}>-</button>
        </div>
      )}
    </div>
  )
}
