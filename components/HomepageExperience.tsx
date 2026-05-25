const experiences = [
  {
    number: "01",
    company: "CM Morales",
    period: "Jan 2024 – Present",
    title: "Construction Project Coordinator",
    highlights: [
      "Led full coordination of PRANIK COLIVING (1,608 m²) from planning through handover",
      "Managed schedules, contractor relationships, procurement, and on-site oversight",
      "Delivered milestone reporting and stakeholder updates throughout the build cycle",
    ],
  },
  {
    number: "02",
    company: "Espiral Studio",
    period: "Dec 2021 – Dec 2023",
    title: "Project Manager",
    highlights: [
      "Managed 6+ concurrent projects across retail, hospitality, and residential sectors",
      "Prepared and monitored detailed project budgets; identified and escalated cost variances",
      "Handled B2B client communications in English and Spanish with international accounts",
    ],
  },
  {
    number: "03",
    company: "Contacto Arquitectura",
    period: "Apr 2019 – Dec 2021",
    title: "Project Coordinator",
    highlights: [
      "Coordinated construction projects across healthcare, corporate, commercial, and residential sectors",
      "Tracked milestones, managed subcontractors, and maintained documentation across active builds",
      "Supported senior PMs on risk identification and corrective action planning",
    ],
  },
];

export default function HomepageExperience() {
  return (
    <section className="mt-section-gap px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
      <div className="structural-divider">
        <div className="section-label font-section-number text-section-number uppercase tracking-widest">
          03 Experience
        </div>
      </div>

      <div className="mt-12 divide-y divide-structural-line">
        {experiences.map((exp) => (
          <div
            key={exp.number}
            className="group relative grid grid-cols-12 gap-gutter py-10 md:py-16 transition-all md:hover:pl-4"
          >
            {/* Large background number */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 font-display-xl text-[10rem] leading-none text-on-surface opacity-5 group-hover:text-primary group-hover:opacity-10 transition-all select-none pointer-events-none">
              {exp.number}
            </div>

            {/* Left: meta */}
            <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
              <span className="font-section-number text-section-number uppercase tracking-widest text-on-surface-variant">
                {exp.number}
              </span>
              <span className="font-label-bold text-label-bold uppercase text-primary">
                {exp.company}
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                {exp.period}
              </span>
            </div>

            {/* Right: content */}
            <div className="col-span-12 md:col-span-8 md:col-start-5 relative z-10">
              <h3 className="font-headline-md text-headline-md mb-6">{exp.title}</h3>
              <ul className="space-y-3">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex gap-4 font-body-md text-body-md text-on-surface-variant">
                    <span className="text-primary mt-1 shrink-0">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
