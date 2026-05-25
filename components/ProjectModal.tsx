"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export interface CaseStudyMetric {
  label: string;
  value: string;
  pct: number;
  dark?: boolean;
}

export interface CaseStudyResult {
  label: string;
  value: string;
  desc: string;
}

export interface CaseStudyFeature {
  icon: string;
  title: string;
  body: string;
}

export interface CaseStudy {
  caseNumber: string;
  heroImage: string;
  tagline: string;
  challenge: {
    heading: string;
    body: string;
    warnings: string[];
  };
  solution: {
    mainTitle: string;
    mainBody: string;
    mainImage: string;
    statValue: string;
    statLabel: string;
    sideImage: string;
    features: CaseStudyFeature[];
  };
  metrics: CaseStudyMetric[];
  quote: string;
  results: CaseStudyResult[];
  nextProject: string;
}

export interface ProjectModalData {
  title: string;
  caseStudy: CaseStudy;
}

interface Props {
  project: ProjectModalData;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [visible, setVisible] = useState(false);
  const cs = project.caseStudy;

  // Animate in
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 350);
  }

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-350 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        className={`absolute inset-x-0 bottom-0 top-0 md:top-4 md:left-4 md:right-4 md:bottom-4 bg-surface overflow-y-auto modal-scrollbar transition-transform duration-350 ${
          visible ? "translate-y-0" : "translate-y-8"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="fixed top-6 right-6 md:top-10 md:right-10 z-50 w-10 h-10 flex items-center justify-center bg-surface border border-structural-line hover:bg-primary hover:text-white hover:border-primary transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Hero */}
        <header className="px-margin-mobile md:px-margin-desktop pt-24 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8">
              <p className="font-label-bold text-label-bold uppercase text-primary mb-4 tracking-widest">
                {cs.caseNumber}
              </p>
              <h1 className="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg text-on-surface">
                {project.title}
              </h1>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {cs.tagline}
              </p>
            </div>
          </div>
          <div className="mt-12 h-[320px] md:h-[500px] overflow-hidden border border-structural-line relative">
            <Image
              src={cs.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </header>

        {/* Section 01: Challenge */}
        <section className="px-margin-mobile md:px-margin-desktop mb-24">
          <div className="structural-divider relative mb-12">
            <span className="font-label-bold text-label-bold absolute left-0 -top-6 uppercase tracking-widest">
              The Challenge
            </span>
            <span className="font-section-number text-section-number absolute right-0 -top-5 text-on-surface-variant">
              01
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-5">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                {cs.challenge.heading}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                {cs.challenge.body}
              </p>
              <ul className="space-y-4">
                {cs.challenge.warnings.map((w, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1 shrink-0">
                      warning
                    </span>
                    <span className="font-label-bold text-label-bold">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 02: Strategic Solution (Bento) */}
        <section className="px-margin-mobile md:px-margin-desktop mb-24">
          <div className="structural-divider relative mb-12">
            <span className="font-label-bold text-label-bold absolute left-0 -top-6 uppercase tracking-widest">
              Strategic Solution
            </span>
            <span className="font-section-number text-section-number absolute right-0 -top-5 text-on-surface-variant">
              02
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main card */}
            <div className="md:col-span-2 border border-structural-line p-8 flex flex-col justify-between bg-surface-container-lowest">
              <div>
                <h3 className="font-headline-md text-headline-md mb-4">
                  {cs.solution.mainTitle}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {cs.solution.mainBody}
                </p>
              </div>
              <div className="mt-10 h-56 border border-structural-line overflow-hidden relative">
                <Image
                  src={cs.solution.mainImage}
                  alt={cs.solution.mainTitle}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            </div>
            {/* Stat card */}
            <div className="bg-primary p-8 flex flex-col justify-between">
              <h3 className="font-headline-md text-headline-md text-white">
                Execution Velocity
              </h3>
              <div className="text-white">
                <p className="font-display-xl-mobile text-display-xl-mobile font-black mb-0">
                  {cs.solution.statValue}
                </p>
                <p className="font-label-bold text-label-bold uppercase">
                  {cs.solution.statLabel}
                </p>
              </div>
            </div>
            {/* Side image card */}
            <div className="border border-structural-line overflow-hidden relative group h-64 md:h-auto">
              <Image
                src={cs.solution.sideImage}
                alt="Project execution"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Features card */}
            <div className="md:col-span-2 border border-structural-line p-8 bg-surface-container-low">
              <div className="flex flex-col md:flex-row gap-8">
                {cs.solution.features.map((f) => (
                  <div key={f.title} className="flex-1">
                    <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                      {f.icon}
                    </span>
                    <h4 className="font-label-bold text-label-bold mb-2 uppercase">
                      {f.title}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Technical Execution */}
        <section className="px-margin-mobile md:px-margin-desktop mb-24">
          <div className="structural-divider relative mb-12">
            <span className="font-label-bold text-label-bold absolute left-0 -top-6 uppercase tracking-widest">
              Technical Execution
            </span>
            <span className="font-section-number text-section-number absolute right-0 -top-5 text-on-surface-variant">
              03
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 space-y-10">
              {cs.metrics.map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-label-bold text-label-bold uppercase">
                      {m.label}
                    </span>
                    <span className="font-label-bold text-label-bold text-primary">
                      {m.value}
                    </span>
                  </div>
                  <div className="h-[2px] w-full bg-black/10 relative">
                    <div
                      className={`absolute top-0 left-0 h-[4px] -mt-[1px] ${
                        m.dark ? "bg-on-surface" : "bg-primary"
                      }`}
                      style={{ width: `${m.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <div className="border-l-4 border-primary pl-8 py-4">
                <p className="font-headline-md text-headline-md italic mb-6 text-on-surface">
                  &ldquo;{cs.quote}&rdquo;
                </p>
                <p className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface-variant">
                  Melissa Morales Cañón — Project Manager
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Results */}
        <section className="bg-on-surface text-surface py-24 px-margin-mobile md:px-margin-desktop">
          <div className="structural-divider mb-12 border-surface/30 relative">
            <span className="font-label-bold text-label-bold absolute left-0 -top-6 text-surface uppercase tracking-widest">
              Project Results
            </span>
            <span className="font-section-number text-section-number absolute right-0 -top-5 text-surface/40">
              04
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center md:text-left">
            {cs.results.map((r, i) => (
              <div
                key={r.label}
                className={i > 0 ? "md:border-l border-surface/20 md:pl-8" : ""}
              >
                <h5 className="font-label-bold text-label-bold text-primary-fixed-dim mb-2 uppercase">
                  {r.label}
                </h5>
                <p className="font-display-xl-mobile text-display-xl-mobile md:text-headline-lg font-black mb-4">
                  {r.value}
                </p>
                <p className="font-body-md text-body-md text-surface/70">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next project CTA */}
        <section className="px-margin-mobile md:px-margin-desktop py-24 flex flex-col items-center justify-center text-center">
          <p className="font-label-bold text-label-bold text-primary mb-6 uppercase tracking-widest">
            Next Case Study
          </p>
          <button
            onClick={handleClose}
            className="group"
          >
            <h2 className="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg text-on-surface hover:text-primary transition-colors duration-500">
              {cs.nextProject}
            </h2>
            <div className="w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-4" />
          </button>
        </section>
      </div>
    </div>
  );
}
