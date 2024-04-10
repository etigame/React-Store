import { useState } from 'react'
import Cart from './Cart'
import Content from './Content'
import Header from './Header'
import cartItemsDB from './cartItemsDB'
import DataContext from './context/DataContext'

export default function Layout() {
  const [cartItems, setCartItems] = useState(cartItemsDB)
  const [itemDetails, setItemDetails] = useState({})

  return (
    <section className="layout">
      {/* <Header /> */}
      <DataContext.Provider
        value={{ cartItems, setCartItems, itemDetails, setItemDetails }}
      >
        <Cart />
        <Content />
      </DataContext.Provider>
    </section>
  )
}
