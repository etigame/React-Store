import CartList from './CartList'
import Total from './Total'
import {useContext} from 'react'
import DataContext from './context/DataContext'

export default function Cart() {
  
  const {cartItems, setCartItems} = useContext(DataContext)

  let total = 0
  Object.keys(cartItems).forEach(id => {
    total += cartItems[id].price * cartItems[id].amount
  });

  return (
    <section>
      <button onClick={() => setCartItems({})}>Delete Cart</button>
      <CartList />
      <Total total={total} />
    </section>
  )
}
