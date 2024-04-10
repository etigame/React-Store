import AddToCartContent from './AddToCartContent'
import { useContext } from 'react'
import DataContext from './context/DataContext'

function ItemPreview({ item }) {
  const { name, image, price, barcode } = item
  const {setItemDetails } = useContext(DataContext)

  return (
    <div>
      <div onClick={() => setItemDetails(item)}>
        <h3>{name}</h3>
        <img className="product-img" src={image} alt="Item's image" />
        <h4>${price}</h4>
      </div>
      <AddToCartContent item={item} />
    </div>
  )
}

export default ItemPreview
