import { useState } from 'react'
import {useEffect} from 'react'
import Cart from './Cart'
import Content from './Content'
import Header from './Header'
import itemsDB from './itemsDB'
import DataContext from './context/DataContext'

export default function Layout() {
  const [items, setItems] = useState(itemsDB)
  const [cartItems, setCartItems] = useState({})
  const [itemDetails, setItemDetails] = useState({})


  useEffect(() => {
    if (localStorage.cartDB) setCartItems(JSON.parse(localStorage.cartDB))
    if (localStorage.itemsDB) setItems(JSON.parse(localStorage.itemsDB))
  }, [])

  useEffect(() => {localStorage.cartDB = JSON.stringify(cartItems)}, [cartItems]) // also runs when mounting - and stringify the empty object (if cart is empty) - that's why parse succeed at line 13

  useEffect(() => {localStorage.itemsDB = JSON.stringify(items)}, [items])

  return (
    <section className="layout">
      <Header />
      <DataContext.Provider
        value={{ items, setItems, cartItems, setCartItems, itemDetails, setItemDetails }}
      >
        <Cart />
        <Content />
      </DataContext.Provider>
    </section>
  )
}
