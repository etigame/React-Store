import AddToCartContent from './AddToCartContent'
import { useContext } from 'react'
import DataContext from './context/DataContext'
import {Link} from 'react-router-dom'


export default function ItemPreview({ item }) {
  const { name, image, price, id } = item
  // const {setItemDetails } = useContext(DataContext)

  return (
    <div>
      <Link to={`/item/${id}`}>
        <h3>{name}</h3>
        <img className="product-img" src={image} alt="Item's image" />
        <h4>${price}</h4>
      </Link>
      {/* <button onClick={() => {window.location.href = `/items/${id}`}}>Create Route</button> */}
      <AddToCartContent item={item} />
    </div>
  )
}
