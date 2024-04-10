import {useContext} from 'react'
import DataContext from './context/DataContext'


export default function AddToCartContent({ item }) {
  const {cartItems, setCartItems} = useContext(DataContext)
  let {barcode} = item 
  let itemAmount = cartItems[barcode] ? cartItems[barcode].amount : 0
  let cloneCart = { ...cartItems }

  let handlePlus = () => {
    cloneCart[barcode].amount += 1
    setCartItems(cloneCart)
  }

  let handleMinus = () => {
    if (itemAmount === 1) handleDeleteItem()
    else {
      cloneCart[barcode].amount -= 1
      setCartItems(cloneCart)
    }
  }

  const handleDeleteItem = () => {
    let cloneCart = { ...cartItems }
    delete cloneCart[barcode]
    setCartItems(cloneCart)
  }

  const handleAddToCart = () => {
    cloneCart[barcode] = {...item, amount: itemAmount + 1}
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
