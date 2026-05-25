const skills = [
  { label: "Autodesk Revit (BIM)", value: "95%", width: "w-[95%]" },
  { label: "SketchUp / 3D Modeling", value: "90%", width: "w-[90%]" },
  { label: "AutoCAD Architecture", value: "98%", width: "w-[98%]" },
  { label: "Adobe CC (InDesign/Photoshop)", value: "85%", width: "w-[85%]" },
];

export default function TechnicalMastery() {
  return (
    <section className="bg-primary py-24 px-margin-mobile md:px-margin-desktop text-on-primary">
      <div className="grid grid-cols-12 gap-gutter items-center">
        <div className="col-span-12 md:col-span-5 mb-12 md:mb-0">
          <h2 className="font-headline-lg text-headline-lg uppercase mb-8">
            Technical
            <br />
            Mastery.
          </h2>
          <p className="font-body-lg text-body-lg opacity-90">
            Advanced proficiency in industry-standard software suites, ensuring
            precision from initial sketch to final build.
          </p>
        </div>
        <div className="col-span-12 md:col-span-7 space-y-12">
          {skills.map((skill) => (
            <div key={skill.label} className="space-y-2">
              <div className="flex justify-between font-label-bold text-label-bold uppercase">
                <span>{skill.label}</span>
                <span>{skill.value}</span>
              </div>
              <div className="h-[2px] w-full bg-white/30 relative">
                <div
                  className={`absolute top-[-1px] left-0 h-[4px] bg-white ${skill.width}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
