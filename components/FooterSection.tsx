export default function FooterSection() {
  return (
    <section className="mt-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-highest/30 border-t-2 border-structural-line pt-24 pb-12">
      <div className="grid grid-cols-12 gap-gutter mb-24">
        <div className="col-span-12 md:col-span-6">
          <h2 className="font-headline-lg text-headline-lg uppercase mb-8 leading-tight font-black">
            Let's Create <br />
            Something <br />
            <span className="text-primary">Great Together.</span>
          </h2>
          <a
            href="mailto:melissamcanon@gmail.com"
            className="font-body-lg text-body-lg md:font-headline-md md:text-headline-md text-primary hover:underline transition-all whitespace-nowrap"
          >
            melissamcanon@gmail.com
          </a>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end items-start md:items-end gap-8 text-left md:text-right">
          <p className="font-body-lg text-body-lg max-w-sm ml-auto">
            Available for remote Project Manager and Project Coordinator roles.
            Bilingual (EN/ES) — active B1/B2 U.S. visa holder.
          </p>
          <a
            href="/Melissa_Morales_CV.pdf"
            download
            className="inline-block bg-on-surface text-surface px-10 py-4 font-label-bold text-label-bold uppercase hover:bg-primary transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
      <footer className="flex flex-col md:flex-row justify-between items-end border-t border-structural-line/20 pt-12 gap-gutter">
        <div className="font-headline-lg text-headline-lg font-black text-on-surface">
          MM.
        </div>
        <div className="font-body-md text-body-md text-on-surface-variant">
          © 2025 Melissa Morales. Project Management &amp; Construction Coordination.
        </div>
        <div className="flex gap-8">
          <a
            href="#projects"
            className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary underline"
          >
            Portfolio
          </a>
          <a
            href="mailto:melissamcanon@gmail.com?subject=CV%20Request"
            className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary underline"
          >
            Download CV
          </a>
        </div>
      </footer>
    </section>
  );
}
