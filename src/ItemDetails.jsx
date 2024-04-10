import {useContext} from 'react'
import DataContext from './context/DataContext'

export default function ItemDetails() {
  const {itemDetails, setItemDetails} = useContext(DataContext)
  const { name, image, price } = itemDetails

  if (!name) return

  return (
    <div className='item-details'>
      <button onClick={() => setItemDetails({})}>X</button>
      <h2>Item Details</h2>
      <h3>{name}</h3>
      <img className="product-img" src={image} alt="Item's image" />
      <h4>${price}</h4>
    </div>
  )
}
