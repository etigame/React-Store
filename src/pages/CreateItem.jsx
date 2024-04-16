import { useState, useContext } from 'react'
import DataContext from '../context/DataContext'
import { generateBarcode } from '../utils'

export default function CreateItem() {
  const { items, setItems } = useContext(DataContext)
  const [newItemData, setNewItemData] = useState({
    name: '',
    image: '',
    emoji: '',
    price: '',
    category: '',
  })

  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break
      case 'checkbox':
        value = target.checked
        break
      default:
        break
    }

    setNewItemData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const barcode = generateBarcode()
    let cloneItems =  [...items]
    cloneItems.push({ ...newItemData, barcode })
    setItems(cloneItems)
    console.log(cloneItems)
  }

  return (
    <section className="create-item">
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Image URL
          <input type="text" name="image" onChange={handleChange} />
        </label>
        <label>
          Emoji
          <input
            type="text"
            name="emoji"
            maxLength="1"
            onChange={handleChange}
          />
        </label>
        <label>
          Price
          <input
            type="number"
            name="price"
            min="0"
            step="0.01"
            onChange={handleChange}
          />
        </label>
        <label>
          Category
          <select name="category" onChange={handleChange}>
            <option value="fruits">fruits</option>
            <option value="vegetables">vegetables</option>
            <option value="diary">diary</option>
            <option value="alcohol">alcohol</option>
          </select>
        </label>
        <button type="submit">Create Item</button>
      </form>
    </section>
  )
}
