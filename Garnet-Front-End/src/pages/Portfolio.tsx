import PageHeader from '../components/PageHeader/PageHeader'
import PortfolioSection from '../components/Portfolio/Portfolio'
import CTA from '../components/CTA/CTA'

function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Curated experiences for modern luxury."
        subtitle="A collection of work that merges editorial storytelling with premium UI craft."
      />
      <PortfolioSection />
      <CTA />
    </>
  )
}

export default Portfolio
