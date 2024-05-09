import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
// import {categories} from '../itemsDB'


export default function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://jbh-mockserver.onrender.com/categories').then(res => res.json()).then(data => setCategories(Object.keys(data)))
  }, [])

  return (
    <section className="categories">
        {categories.map(c => <Link key={c} to={`/category/${c}`}>{c}</Link>)}
    </section>
  )
}
