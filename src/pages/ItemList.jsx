import ItemPreview from '../ItemPreview'
import { useParams, useSearchParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../context/DataContext'
import requestData from '../utils/requestFunctions'

export default function ItemList() {
  const { categoryName } = useParams() // it's better to take the category's name from the URL instead of take the category's name from the props (for instance, in case of inserting the URL directly and not by clicking on the category)
  const [items, setItems] = useState([])
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

  useEffect(() => {
    requestData(
      `item/?category=${categoryName}&page=${searchParams.get('page')}`,
      'GET'
    ).then((items) => {
      setItems(items)
    })
  }, [categoryName, searchParams])

  // const filteredItems =
  //   categoryName === 'all'
  //     ? items
  //     : items
  //         .filter((item) => item.category === categoryName)
  //         .filter((item) => item.name.toLowerCase().includes(input))

  // useEffect( () => {
  //   const items = requestData('item', 'GET')
  //   setItems(items)

  //   // fetch(`https://jbh-mockserver.onrender.com/categories/${categoryName}`).then(res => res.json()).then(data => setItems(data))
  // }, [])

  const getMoreItems = () => {
    setSearchParams((prev) => {
      prev.set("page", Number(prev.get("page")) +1) // that's the only way we can update searchParams
      return prev
    })
  }

  if (items.length > 0)
    return (
      <section>
        {items.map((item) => (
          <ItemPreview item={item} key={item._id} />
        ))}

        <button onClick={getMoreItems}>More Items</button>
      </section>
    )
}
