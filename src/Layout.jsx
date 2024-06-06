import { useState } from 'react'
import {useEffect} from 'react'
import Cart from './Cart'
import Content from './Content'
import Header from './Header'
import itemsDB from './itemsDB'
import cartItemsDB from './cartItemsDB'
import DataContext from './context/DataContext'
import Popup from './pages/Popup'
import Login from './Login'
import requestData from './utils/requestFunctions'
import {useSearchParams} from "react-router-dom"

export default function Layout() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState({})
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [itemDetails, setItemDetails] = useState({})
  const [searchParams, setSearchParams] = useSearchParams({})

  useEffect(() => {
    let categoriesFromItems = []
    let subCategoriesFromItems = []

    requestData('item', 'GET').then((items) =>{

      items.forEach((item) => {
        if (!categoriesFromItems.includes(item.category))
          categoriesFromItems.push(item.category)
        
        if (!subCategoriesFromItems.includes(item.subCategory))
          subCategoriesFromItems.push(item.subCategory)
      })

      // this setState must be in "then" function because otherwise it will set nothing. we need to wait for the data 
      setCategories(categoriesFromItems)
      setSubCategories(subCategoriesFromItems)
    }
    )

    // fetch('https://jbh-mockserver.onrender.com/categories').then(res => res.json()).then(data => setCategories(Object.keys(data)))
  }, [])
  
  useEffect( () => {
    // setSearchParams({skip: 0, limit: 3}) // that's the way I set queryParams after every filter or for pagination
    // requestData(`item/?skip=${searchParams.get("skip")}&limit=${searchParams.get("limit")}`, 'GET').then(data => setItems(data)).catch(err => err.status === 401 && navigate('/login'))

    // fetch(`https://jbh-mockserver.onrender.com/categories/${categoryName}`).then(res => res.json()).then(data => setItems(data))
  }, [])


  // useEffect(() => {
  //   // when component mounting first - there can be 2 situations: there is data on localStorage, or not. 
  //   // if there **is no** data on localStorage - take data from DB files (at the code), setItems/setCartItems with it, and then "updating useEffect" (which also runs while component mounting) stringifies the items and put on localStorage.
  //   // 2 - if there **is** data on localStorage - take data from localStorage and setItems with it.

  //   if (Object.keys(JSON.parse(localStorage.cartDB)).length > 0) {
  //     setCartItems(JSON.parse(localStorage.cartDB))
  //   } else {
  //     setCartItems(cartItemsDB)
  //   }

  //   if (JSON.parse(localStorage.itemsDB).length > 0) {
  //     setItems(JSON.parse(localStorage.itemsDB))
  //   } else {
  //     setItems(itemsDB)
  //   }
  // }, [])

  // useEffect(() => {localStorage.cartDB = JSON.stringify(cartItems)}, [cartItems]) // also runs when mounting - and stringify the empty object (if cart is empty) - that's why parse succeed at line 13

  // useEffect(() => {localStorage.itemsDB = JSON.stringify(items)}, [items])

  return (
    <section className="layout">
      <Header />
      <Login />
      <DataContext.Provider
        value={{ items, setItems, cartItems, setCartItems, itemDetails, setItemDetails, categories, subCategories }}
      >
        <Cart />
        <Content />
      </DataContext.Provider>
      {/* <Popup /> */}
    </section>
  )
}
