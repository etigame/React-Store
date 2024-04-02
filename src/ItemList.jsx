import ItemPreview from './ItemPreview'

function ItemList({items, cartItems, setCartItems, setItemDetails}) {

  return (
    <section>
      {items.map((item) => (
        <ItemPreview item={item} key={item.barcode} cartItems={cartItems} setCartItems={setCartItems} setItemDetails={setItemDetails}/>
      ))}
    </section>
  )
}

export default ItemList
