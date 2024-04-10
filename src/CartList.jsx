import CartItem from './CartItem'
import {useContext} from 'react'
import DataContext from './context/DataContext'


export default function CartList() {
  const {cartItems} = useContext(DataContext)
  return (
    <section className='cart-list'>
      {Object.keys(cartItems).map((barcode) => (
        <CartItem
          item={cartItems[barcode]}
          key={cartItems[barcode].barcode}
        />
      ))}
    </section>
  )
}
