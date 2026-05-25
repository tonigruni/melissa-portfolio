const roles = [
  {
    index: "01",
    title: "Administrative Site Resident (Project Coordinator)",
    company: "CM Morales S.A.S",
    period: "Jan 2024 — Present",
    featured: true,
    bullets: [
      "Lead end-to-end coordination of the PRANIK COLIVING project (1,608 m²): scheduling, procurement, team oversight, and regulatory compliance for a 36-room hospitality renovation in Laureles, Medellín.",
      "Track project milestones, deliverables, and deadlines across subcontractors and suppliers; escalate risks proactively to project leadership.",
      "Manage administrative documentation: budgets, purchase orders, progress reports, and weekly status updates for stakeholders.",
      "Coordinate structural reinforcements, facade overhaul, elevator installation, and emergency stairway execution within scope and budget.",
    ],
  },
  {
    index: "02",
    title: "Site Resident & Project Coordinator",
    company: "Espiral Studio",
    period: "Dec 2021 — Dec 2023",
    featured: false,
    bullets: [
      "Managed 6+ concurrent commercial construction projects across the retail and food service sectors, coordinating budgets, personnel, and materials from kickoff to handover.",
      "Prepared and monitored detailed project budgets; identified cost variances and implemented corrective actions.",
      "Coordinated B2B communications with clients, contractors, and suppliers on behalf of the lead architect/PM.",
      "Notable projects: IKEA Viva Envigado (retail), Bodytech Éxito Robledo (commercial), Dollarcity Éxito Itagüí (retail), Bimbo Itagüí plant (industrial substructure).",
    ],
  },
  {
    index: "03",
    title: "Site Resident & Space Personalization",
    company: "Contacto Arquitectura",
    period: "Apr 2019 — Dec 2021",
    featured: false,
    bullets: [
      "Coordinated construction execution across healthcare, corporate, commercial, and residential sectors; managed schedules, budgets, procurement, and team assignments.",
      "Prepared cost estimates for residential and commercial remodeling projects.",
      "Tracked deliverables and dependencies across multi-disciplinary project teams (structural, MEP, finishes).",
      "Key projects: Cedimed health centers, Arus cooperative HQ, Restaurante Akashi, Restaurante Ganso y Castor, residential model units.",
    ],
  },
  {
    index: "04",
    title: "Design & Facilities Management Intern",
    company: "Tigo Une",
    period: "Jan 2018 — Jun 2018",
    featured: false,
    bullets: [
      "Designed interior workspace layouts compliant with occupational and safety standards.",
      "Managed planimetry updates and space adaptation projects across multiple corporate locations.",
      "Coordinated logistics for office relocations and facility improvements.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop mb-section-gap grid grid-cols-12 gap-gutter">
      <div className="col-span-12 md:col-span-4 flex flex-col gap-12">
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
          A decade of leadership in architectural project management, bridging
          the gap between visionary design and structural execution.
        </p>
        <div className="flex flex-col gap-8">
          <div className="border-t-2 border-primary pt-4">
            <div className="font-display-xl text-headline-lg text-primary">7+</div>
            <div className="font-label-bold text-label-bold uppercase tracking-widest mt-1">Years of Experience</div>
          </div>
          <div className="border-t-2 border-on-surface pt-4">
            <div className="font-display-xl text-headline-lg">B1/B2</div>
            <div className="font-label-bold text-label-bold uppercase tracking-widest mt-1">U.S. Visa Holder</div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-8 space-y-24 border-l border-structural-line pl-8 md:pl-16 relative">
        {roles.map((role) => (
          <div key={role.index} className="relative">
            <div
              className={`absolute -left-[41px] md:-left-[73px] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold font-label-bold text-label-bold ${
                role.featured
                  ? "bg-primary text-white"
                  : "bg-on-surface text-surface"
              }`}
            >
              {role.index}
            </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <h3 className="font-headline-md text-headline-md uppercase">
                  {role.title}
                </h3>
                <span className="font-label-bold text-label-bold text-primary whitespace-nowrap">
                  {role.company} | {role.period}
                </span>
              </div>
              <ul className="font-body-md text-body-md text-on-surface-variant space-y-4 max-w-2xl">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-primary font-bold shrink-0">/</span>
                    {bullet}
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
