import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../../animations/variants'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  return (
    <motion.header
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="relative z-20"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-12">
        <Link
          to="/"
          className="font-display text-2xl font-semibold tracking-[0.2em]"
        >
          GARNET
        </Link>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.3em] text-garnet-muted md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? 'text-garnet-ink' : 'hover:text-garnet-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden rounded-full border border-garnet-line px-5 py-2 text-xs uppercase tracking-[0.3em] transition hover:border-garnet-ink md:inline-flex"
        >
          Start a project
        </Link>
      </div>
    </motion.header>
  )
}

export default Navbar
