import { Link } from 'react-router-dom'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

const socials = [
  { label: 'LinkedIn', href: '#', icon: FiLinkedin },
  { label: 'GitHub', href: '#', icon: FiGithub },
  { label: 'Instagram', href: '#', icon: FiInstagram },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e0b11] px-6 py-16 text-white md:px-12">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="font-display text-2xl tracking-[0.35em]">GARNET</p>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Premium digital experiences for modern brands building the future
              with clarity and craft.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-white hover:text-white"
                  >
                    <Icon className="text-base" />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Newsletter
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button className="rounded-full border border-white/40 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white transition hover:border-white">
                Subscribe
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.35em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 GARNET. All rights reserved.</span>
          <span>Crafted with precision.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
