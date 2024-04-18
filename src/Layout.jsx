import { useState } from 'react'
import {useEffect} from 'react'
import Cart from './Cart'
import Content from './Content'
import Header from './Header'
import itemsDB from './itemsDB'
import cartItemsDB from './cartItemsDB'
import DataContext from './context/DataContext'

export default function Layout() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState({})
  const [itemDetails, setItemDetails] = useState({})


  useEffect(() => {
    // when component mounting first - there can be 2 situations: there is data on localStorage, or not. 
    // if there **is no** data on localStorage - take data from DB files (at the code), setItems/setCartItems with it, and then "updating useEffect" (which also runs while component mounting) stringifies the items and put on localStorage.
    // 2 - if there **is** data on localStorage - take data from localStorage and setItems with it.

    if (Object.keys(JSON.parse(localStorage.cartDB)).length > 0) {
      setCartItems(JSON.parse(localStorage.cartDB))
    } else {
      setCartItems(cartItemsDB)
    }

    if (JSON.parse(localStorage.itemsDB).length > 0) {
      setItems(JSON.parse(localStorage.itemsDB))
    } else {
      setItems(itemsDB)
    }
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
