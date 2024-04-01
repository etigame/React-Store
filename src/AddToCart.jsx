export default function AddToCart({amount, barcode, cartItems, setCartItems}) {
  let cloneCart = { ...cartItems }

  let handlePlus = () => {
    cloneCart[barcode].amount += 1
    setCartItems(cloneCart)
  }

  let handleMinus = () => {
    if (amount === 1) handleDeleteItem()
    else {
      cloneCart[barcode].amount -= 1
      setCartItems(cloneCart)
    }
  }

  const handleDeleteItem = () => {
    let cloneCart = { ...cartItems }
    delete cloneCart[barcode]
    setCartItems(cloneCart)
  }

  return (
    <section>
      <div>
        <button onClick={handlePlus}>+</button>
        <span>{amount}</span>
        <button onClick={handleMinus}>-</button>
      </div>
    </section>
  )
}
