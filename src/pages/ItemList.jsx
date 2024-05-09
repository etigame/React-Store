import ItemPreview from '../ItemPreview'
import Search from '../Search'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function ItemList() {
  const { categoryName } = useParams() // it's better to take the category's name from the URL instead of take the category's name from the props (for instance, in case of inserting the URL directly and not by clicking on the category)
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])

  // const filteredItems =
  //   categoryName === 'all'
  //     ? items
  //     : items
  //         .filter((item) => item.category === categoryName)
  //         .filter((item) => item.name.toLowerCase().includes(input))

  useEffect( () => {
    fetch(`https://jbh-mockserver.onrender.com/categories/${categoryName}`).then(res => res.json()).then(data => setItems(data))
  }, [])


  const handleSearch = (e) => {
    setInput(e.target.value.toLowerCase())
  }

  return (
    <section>
      <Search onInput={handleSearch} />

      {items.map((item) => (
        <ItemPreview item={item} key={item.id} />
      ))}
    </section>
  )
}
