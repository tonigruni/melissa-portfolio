const tags = [
  "Project Leadership",
  "Urban Planning",
  "BIM Implementation",
  "Budget Management",
  "Stakeholder Relations",
  "Regulatory Compliance",
  "Sustainable Design",
  "Site Supervision",
];

export default function Competencies() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="flex justify-between items-end mb-4">
        <span className="font-label-bold text-label-bold uppercase tracking-widest text-primary">
          Strategic Skills
        </span>
        <span className="font-section-number text-section-number text-on-surface">
          02
        </span>
      </div>
      <div className="structural-divider" />
      <div className="grid grid-cols-12 gap-gutter mt-16">
        <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
          <h2 className="font-headline-md text-headline-md uppercase">
            Core
            <br />
            Competencies.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-wrap gap-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-8 py-4 border-2 border-on-surface font-label-bold text-label-bold uppercase hover:bg-primary hover:text-on-primary hover:border-primary transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
