export default function ProfessionalSummary() {
  return (
    <section className="mt-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low py-24 max-w-[1920px] mx-auto">
      <div className="structural-divider">
        <div className="section-label font-section-number text-section-number uppercase tracking-widest">
          02 Professional Summary
        </div>
      </div>
      <div className="grid grid-cols-12 gap-gutter mt-12">
        {/* Left column */}
        <div className="col-span-12 md:col-span-5">
          <h2 className="font-headline-lg text-headline-lg uppercase">
            Professional <br />
            Summary.
          </h2>
        </div>

        {/* Right column */}
        <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-between gap-12">
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Construction Project Coordinator and Project Manager with 7+ years leading
            cross-functional teams across retail, hospitality, healthcare, and residential
            sectors. Architectural background gives a technical edge in reading drawings,
            communicating with design teams, and anticipating build-phase challenges before
            they escalate. Full professional bilingual proficiency (EN/ES), B1/B2 U.S. visa
            holder, and experienced working with international clients and remote teams.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="border-t-2 border-primary pt-6">
              <div className="font-display-xl text-headline-lg text-primary mb-2">7+</div>
              <div className="font-label-bold text-label-bold uppercase text-on-surface">
                Years of Experience
              </div>
            </div>
            <div className="border-t-2 border-on-surface pt-6">
              <div className="font-display-xl text-headline-lg text-on-surface mb-2">B1/B2</div>
              <div className="font-label-bold text-label-bold uppercase text-on-surface">
                U.S. Visa Holder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
