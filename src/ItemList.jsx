import ItemPreview from './ItemPreview'

function ItemList({items, cartItems, setCartItems}) {

  return (
    <section>
      {items.map((item) => (
        <ItemPreview item={item} key={item.barcode} cartItems={cartItems} setCartItems={setCartItems}/>
      ))}
    </section>
  )
}

export default ItemList
