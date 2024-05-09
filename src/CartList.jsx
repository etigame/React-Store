import CartItem from './CartItem'
import {useContext} from 'react'
import DataContext from './context/DataContext'


export default function CartList() {
  const {cartItems} = useContext(DataContext)
  return (
    <section className='cart-list'>
      {Object.keys(cartItems).map((id) => (
        <CartItem
          item={cartItems[id]}
          key={cartItems[id].id}
        />
      ))}
    </section>
  )
}
