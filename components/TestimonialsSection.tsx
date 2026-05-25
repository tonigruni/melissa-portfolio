import { TestimonialsMinimal } from "@/components/ui/minimal-testimonial";
import DotPattern from "@/components/ui/dot-pattern-1";

export default function TestimonialsSection() {
  return (
    <section className="mt-[40px] md:mt-[80px] px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
      <div className="relative flex flex-col items-center border border-primary">
        <DotPattern width={5} height={5} className="fill-primary/10" />

        {/* Corner squares */}
        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-primary" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-primary" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-primary" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-primary" />

        <div className="relative z-10 w-full flex justify-center">
          <TestimonialsMinimal />
        </div>
      </div>
    </section>
  );
}
