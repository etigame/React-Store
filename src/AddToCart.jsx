import {useContext} from 'react'
import DataContext from './context/DataContext'

export default function AddToCart({amount, barcode}) {
  const {cartItems, setCartItems} = useContext(DataContext)

  let cloneCart = { ...cartItems }

  let handlePlus = () => {
    cloneCart[barcode].amount += 1
    setCartItems(cloneCart)
  }

  let handleMinus = () => {
    if (amount === 1) handleDeleteItem()
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

  return (
      <div>
        <button onClick={handlePlus}>+</button>
        <span>{amount}</span>
        <button onClick={handleMinus}>-</button>
      </div>
  )
}
