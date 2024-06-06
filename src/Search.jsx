import { useContext, useState } from 'react'
import DataContext from './context/DataContext'

export default function Search() {
  const { categories, subCategories } = useContext(DataContext)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(100)

  return (
    <section className="search">
      <input type="search" placeholder="Search item" />

      <label htmlFor="categories">Category:</label>
      <select name="categories" id="categories">
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>

      <label htmlFor="subCategories">SubCategories:</label>
      <select name="subCategories" id="subCategories">
        {subCategories.map((subCategory) => (
          <option value={subCategory} key={subCategory}>
            {subCategory}
          </option>
        ))}
      </select>

      <div className="sliders-container">
        <label htmlFor="fromSlider">Price</label>
        <p id="rangeValueMin">{minPrice}</p>
        <p id="rangeValueMax">{maxPrice}</p> 
        <input id="fromSlider" type="range" value={minPrice} min="0" max="100" onInput={e => setMinPrice(e.target.value)}/>
        <input id="toSlider" type="range" value={maxPrice} min="0" max="100" onInput={e => setMaxPrice(e.target.value)}/>
      </div>

      <label htmlFor="sort">Sort:</label>
      <select name="sort" id="sort">
          <option value={'asc'}>Price: Low to High</option>
          <option value={'desc'}>Price: High to Low</option>
      </select>
    </section>
  )
}
