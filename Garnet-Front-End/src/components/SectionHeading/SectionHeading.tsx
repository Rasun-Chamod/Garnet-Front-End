type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-garnet-ink md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-garnet-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
