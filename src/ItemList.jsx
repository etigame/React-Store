import ItemPreview from './ItemPreview'

function ItemList({items, setTotal}) {

  return (
    <section>
      {items.map((item) => (
        <ItemPreview item={item} key={item.barcode} setTotal={setTotal}/>
      ))}
    </section>
  )
}

export default ItemList
