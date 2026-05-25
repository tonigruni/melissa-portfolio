export default function ExperienceCTA() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none select-none">
        <span className="font-display-xl text-[300px] font-black leading-none uppercase">
          VISION
        </span>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center">
        <h2 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl uppercase mb-8">
          Ready to Build?
        </h2>
        <div className="flex flex-col md:flex-row gap-gutter mt-8">
          <button className="bg-on-surface text-surface px-12 py-6 font-label-bold text-label-bold uppercase hover:bg-primary transition-colors">
            Download Resume
          </button>
          <a
            href="mailto:melissamcanon@gmail.com"
            className="border-2 border-on-surface text-on-surface px-12 py-6 font-label-bold text-label-bold uppercase hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
