"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal, { type ProjectModalData } from "@/components/ProjectModal";

const pranikHero =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC607XiA7sstHylI6oAbo8_phAiQhPX1K81xnomBTN2h7c852cxPVRVldwQ9xQjQEQ8tZVca8zZaM4-oU8WM6Iu-LBV6pwU9iVz_IMBpdZ0qm_MLnIUHD26YTX4Dvvhw0aYaQIBngGB1b_9L3_1uvK3x54cjrVVm3TXZ2dz8HOkRZuktNBkvQ4kPP8PHRnYif1yLFgIfxon8sMocYbpZWFDJQXoWypKrJUhKnN67-YRq77w9zDJ1m3i_nIeGscffJ3FKAv8jduKVW5J";
const pranikBim =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCkc_fmzHc0yHoST8gI_QtZMkiBtvTPcOBlsRLOe-z68RtrfIxOqUAQoXh6mRqmDmuSS3-VqzxRVs4-R402nqRdlNTTQHJyhP6iJZMJa8_WbsVhcj-j4a79kOr3laPN55AfgECVH7t1ps9tji9vyhGhPmXhdp7jMQuOFd2i5meScP7ZiDSGBDKk-QIsSdP5UAuFEURv1__oIofe2-PNghq1AJnxsxF-D40xxC_-OzfRGFb1SYUo-LK40eP_sQAlpuS2eSeHNxE0tR4s";
const pranikOffice =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC2RVEVth0yjeX1UUsROUzcGu8qtZEFY8aAwWOSSAw6k67vEVPom2QxU7hfjR1xb1RAT9x2mZxC9MtopMVdFv04AueTbmzmv2K2AdkwGXo6AeHhYOZ5pjLxONQcOa47-8vIn4gL_8JP7mC84vSnAOmjUiccvUTuYAmsda5T_SUOVxupTfb7g-69BNX7AQLomOKIK7C4w0v62YGKQtKCLClW1KiN5KfKZQL1QtUcq3a5XMjVwEqmOyG7Rj2QulnwUOnLuPGxH009Jl1F";

const projects: Array<{
  src: string;
  alt: string;
  category: string;
  year: string;
  title: string;
  caseStudy: ProjectModalData["caseStudy"] | null;
}> = [
  {
    src: pranikHero,
    alt: "PRANIK COLIVING – 1,608 m² coliving development, Medellín",
    category: "Residential",
    year: "2024",
    title: "PRANIK COLIVING",
    caseStudy: {
      caseNumber: "Case Study 01",
      heroImage: pranikHero,
      tagline:
        "Full-cycle coordination of a 1,608 m² coliving development — from planning through handover. Scheduling, procurement, contractor oversight, and stakeholder reporting delivered on time.",
      challenge: {
        heading: "Coordinating a High-Density Coliving Build Under Tight Timelines",
        body: "The PRANIK COLIVING project required managing multiple contractor streams simultaneously across a 1,608 m² footprint while maintaining strict scheduling and budget discipline. The goal: deliver a premium coliving experience on an aggressive timeline with no margin for coordination failures.",
        warnings: [
          "Tight delivery window with simultaneous MEP, structural, and fit-out phases.",
          "Multi-vendor procurement requiring precise sequencing to avoid site blockages.",
        ],
      },
      solution: {
        mainTitle: "Integrated Coordination Methodology",
        mainBody:
          "Implemented a milestone-driven coordination framework with weekly contractor alignment meetings, real-time schedule tracking, and a procurement pipeline built around critical-path dependencies — keeping all trades moving without collision.",
        mainImage: pranikBim,
        statValue: "1,608",
        statLabel: "Square metres coordinated to handover",
        sideImage: pranikOffice,
        features: [
          {
            icon: "calendar_month",
            title: "Schedule Control",
            body: "Built a phased programme locking MEP, structural, and finish scopes into non-conflicting windows with float built around procurement lead times.",
          },
          {
            icon: "groups",
            title: "Stakeholder Reporting",
            body: "Delivered milestone reports to the client at every project phase — full transparency from groundworks through final punch list.",
          },
        ],
      },
      metrics: [
        { label: "Procurement Sequencing Accuracy", value: "98%", pct: 98 },
        { label: "Schedule Adherence", value: "95%", pct: 95 },
        { label: "Contractor Coordination Coverage", value: "100%", pct: 100 },
      ],
      quote:
        "Good coordination isn't about reacting to problems — it's about designing a process where problems don't have room to grow.",
      results: [
        {
          label: "Project Size",
          value: "1,608m²",
          desc: "Full coliving development, residential sector.",
        },
        {
          label: "Delivery",
          value: "On Time",
          desc: "Milestone-driven programme completed as planned.",
        },
        {
          label: "Contractors",
          value: "Multi",
          desc: "Simultaneous trades coordinated without conflict.",
        },
        {
          label: "Reporting",
          value: "100%",
          desc: "Full stakeholder transparency throughout the build.",
        },
      ],
      nextProject: "THE NEXUS HUB →",
    },
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "The Nexus Hub – corporate lobby interior",
    category: "Commercial",
    year: "2022",
    title: "The Nexus Hub",
    caseStudy: {
      caseNumber: "Case Study 02",
      heroImage:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      tagline:
        "Commercial fit-out coordination across a flagship corporate hub — budget control, contractor management, and B2B client reporting throughout.",
      challenge: {
        heading: "High-Spec Commercial Fit-Out With Concurrent Workstreams",
        body: "The Nexus Hub required simultaneous coordination of interior fit-out, MEP integration, and FF&E installation within a live commercial environment — all while maintaining client-facing communication with an international stakeholder group.",
        warnings: [
          "Tight budget envelope requiring proactive variance identification.",
          "International client communications requiring bilingual (EN/ES) reporting cadence.",
        ],
      },
      solution: {
        mainTitle: "Budget-First Coordination Framework",
        mainBody:
          "Managed detailed project budgets from mobilisation through practical completion, flagging variances early and implementing corrective actions before they impacted the programme.",
        mainImage:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        statValue: "6+",
        statLabel: "Concurrent projects managed simultaneously",
        sideImage:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        features: [
          {
            icon: "payments",
            title: "Budget Control",
            body: "Prepared and monitored detailed project budgets; identified and escalated cost variances before they became programme risks.",
          },
          {
            icon: "translate",
            title: "Bilingual Client Comms",
            body: "Full EN/ES reporting to international clients — keeping stakeholders aligned across language and time zone.",
          },
        ],
      },
      metrics: [
        { label: "Budget Variance Identification Rate", value: "Early", pct: 90 },
        { label: "Client Reporting Cadence", value: "Weekly", pct: 100 },
        { label: "Scope Delivery", value: "On Budget", pct: 95 },
      ],
      quote:
        "Budget control is only as good as how early you see the problem — I built the habit of looking before it's too late.",
      results: [
        {
          label: "Projects",
          value: "6+",
          desc: "Concurrent projects managed without dropping the ball.",
        },
        {
          label: "Sectors",
          value: "3+",
          desc: "Retail, hospitality, and residential delivered in parallel.",
        },
        {
          label: "Languages",
          value: "EN/ES",
          desc: "Bilingual reporting for international client accounts.",
        },
        {
          label: "Budget",
          value: "On Track",
          desc: "Proactive variance management throughout every project.",
        },
      ],
      nextProject: "MODERN ART PAVILION →",
    },
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6JdB9Pzpquf34d65aD6OLRREQAlhsdVGZyYp1USaXbMmjJodb2GaLgGf4Fmg22XXlMNUYZYOfhxsySAtHLHFQDHeQvrEgfyY3PYDM2ZeonxKJ8Ixt1vLt1GMjD1VPs8rTesIso-aVhL6O10peupcu2gD3rEgLkXvPzUQXldA5LmUJfOSM4uQe6hu2RdZ-einHs-UiKpMZrUBx-6rSDcTRRINWSpGVaXkse1ILJJRjU-SeFPtd3zcslq_DrahjLjlFxuUcgIRt53R",
    alt: "Modern Art Pavilion – cultural center at twilight",
    category: "Public",
    year: "2021",
    title: "Modern Art Pavilion",
    caseStudy: {
      caseNumber: "Case Study 03",
      heroImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6JdB9Pzpquf34d65aD6OLRREQAlhsdVGZyYp1USaXbMmjJodb2GaLgGf4Fmg22XXlMNUYZYOfhxsySAtHLHFQDHeQvrEgfyY3PYDM2ZeonxKJ8Ixt1vLt1GMjD1VPs8rTesIso-aVhL6O10peupcu2gD3rEgLkXvPzUQXldA5LmUJfOSM4uQe6hu2RdZ-einHs-UiKpMZrUBx-6rSDcTRRINWSpGVaXkse1ILJJRjU-SeFPtd3zcslq_DrahjLjlFxuUcgIRt53R",
      tagline:
        "Multi-sector construction coordination across healthcare, corporate, commercial, and residential builds — subcontractor management, milestone tracking, and risk escalation.",
      challenge: {
        heading: "Multi-Sector Coordination Across Simultaneous Active Builds",
        body: "Coordinating across healthcare, corporate, commercial, and residential sectors simultaneously demanded strict documentation discipline, proactive subcontractor management, and a consistent risk escalation process that kept senior PMs informed without creating noise.",
        warnings: [
          "Healthcare sector requirements adding compliance documentation overhead.",
          "Multiple simultaneous builds requiring daily prioritisation across competing deadlines.",
        ],
      },
      solution: {
        mainTitle: "Documentation-Driven Risk Management",
        mainBody:
          "Built a systematic documentation and risk log practice — tracking open items, escalating to senior PMs proactively, and ensuring no milestone slipped through the cracks across any active build.",
        mainImage:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6JdB9Pzpquf34d65aD6OLRREQAlhsdVGZyYp1USaXbMmjJodb2GaLgGf4Fmg22XXlMNUYZYOfhxsySAtHLHFQDHeQvrEgfyY3PYDM2ZeonxKJ8Ixt1vLt1GMjD1VPs8rTesIso-aVhL6O10peupcu2gD3rEgLkXvPzUQXldA5LmUJfOSM4uQe6hu2RdZ-einHs-UiKpMZrUBx-6rSDcTRRINWSpGVaXkse1ILJJRjU-SeFPtd3zcslq_DrahjLjlFxuUcgIRt53R",
        statValue: "4",
        statLabel: "Sectors coordinated simultaneously",
        sideImage:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6JdB9Pzpquf34d65aD6OLRREQAlhsdVGZyYp1USaXbMmjJodb2GaLgGf4Fmg22XXlMNUYZYOfhxsySAtHLHFQDHeQvrEgfyY3PYDM2ZeonxKJ8Ixt1vLt1GMjD1VPs8rTesIso-aVhL6O10peupcu2gD3rEgLkXvPzUQXldA5LmUJfOSM4uQe6hu2RdZ-einHs-UiKpMZrUBx-6rSDcTRRINWSpGVaXkse1ILJJRjU-SeFPtd3zcslq_DrahjLjlFxuUcgIRt53R",
        features: [
          {
            icon: "assignment",
            title: "Risk Escalation",
            body: "Maintained a live risk log and escalated proactively — senior PMs were never surprised by issues that had been visible earlier.",
          },
          {
            icon: "domain",
            title: "Multi-Sector Delivery",
            body: "Managed healthcare, corporate, commercial, and residential builds in parallel — each with its own compliance requirements and stakeholder expectations.",
          },
        ],
      },
      metrics: [
        { label: "Milestone Tracking Accuracy", value: "High", pct: 92 },
        { label: "Risk Escalation Speed", value: "Proactive", pct: 95 },
        { label: "Documentation Compliance", value: "Full", pct: 100 },
      ],
      quote:
        "In construction, the documentation is the memory of the project. I treat it like the build itself depends on it — because it does.",
      results: [
        {
          label: "Sectors",
          value: "4",
          desc: "Healthcare, corporate, commercial & residential.",
        },
        {
          label: "Role",
          value: "Coordinator",
          desc: "Supporting senior PMs across all active builds.",
        },
        {
          label: "Risk Mgmt",
          value: "Proactive",
          desc: "Issues escalated before they became programme problems.",
        },
        {
          label: "Period",
          value: "2.5 Yrs",
          desc: "Apr 2019 – Dec 2021 at Contacto Arquitectura.",
        },
      ],
      nextProject: "PRANIK COLIVING →",
    },
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState<(typeof projects)[0] | null>(
    null
  );

  return (
    <>
      <section id="projects" className="mt-section-gap md:mt-[160px] px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
        <div className="structural-divider">
          <div className="section-label font-section-number text-section-number uppercase tracking-widest">
            03 Projects Managed & Built
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-12 mb-8">
          <h2 className="font-headline-lg text-headline-lg uppercase">
            Selected Builds.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Construction projects personally coordinated from kickoff to handover — scheduling, procurement, contractor oversight, and delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-0 bg-structural-line border border-structural-line">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => project.caseStudy && setOpenProject(project)}
              className="relative aspect-[3/4] group overflow-hidden bg-white cursor-pointer text-left"
              aria-label={`View case study: ${project.title}`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Default label — always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                <span className="font-label-bold text-label-bold uppercase text-white/80 mb-2 block">
                  {project.category} • {project.year}
                </span>
                <h3 className="font-headline-md text-headline-md text-white">
                  {project.title}
                </h3>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="font-label-bold text-label-bold uppercase tracking-widest text-white border border-white px-6 py-3">
                  View Case Study
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {openProject && openProject.caseStudy && (
        <ProjectModal
          project={{ title: openProject.title, caseStudy: openProject.caseStudy }}
          onClose={() => setOpenProject(null)}
        />
      )}
    </>
  );
}
