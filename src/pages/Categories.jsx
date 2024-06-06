import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../context/DataContext'

export default function Categories() {
  const {categories} = useContext(DataContext)


  return (
    <section className="categories">
      {categories.map((c) => (
        <Link key={c} to={`/category/${c}/?page=1`}>
          {c}
        </Link>
      ))}
    </section>
  )
}
