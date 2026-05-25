const strengths = [
  {
    heading: "Problems handled before they reach you",
    body: "Rather than escalating every issue, Melissa identifies practical solutions independently — with the judgment to know when something needs leadership visibility and when it doesn't. You stay focused on what matters.",
  },
  {
    heading: "You always know where your project stands",
    body: "She transforms complex, scattered site information into clear reporting formats that give leadership instant visibility on status, priorities, and risks — without needing to chase updates.",
  },
  {
    heading: "Execution holds when the pressure peaks",
    body: "In environments where stress drives miscommunication and delays, Melissa stays calm and solution-focused. Projects keep moving even when conditions on the ground are anything but stable.",
  },
];

const attributes = [
  { label: "Technical Understanding", primary: true },
  { label: "Execution Coordination",  primary: false },
  { label: "Clear Communication",     primary: true },
  { label: "Structured Follow-Up",    primary: false },
  { label: "Composed Leadership",     primary: true },
];

export default function WhyMe() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop bg-surface-container-low py-24 max-w-[1920px] mx-auto">

      {/* Full-width structural divider */}
      <div className="structural-divider mb-12">
        <div className="section-label font-section-number text-section-number uppercase tracking-widest">
          Why Melissa
        </div>
      </div>

      {/* Two-column grid: heading+intro left, strengths right */}
      <div className="grid grid-cols-12 gap-gutter">

        {/* Left: heading + intro */}
        <div className="col-span-12 md:col-span-5">
          <h2 className="font-headline-lg text-headline-lg uppercase mb-8">
            The PM who
            <br />
            solves it
            <br />
            <span className="text-primary">before</span>
            <br />
            you ask.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Technical construction experience combined with a proactive,
            solution-oriented approach to coordination and execution — the
            combination that makes the difference between a project that finishes
            and one that finishes <em>right</em>.
          </p>
        </div>

        {/* Right: strength rows */}
        <div className="col-span-12 md:col-span-7 lg:col-span-6 lg:col-start-7 divide-y divide-structural-line/20">
          {strengths.map((s) => (
            <div key={s.heading} className="py-6 group hover:pl-3 transition-all">
              <h3 className="font-label-bold text-label-bold uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">
                {s.heading}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Attributes stats row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16">
        {attributes.map((a) => (
          <div
            key={a.label}
            className={`border-t-2 pt-6 ${a.primary ? "border-primary" : "border-on-surface"}`}
          >
            <div className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface text-[11px]">
              {a.label}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
