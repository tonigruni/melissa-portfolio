export default function About() {
  return (
    <section className="mt-section-gap px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
      <div className="structural-divider">
        <div className="section-label font-section-number text-section-number uppercase tracking-widest">
          01 About Melissa Morales
        </div>
      </div>
      <div className="grid grid-cols-12 gap-gutter mt-12">
        {/* Left column */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <h2 className="font-headline-lg text-headline-lg uppercase mb-8">
            Project <br />
            Manager &amp; <br />
            Coordinator.
          </h2>
          <p className="font-body-lg text-body-lg mb-12 text-on-surface-variant">
            With 7+ years coordinating construction projects across retail,
            hospitality, healthcare, and residential sectors, project management
            has always been at the core of what I do. My architectural training
            gives me an edge — I understand the technical, the structural, and
            the human side of every build.
          </p>
          <div className="grid grid-cols-2 gap-12 border-t border-structural-line pt-12">
            <div>
              <div className="font-display-xl text-headline-lg text-primary mb-2">
                07+
              </div>
              <div className="font-label-bold text-label-bold uppercase">
                Years Experience
              </div>
            </div>
            <div>
              <div className="font-display-xl text-headline-lg text-primary mb-2">
                6+
              </div>
              <div className="font-label-bold text-label-bold uppercase">
                Concurrent Projects Managed
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-12 md:col-span-6 lg:col-start-7 lg:col-span-6 flex flex-col justify-between">
          <div className="space-y-12">
            <div className="group border-b border-structural-line pb-8 transition-all hover:pl-4">
              <h4 className="font-headline-md text-headline-md mb-2">
                Project Coordination
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                End-to-end coordination of construction projects — scheduling,
                procurement, team oversight, milestone tracking, and stakeholder
                reporting across multi-sector builds.
              </p>
            </div>
            <div className="group border-b border-structural-line pb-8 transition-all hover:pl-4">
              <h4 className="font-headline-md text-headline-md mb-2">
                Budget & Risk Control
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Preparing and monitoring detailed project budgets, identifying
                cost variances, escalating risks proactively, and implementing
                corrective actions to keep projects on track.
              </p>
            </div>
            <div className="group border-b border-structural-line pb-8 transition-all hover:pl-4">
              <h4 className="font-headline-md text-headline-md mb-2">
                Cross-functional Communication
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Bilingual stakeholder communication (EN/ES) across clients,
                contractors, suppliers, and leadership — with full professional
                proficiency in English.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
