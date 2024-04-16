import ItemPreview from '../ItemPreview'
import Search from '../Search'
import {useParams} from 'react-router-dom'
import {useState} from 'react'

export default function ItemList({items}) {
  const {categoryName} = useParams()
  const [input, setInput] = useState('')


  const filteredItems =
  categoryName === 'all'
    ? items
    : items
        .filter((item) => item.category === categoryName).filter((item) => item.name.toLowerCase().includes(input))

const handleSearch = (e) => {
  setInput(e.target.value.toLowerCase())
}

  return (
    <section>
      <Search onInput={handleSearch} />

      {filteredItems.map((item) => (
        <ItemPreview item={item} key={item.barcode} />
      ))}
    </section>
  )
}

