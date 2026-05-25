"use client";

const base = "https://cdn.jsdelivr.net/npm/simple-icons/icons";

const tools = [
  { name: "Microsoft Office", slug: "microsoftoffice" },
  { name: "Google Workspace", slug: "googledrive" },
  { name: "Notion",           slug: "notion" },
  { name: "Trello",           slug: "trello" },
  { name: "ClickUp",          slug: "clickup" },
  { name: "Asana",            slug: "asana" },
  { name: "AutoCAD",          slug: "autocad" },
  { name: "SketchUp",         slug: "sketchup" },
  { name: "Revit",            slug: "autodesk" },
  { name: "Illustrator",      slug: "adobeillustrator" },
  { name: "Photoshop",        slug: "adobephotoshop" },
  { name: "InDesign",         slug: "adobeindesign" },
];

const items = [...tools, ...tools];

export default function ToolsMarquee() {
  return (
    <section className="py-12 bg-surface overflow-hidden">
      <style>{`
        @keyframes scroll-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scroll-marquee 70s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <p className="font-section-number text-section-number uppercase tracking-widest text-on-surface-variant text-center mb-10">
        My Work Stack
      </p>

      <div className="overflow-hidden">
        <div className="flex w-max marquee-track">
          {items.map((tool, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 px-10 shrink-0 group cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${base}/${tool.slug}.svg`}
                alt={tool.name}
                width={28}
                height={28}
                className="w-7 h-7 transition-opacity duration-300 opacity-35 group-hover:opacity-90"
                style={{ filter: "grayscale(1) brightness(0)" }}
                loading="lazy"
              />
              <span className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface/35 group-hover:text-on-surface/70 transition-colors whitespace-nowrap text-[10px]">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
