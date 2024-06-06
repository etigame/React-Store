import {useContext, useState, useEffect} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import DataContext from '../context/DataContext'
import AddToCartContent from '../AddToCartContent'
import requestData from '../utils/requestFunctions.js'

export default function ItemDetails() {
  const {items} = useContext(DataContext)
  const [itemDetails, setItemDetails] = useState({})
  const { itemId } = useParams()
  const navigate = useNavigate()
  const { name, emoji, price } = itemDetails

  useEffect(() => {
    requestData(`item/${itemId}`, 'GET').then(item => setItemDetails(item))

    // fetch(`https://jbh-mockserver.onrender.com/items/${itemId}`).then(res => res.json()).then(data => setItemDetails(data))
    // setItemDetails(items.find(item => item.id === itemId))
  }, [])

  return (
    <div className='item-details'>
      <button onClick={() => navigate(-1)}>Back</button>
      <h3>{name}</h3>
      <h3>{emoji}</h3>
      {/* <img className="product-img" src={image} alt="Item's image" /> */}
      <h4>${price}</h4>
      <Link to={'edit'}>Edit</Link>
      <AddToCartContent item={itemDetails}/>
    </div>
  )
}