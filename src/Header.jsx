import { NavLink } from 'react-router-dom'

export default function Header() {
  const links = [
    { title: 'home', path: '/' },
    { title: 'create item', path: '/create-item' },
  ]

  return (
    <header className="header">
      <nav>
        {links.map(link => 
          <NavLink key={link.title} to={link.path}>
            {link.title}
          </NavLink>
        )}
      </nav>
    </header>
  )
}
