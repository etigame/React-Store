import ItemPreview from './ItemPreview'

function ItemList({items}) {

  return (
    <section>
      {items.map((item) => (
        <ItemPreview item={item} key={item.barcode} />
      ))}
    </section>
  )
}

export default ItemList
