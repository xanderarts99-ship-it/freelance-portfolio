"use client";

import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/sections/project/ProjectCard";
import { ProjectDialogContent } from "@/components/sections/project/ProjectDialogContent";
import projects from "@/data/projectData";
import type { Project } from "@/data/projectData";
import { cn } from "@/lib/utils";

type FilterType = "all" | "client" | "web" | "ai" | "ml";

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "Featured", value: "all" },
  { label: "Clients", value: "client" },
  { label: "Web", value: "web" },
  { label: "AI", value: "ai" },
  { label: "ML", value: "ml" },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects.filter((project) => project.isFeatured);
    }

    if (activeFilter === "client") {
      return projects.filter((project) => project.isClientWork);
    }

    if (activeFilter === "web") {
      return projects.filter(
        (project) => project.type === "web" || project.type === "fullstack"
      );
    }

    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    document.body.style.overflow = isOverlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  useEffect(() => {
    if (!isOverlayOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOverlayOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOverlayOpen]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  const baseDelay = 0.2;
  const delayIncrement = 0.1;

  return (
    <section id="projects" className="bg-white py-20 dark:bg-slate-900">
      <Container>
        <BlurFade delay={baseDelay} inView>
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300 font-heading">
              Proof of work
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl dark:text-white font-heading">
              Selected Client Work & AI Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-700 dark:text-slate-300 font-body">
              Recent client websites and product-grade AI work, presented as
              business problems, deliverables, process notes, and outcomes.
            </p>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>
        </BlurFade>

        <BlurFade delay={baseDelay + delayIncrement} inView>
          <div className="-mx-4 mb-10 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
            <div className="flex min-w-max justify-center gap-2 border-b border-slate-200 dark:border-slate-800 sm:min-w-0">
              {FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={cn(
                    "whitespace-nowrap border-b-2 px-3 py-3 text-sm font-medium transition-colors duration-150 font-body sm:px-5",
                    activeFilter === filter.value
                      ? "border-blue-500 text-slate-950 dark:border-blue-400 dark:text-white"
                      : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </BlurFade>

        <div className="-mx-4 flex flex-wrap">
          {filteredProjects.map((project, index) => (
            <BlurFade
              key={project.id}
              className="w-full p-4 sm:w-1/2 lg:w-1/3"
              delay={baseDelay + (index % 3) * delayIncrement}
              inView
            >
              <ProjectCard project={project} onClick={handleProjectClick} />
            </BlurFade>
          ))}
        </div>
      </Container>

      {isOverlayOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={handleCloseOverlay}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <ProjectDialogContent
              project={selectedProject}
              onClose={handleCloseOverlay}
            />
          </div>
        </div>
      )}
    </section>
  );
}
