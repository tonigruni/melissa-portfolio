const skills = [
  { label: "Project & Site Coordination", value: "95%", width: "w-[95%]" },
  { label: "Budget & Cost Control", value: "90%", width: "w-[90%]" },
  { label: "Risk Identification & Escalation", value: "92%", width: "w-[92%]" },
];

export default function ImpactStatement() {
  return (
    <section className="mt-section-gap bg-primary py-32 overflow-hidden relative">
      {/* Background text — parallax handled by ClientEffects */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <h2 className="impact-bg-text font-display-xl text-[25vw] leading-none text-white whitespace-nowrap">
          PROJECT MANAGEMENT
        </h2>
      </div>

      <div className="px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-12 gap-gutter items-center">
        <div className="col-span-12 md:col-span-7">
          <h3 className="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg text-white uppercase mb-8">
            A project manager who speaks the language of architecture — and delivers results.
          </h3>
        </div>
        <div className="col-span-12 md:col-span-5 space-y-12">
          {skills.map((skill) => (
            <div key={skill.label}>
              <div className="flex justify-between mb-2">
                <span className="font-label-bold text-label-bold text-white uppercase">
                  {skill.label}
                </span>
                <span className="font-label-bold text-label-bold text-white">
                  {skill.value}
                </span>
              </div>
              <div className="h-[2px] w-full bg-white/20">
                <div className={`h-[4px] bg-white ${skill.width} -mt-[1px]`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
