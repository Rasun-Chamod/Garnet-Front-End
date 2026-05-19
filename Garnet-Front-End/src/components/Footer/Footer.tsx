import { FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'

const links = [
  { label: 'Instagram', icon: FiInstagram, href: '#' },
  { label: 'LinkedIn', icon: FiLinkedin, href: '#' },
  { label: 'Email', icon: FiMail, href: 'mailto:hello@garnet.studio' },
]

function Footer() {
  return (
    <footer className="border-t border-garnet-line px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl tracking-[0.2em]">GARNET</p>
          <p className="mt-3 text-sm text-garnet-muted">
            Premium digital experiences for elevated brands.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 rounded-full border border-garnet-line px-4 py-2 text-xs uppercase tracking-[0.3em] text-garnet-muted transition hover:text-garnet-ink"
              >
                <Icon className="text-base" />
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
      {/* TODO: Replace footer links with live social profiles. */}
    </footer>
  )
}

export default Footer
