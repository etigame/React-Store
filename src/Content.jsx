import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import DataContext from './context/DataContext'
import { Routes, Route } from 'react-router-dom'
import ItemList from './pages/ItemList'
import ItemDetails from './pages/ItemDetails'
import Categories from './pages/Categories'
import NotFound from './pages/NotFound'
import CategoryLayout from './CategoryLayout'
import ItemEdit from './pages/ItemEdit'

export default function Content() {
  const [category, setCategory] = useState('')
  const { items, itemDetails } = useContext(DataContext)

  return (
    <section className="content">
      <Routes>
        <Route index element={<Categories />} />
        <Route path="category/:categoryName" element={<CategoryLayout />}>
          <Route index element={<ItemList items={items}/>} />
          <Route path=":itemId">
            <Route index element={<ItemDetails />} />
            <Route path=":edit" element={<ItemEdit />} />
          </Route>
        </Route>
        <Route path='create-item' element={<ItemEdit />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}
