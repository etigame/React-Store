import { useState } from 'react'
import CartList from './CartList'
import Total from './Total'
import cartItemsDB from './cartItemsDB'

export default function Cart() {
  const [cartItems, setCartItems] = useState(cartItemsDB)

  let total = 0
  Object.keys(cartItems).forEach(barcode => {
    total += cartItems[barcode].price * cartItems[barcode].amount
  });

  return (
    <section>
      <button onClick={() => setCartItems({})}>Delete Cart</button>
      <CartList
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Total total={total} />
    </section>
  )
}
