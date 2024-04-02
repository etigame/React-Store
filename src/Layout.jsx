import { useState } from 'react'
import Cart from './Cart'
import Content from './Content'
import Header from './Header'
import cartItemsDB from './cartItemsDB'
import ItemDetails from './ItemDetails'



export default function Layout() {
  const [cartItems, setCartItems] = useState(cartItemsDB)
  const [itemDetails, setItemDetails] = useState({})

  return (
    <section className='layout'>
      {/* <Header /> */}
      <ItemDetails item={itemDetails}/>
      <Cart cartItems={cartItems} setCartItems={setCartItems} setItemDetails={setItemDetails}/>
      <Content cartItems={cartItems} setCartItems={setCartItems} setItemDetails={setItemDetails}/>
    </section>
  )
}
