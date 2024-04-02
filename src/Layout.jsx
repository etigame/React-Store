import { useState } from 'react'
import Cart from './Cart'
import Content from './Content'
import Header from './Header'
import cartItemsDB from './cartItemsDB'



export default function Layout() {
  const [cartItems, setCartItems] = useState(cartItemsDB)

  return (
    <section className='layout'>
      {/* <Header /> */}
      <Cart cartItems={cartItems} setCartItems={setCartItems}/>
      <Content cartItems={cartItems} setCartItems={setCartItems}/>
    </section>
  )
}
