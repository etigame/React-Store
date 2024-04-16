import {Link} from 'react-router-dom'
import {categories} from '../itemsDB'


export default function Categories() {
  return (
    <section className="categories">
        {categories.map(c => <Link key={c} to={`/category/${c}`}>{c}</Link>)}
    </section>
  )
}
