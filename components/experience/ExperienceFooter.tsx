export default function ExperienceFooter() {
  return (
    <footer className="w-full mt-section-gap border-t-2 border-structural-line bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-end px-margin-mobile md:px-margin-desktop py-12 gap-gutter">
        <div className="flex flex-col gap-4">
          <div className="font-headline-lg text-headline-lg font-black text-on-surface uppercase">
            Melissa M.C.
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
            Architectural Precision &amp; Leadership. Delivering structural
            excellence across continents.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-6 mb-4">
            <a
              href="#"
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline"
            >
              Behance
            </a>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            © 2024 Melissa Morales Cañón. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
