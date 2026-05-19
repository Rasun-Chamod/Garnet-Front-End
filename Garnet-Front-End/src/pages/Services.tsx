import PageHeader from "../components/PageHeader/PageHeader";
import ServicesSection from "../components/Services/Services";
import CTA from "../components/CTA/CTA";

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Strategic design and front-end craft."
        subtitle="We offer focused engagements for founders who want a premium digital experience without bloat."
      />
      <ServicesSection />
      <CTA />
    </>
  );
}

export default Services;
