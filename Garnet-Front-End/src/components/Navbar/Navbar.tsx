import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'border-b border-garnet-line bg-white/70 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 md:py-5">
          <Link
            to="/"
            className="font-display text-xl font-semibold tracking-[0.35em]"
          >
            GARNET
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 text-xs uppercase tracking-[0.35em] text-garnet-muted md:flex"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `group relative py-2 transition-colors ${
                    isActive ? 'text-garnet-ink' : 'hover:text-garnet-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-garnet-accent transition-transform duration-300 ${
                        isActive
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-garnet-line text-garnet-ink transition hover:border-garnet-ink md:hidden"
          >
            <span className="flex h-4 w-4 flex-col justify-between">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-garnet-ink/80 backdrop-blur"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-full bg-garnet-cream px-8 py-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg tracking-[0.35em]">
                  GARNET
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-garnet-line text-garnet-ink"
                >
                  <span className="text-xl">✕</span>
                </button>
              </div>

              <nav
                aria-label="Mobile"
                className="mt-16 flex flex-col gap-8 text-sm uppercase tracking-[0.35em] text-garnet-muted"
              >
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-display text-garnet-ink transition-colors ${
                        isActive ? 'text-garnet-accent' : 'hover:text-garnet-accent'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default Navbar
