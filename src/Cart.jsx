import CartList from './CartList'
import Total from './Total'
import {useContext} from 'react'
import DataContext from './context/DataContext'
import requestData from './utils/requestFunctions'

export default function Cart() {
  
  const {cartItems, setCartItems} = useContext(DataContext)
  console.log(cartItems)

  let total = 0
  Object.keys(cartItems).forEach(id => {
    total += cartItems[id].price * cartItems[id].amount
  });

  function handleOrder() {
    requestData('order', 'POST', {
      items: cartItems,
      // remember that I send userId (in the req.body) from the decoded token in the server
    })
  }

  return (
    <section>
      <button onClick={() => setCartItems({})}>Delete Cart</button>
      <CartList />
      <Total total={total} />
      <button onClick={handleOrder}>Order</button>
    </section>
  )
}
