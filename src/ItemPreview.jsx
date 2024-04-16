import AddToCartContent from './AddToCartContent'
import { useContext } from 'react'
import DataContext from './context/DataContext'
import {Link} from 'react-router-dom'


export default function ItemPreview({ item }) {
  const { name, image, price, barcode } = item
  const {setItemDetails } = useContext(DataContext)

  return (
    <div>
      <Link to={`${barcode}`} onClick={() => setItemDetails(item)}>
        <h3>{name}</h3>
        <img className="product-img" src={image} alt="Item's image" />
        <h4>${price}</h4>
      </Link>
      {/* <button onClick={() => {window.location.href = `/items/${barcode}`}}>Create Route</button> */}
      <AddToCartContent item={item} />
    </div>
  )
}
