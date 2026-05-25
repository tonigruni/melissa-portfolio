const competencies = [
  {
    label: "Fast-Paced Project Management",
    desc: "Thriving in dynamic construction environments that demand adaptability, rapid decision-making and continuous coordination between teams.",
  },
  {
    label: "Project Issue Resolution",
    desc: "Resolving technical and operational issues during construction through practical problem-solving and cross-team coordination.",
  },
  {
    label: "Project Organisation & Follow-Up",
    desc: "Maintaining structured tracking, follow-up processes and operational visibility across multiple ongoing activities.",
  },
];

export default function ImpactStatement() {
  return (
    <section className="mt-section-gap bg-primary py-32 overflow-hidden relative">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <h2 className="impact-bg-text font-display-xl text-[25vw] leading-none text-white whitespace-nowrap">
          PROJECT MANAGEMENT
        </h2>
      </div>

      <div className="px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-12 gap-gutter items-start">
        {/* Left: headline */}
        <div className="col-span-12 md:col-span-6">
          <h3 className="font-headline-lg text-headline-lg text-white uppercase leading-tight">
            A project manager who speaks the language of architecture — and delivers results.
          </h3>
        </div>

        {/* Right: competency list */}
        <div className="col-span-12 md:col-span-5 md:col-start-8 divide-y divide-white/20">
          {competencies.map((c) => (
            <div key={c.label} className="py-5">
              <span className="font-label-bold text-label-bold text-white uppercase block mb-1">
                {c.label}
              </span>
              <span className="font-body-md text-body-md text-white/60 leading-snug">
                {c.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
