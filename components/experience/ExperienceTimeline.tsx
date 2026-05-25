const roles = [
  {
    index: "01",
    title: "Senior Project Manager",
    company: "CM Morales S.A.S",
    period: "2020 — Present",
    featured: true,
    bullets: [
      "Directing multi-disciplinary teams for high-end residential and commercial architectural developments.",
      "Overseeing project lifecycle from conceptual design through technical construction documentation and delivery.",
      "Implementing strategic resource allocation, reducing project overhead by 15% through optimized workflow management.",
    ],
  },
  {
    index: "02",
    title: "Architectural Coordinator",
    company: "Studio Alpha Designs",
    period: "2017 — 2020",
    featured: false,
    bullets: [
      "Managed technical coordination between structural engineers and design departments for urban infrastructure projects.",
      "Led the transition to BIM-centric workflows, improving design accuracy and stakeholder collaboration.",
      "Facilitated client presentations and public sector regulatory compliance approvals.",
    ],
  },
  {
    index: "03",
    title: "Junior Architect",
    company: "Urban Hive Labs",
    period: "2014 — 2017",
    featured: false,
    bullets: [
      "Assisted in 3D modeling and rendering for sustainable social housing initiatives.",
      "Drafted comprehensive architectural plans and technical specification manuals.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop mb-section-gap grid grid-cols-12 gap-gutter">
      <div className="col-span-12 md:col-span-4">
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
          A decade of leadership in architectural project management, bridging
          the gap between visionary design and structural execution.
        </p>
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
