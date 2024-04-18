import { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext'
import { generateBarcode } from '../utils'

export default function ItemEdit() {
  const { items, setItems } = useContext(DataContext)
  const { itemId } = useParams()
  const navigate = useNavigate()
  const [itemData, setItemData] = useState({
    name: '',
    image: '',
    emoji: '',
    price: '',
    category: '',
  })

  useEffect(() => {
    if (itemId) {
      setItemData(items.find((item) => item.barcode === itemId))
    }
  }, [])

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
    setItemData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let cloneItems = [...items]
    if (itemId) {
      const itemIdx = cloneItems.findIndex((item) => item.barcode === itemId)
      cloneItems.splice(itemIdx, 1, itemData)
      setItems(cloneItems)
      navigate(-1)
    } else {
      const barcode = generateBarcode() + ''
      cloneItems.push({ ...itemData, barcode })
      setItems(cloneItems)
      navigate(`/category/${itemData.category}`)
    }
  }

  return (
    <section className="item-edit">
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={itemData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Image URL
            <input
              type="text"
              name="image"
              value={itemData.image}
              onChange={handleChange}
            />
          </label>
          <label>
            Emoji
            <input
              type="text"
              name="emoji"
              maxLength="1"
              value={itemData.emoji}
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
              value={itemData.price}
              onChange={handleChange}
            />
          </label>
          <label>
            Category
            <select
              name="category"
              value={itemData.category}
              onChange={handleChange}
            >
              <option value="fruits">fruits</option>
              <option value="vegetables">vegetables</option>
              <option value="diary">diary</option>
              <option value="alcohol">alcohol</option>
            </select>
          </label>
          <button type="submit">{itemId ? 'Edit Item' : 'Create Item'}</button>
        </form>
    </section>
  )
}
