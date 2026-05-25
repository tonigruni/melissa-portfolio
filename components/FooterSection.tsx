export default function FooterSection() {
  return (
    <section className="mt-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-highest/30 border-t-2 border-structural-line pt-24 pb-12">
      <div className="grid grid-cols-12 gap-gutter mb-24">
        <div className="col-span-12 md:col-span-6">
          <h2 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile uppercase mb-8">
            Create <br />
            Something <br />
            <span className="text-primary">Great.</span>
          </h2>
          <a
            href="mailto:melissamcanon@gmail.com"
            className="font-headline-lg text-headline-lg text-primary hover:underline transition-all"
          >
            melissamcanon@gmail.com
          </a>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end text-right">
          <p className="font-body-lg text-body-lg mb-8 max-w-sm ml-auto">
            Available for remote and on-site project management roles in
            construction and architectural development. Bilingual (EN/ES) —
            active B1/B2 U.S. visa holder.
          </p>
          <div className="flex justify-end gap-6">
            <a
              href="https://www.linkedin.com/in/melissa-morales-ca%C3%B1%C3%B3n-71b111176/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-bold text-label-bold uppercase tracking-widest hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:melissamcanon@gmail.com"
              className="font-label-bold text-label-bold uppercase tracking-widest hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      <footer className="flex flex-col md:flex-row justify-between items-end border-t border-structural-line/20 pt-12 gap-gutter">
        <div className="font-headline-lg text-headline-lg font-black text-on-surface">
          MM.
        </div>
        <div className="font-body-md text-body-md text-on-surface-variant">
          © 2025 Melissa Morales Cañón. Project Management &amp; Construction Coordination.
        </div>
        <div className="flex gap-8">
          <a
            href="#"
            className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary underline"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary underline"
          >
            Download CV
          </a>
        </div>
      </footer>
    </section>
  );
}
