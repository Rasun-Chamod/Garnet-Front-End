import PageHeader from '../components/PageHeader/PageHeader'
import AboutSection from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A studio built on restraint, clarity, and bold storytelling."
        subtitle="GARNET partners with founders who want their digital presence to feel as refined as their product."
      />
      <AboutSection />
      <Testimonials />
    </>
  )
}

export default About
