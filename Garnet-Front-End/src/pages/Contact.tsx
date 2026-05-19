import PageHeader from "../components/PageHeader/PageHeader";
import CTA from "../components/CTA/CTA";

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let us build the next chapter of your brand."
        subtitle="Share a few details and we will respond within two business days."
      />
      <section className="border-t border-garnet-line px-6 pb-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-garnet-line bg-white/70 p-8 shadow-garnet">
            <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
              Studio inquiries
            </p>
            <h3 className="mt-4 font-display text-2xl text-garnet-ink">
              hello@garnet.studio
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-garnet-muted">
              We collaborate with founders globally. Share your project scope,
              timeline, and goals, and our team will follow up.
            </p>
            {/* TODO: Replace contact details with CRM-driven data. */}
          </div>
          <div className="rounded-[24px] border border-garnet-line bg-garnet-warm/70 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
              Availability
            </p>
            <h3 className="mt-4 font-display text-2xl text-garnet-ink">
              Booking Q3 2026
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-garnet-muted">
              We take on a limited number of launches each quarter to ensure
              white-glove focus.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export default Contact;
