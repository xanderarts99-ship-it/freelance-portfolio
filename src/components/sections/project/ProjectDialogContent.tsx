"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Globe,
  MessageSquareText,
  Quote,
  X,
} from "lucide-react";
import type { Project } from "@/data/projectData";
import { cn } from "@/lib/utils";

interface ProjectDialogContentProps {
  project: Project;
  onClose: () => void;
}

type TabId = "overview" | "deliverables" | "process" | "results";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "deliverables", label: "Deliverables" },
  { id: "process", label: "Process" },
  { id: "results", label: "Results" },
];

const TYPE_LABEL: Record<Project["type"], string> = {
  web: "Web",
  ml: "ML",
  fullstack: "Full stack",
  ai: "AI product",
};

const TESTIMONIAL_LABEL: Record<
  NonNullable<Project["testimonial"]>["status"],
  string
> = {
  approved: "Client testimonial",
  placeholder: "Draft testimonial placeholder",
  pending: "Testimonial pending",
};

export function ProjectDialogContent({
  project,
  onClose,
}: ProjectDialogContentProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const deliverables = project.deliverables ?? project.features;
  const processNotes =
    project.processNotes ??
    project.solutions ??
    project.features.slice(0, 4);
  const galleryImages = Array.from(
    new Set([project.thumbnailUrl, ...project.images])
  ).slice(0, 8);
  const [selectedImage, setSelectedImage] = useState(project.thumbnailUrl);
  const selectedImageIndex = Math.max(galleryImages.indexOf(selectedImage), 0);
  const proofNotes = [
    getPermissionNote(project),
    project.testimonialStatus
      ? `Testimonial: ${project.testimonialStatus}`
      : undefined,
    project.screenshotStatus ? `Screenshots: ${project.screenshotStatus}` : undefined,
  ].filter(Boolean) as string[];

  useEffect(() => {
    setSelectedImage(project.thumbnailUrl);
  }, [project.id, project.thumbnailUrl]);

  const goToImage = (direction: "previous" | "next") => {
    if (galleryImages.length < 2) return;

    const nextIndex =
      direction === "next"
        ? (selectedImageIndex + 1) % galleryImages.length
        : (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length;

    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <div className="flex max-h-[92vh] flex-col bg-slate-950 text-white">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/95 px-5 py-4 backdrop-blur md:px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-blue-300 font-body">
              {project.serviceCategory ?? TYPE_LABEL[project.type]}
            </p>
            <h1
              id="project-dialog-title"
              className="mt-1 text-2xl font-bold text-white md:text-3xl font-heading"
            >
              {project.title}
            </h1>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-800 p-2 text-slate-300 transition-colors hover:border-slate-700 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Close project case study"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 font-body">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.liveUrl && (
              <ExternalAction href={project.liveUrl} icon={<Globe size={15} />}>
                Live
              </ExternalAction>
            )}
            {project.streamlitUrl && (
              <ExternalAction
                href={project.streamlitUrl}
                icon={<ExternalLink size={15} />}
              >
                App
              </ExternalAction>
            )}
            {project.githubUrl && (
              <ExternalAction
                href={project.githubUrl}
                icon={<Github size={15} />}
              >
                GitHub
              </ExternalAction>
            )}
          </div>
        </div>

        <div className="mt-4 flex gap-1 overflow-x-auto border-b border-slate-800">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "whitespace-nowrap border-b-2 px-3 py-3 text-sm font-medium transition-colors duration-150 font-body",
                activeTab === tab.id
                  ? "border-blue-400 text-white"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <div className="overflow-y-auto px-5 py-6 md:px-6">
        {activeTab === "overview" && (
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-3">
              <div className="relative min-h-[260px] overflow-hidden rounded-xl border border-slate-800 bg-slate-900 md:min-h-[360px]">
                <Image
                  src={selectedImage}
                  alt={`${project.title} selected visual`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-contain"
                />

                {galleryImages.length > 1 && (
                  <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
                    <GalleryArrow
                      label="Show previous project visual"
                      onClick={() => goToImage("previous")}
                    >
                      <ChevronLeft size={18} />
                    </GalleryArrow>
                    <GalleryArrow
                      label="Show next project visual"
                      onClick={() => goToImage("next")}
                    >
                      <ChevronRight size={18} />
                    </GalleryArrow>
                  </div>
                )}
              </div>

              {galleryImages.length > 1 && (
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {galleryImages.map((image, index) => (
                    <button
                      type="button"
                      key={image}
                      onClick={() => setSelectedImage(image)}
                      aria-label={`Show ${project.title} visual ${index + 1}`}
                      aria-pressed={image === selectedImage}
                      className={cn(
                        "relative h-20 overflow-hidden rounded-lg border bg-slate-900 transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                        image === selectedImage
                          ? "border-blue-400"
                          : "border-slate-800 hover:border-slate-600"
                      )}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} visual ${index + 1}`}
                        fill
                        sizes="140px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-5">
              <CaseStudyBlock title="Context">
                {project.clientContext ?? project.fullDescription}
              </CaseStudyBlock>

              <CaseStudyBlock title="Problem">
                {project.businessProblem ?? project.fullDescription}
              </CaseStudyBlock>

              <CaseStudyBlock title="Solution">
                {project.solutionSummary ?? project.fullDescription}
              </CaseStudyBlock>

              <div className="flex flex-wrap gap-2">
                {project.category.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "deliverables" && (
          <ListPanel
            title="What was delivered"
            items={deliverables}
            icon={<CheckCircle2 size={18} />}
          />
        )}

        {activeTab === "process" && (
          <ListPanel
            title="How the work moved"
            items={processNotes}
            icon={<MessageSquareText size={18} />}
            numbered
          />
        )}

        {activeTab === "results" && (
          <div className="space-y-6">
            <CaseStudyBlock title="Outcome">
              {project.outcome ?? project.fullDescription}
            </CaseStudyBlock>

            {project.testimonial && (
              <TestimonialCard testimonial={project.testimonial} />
            )}

            {proofNotes.length > 0 && (
              <ListPanel title="Proof notes" items={proofNotes} />
            )}

            {project.challenges && project.solutions && (
              <div className="grid gap-3">
                <h2 className="text-xl font-bold text-white font-heading">
                  Challenges and solutions
                </h2>
                {project.challenges.map((challenge, index) => (
                  <div
                    key={challenge}
                    className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-100 font-body">
                      {challenge}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400 font-body">
                      {project.solutions?.[index]}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="grid gap-3">
              <h2 className="text-xl font-bold text-white font-heading">
                Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GalleryArrow({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-950/80 text-slate-200 backdrop-blur transition-colors hover:border-blue-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      {children}
    </button>
  );
}

function getPermissionNote(project: Project) {
  if (!project.permissionStatus) return undefined;

  const label: Record<NonNullable<Project["permissionStatus"]>, string> = {
    approved: "Approved for public portfolio use",
    limited: "Limited public use; client screenshots/details are anonymized",
    owned: "Owned or internally approved public project",
    pending: "Public permission still needs confirmation",
  };

  return `Public use: ${label[project.permissionStatus]}`;
}

function ExternalAction({
  href,
  icon,
  children,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-700 px-3 text-sm font-medium text-slate-200 transition-colors hover:border-blue-400 hover:text-white font-body"
    >
      {icon}
      {children}
    </a>
  );
}

function CaseStudyBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-white font-heading">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-300 font-body">
        {children}
      </p>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: NonNullable<Project["testimonial"]>;
}) {
  return (
    <figure className="rounded-xl border border-blue-400/20 bg-blue-500/10 p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-blue-200 font-body">
        <Quote size={17} />
        {TESTIMONIAL_LABEL[testimonial.status]}
      </div>
      <blockquote className="mt-3 text-base leading-relaxed text-slate-100 font-body">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-3 text-sm text-slate-400 font-body">
        {testimonial.attribution}
      </figcaption>
    </figure>
  );
}

function ListPanel({
  title,
  icon,
  items,
  numbered = false,
}: {
  title: string;
  icon?: ReactNode;
  items: string[];
  numbered?: boolean;
}) {
  return (
    <div className="grid gap-4">
      <h2 className="flex items-center gap-2 text-xl font-bold text-white font-heading">
        {icon && <span className="text-blue-300">{icon}</span>}
        {title}
      </h2>

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item}
            className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-800 text-xs font-semibold text-blue-200">
              {numbered ? index + 1 : "OK"}
            </span>
            <p className="text-sm leading-relaxed text-slate-300 font-body">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
