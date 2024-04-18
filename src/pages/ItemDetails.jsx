import {useContext, useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import DataContext from '../context/DataContext'
import AddToCartContent from '../AddToCartContent'

export default function ItemDetails() {
  const {items} = useContext(DataContext)
  const [itemDetails, setItemDetails] = useState({})
  const { itemId } = useParams()
  const { name, image, price } = itemDetails

  useEffect(() => {
    setItemDetails(items.find(item => item.barcode === itemId))
  }, [])


  return (
    <div className='item-details'>
      <button onClick={() => setItemDetails({})}>X</button>
      <h2>Item Details</h2>
      <h3>{name}</h3>
      <img className="product-img" src={image} alt="Item's image" />
      <h4>${price}</h4>
      <Link to={'edit'}>Edit</Link>
      <AddToCartContent item={itemDetails}/>
    </div>
  )
}
