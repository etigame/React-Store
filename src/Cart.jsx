import CartList from './CartList'
import Total from './Total'

export default function Cart({cartItems, setCartItems}) {

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
