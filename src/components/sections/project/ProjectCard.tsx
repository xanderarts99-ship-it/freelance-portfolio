"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projectData";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const label = project.serviceCategory ?? project.projectType ?? project.type;
  const actionLabel = project.isClientWork ? "View Case Study" : "View Project";

  return (
    <button
      type="button"
      aria-label={`${actionLabel} for ${project.title}`}
      onClick={() => onClick(project)}
      className={cn(
        "group flex h-full w-full flex-col overflow-hidden rounded-xl border text-left",
        "border-slate-200 bg-white transition-colors duration-150",
        "hover:border-blue-400 hover:bg-slate-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500/70 dark:hover:bg-slate-900"
      )}
    >
      <div className="relative h-44 w-full overflow-hidden bg-slate-200 dark:bg-slate-900">
        <Image
          src={project.thumbnailUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.isFeatured && (
            <span className="rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-slate-900">
              Featured
            </span>
          )}
          {project.isClientWork && (
            <span className="rounded-md border border-white/20 bg-slate-950/75 px-2 py-1 text-xs font-semibold text-white">
              Client work
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
          {label}
        </p>
        <h3 className="text-xl font-bold text-slate-950 dark:text-white font-heading">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-body">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.category.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-6 text-sm font-medium text-slate-900 dark:text-white">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            {project.status === "completed" ? "Completed" : "In progress"}
          </span>
          <span className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-300">
            {actionLabel}
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </button>
  );
}
