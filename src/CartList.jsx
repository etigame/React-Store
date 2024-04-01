import CartItem from './CartItem'

export default function CartList({ cartItems, setCartItems }) {

  return (
    <section className='cart-list'>
      {Object.keys(cartItems).map((barcode) => (
        <CartItem
          item={cartItems[barcode]}
          key={cartItems[barcode].barcode}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </section>
  )
}
