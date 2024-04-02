export default function ItemDetails({ item }) {
  const { name, image, price } = item

  if (!item.name) return
  
  return (
    <div>
      <h2>Item Details</h2>
      <h3>{name}</h3>
      <img className="product-img" src={image} alt="Item's image" />
      <h4>${price}</h4>
    </div>
  )
}
