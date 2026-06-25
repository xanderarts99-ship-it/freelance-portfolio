import {
  Bot,
  CheckCircle2,
  Globe2,
  LayoutTemplate,
  Rocket,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShineBorder } from "@/components/magicui/shine-border";
import { cn } from "@/lib/utils";
import { processSteps, servicePackages, trustStats } from "@/data/businessData";

const serviceIcons = [Globe2, LayoutTemplate, Rocket, Bot, Wrench];

export function BusinessSections() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-20 text-white"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.16),transparent_32%)]" />

      <Container className="relative z-10 space-y-20">
        <BlurFade delay={0.1} inView>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-300 font-heading">
                Freelance web + AI services
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl font-heading">
                Websites and AI-enabled web tools built for real business use.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg font-body">
              I help founders and businesses turn unclear ideas into scoped,
              shipped, maintainable web experiences: company sites, CMS-backed
              platforms, SaaS landing pages, and AI workflow prototypes.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat, index) => (
            <BlurFade key={stat.label} delay={0.12 + index * 0.05} inView>
              <div className="relative h-full rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
                <ShineBorder shineColor={["#60A5FA", "#A78BFA", "#FBBF24"]} />
                <div className="text-3xl font-bold text-white font-heading">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-blue-200 font-body">
                  {stat.label}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 font-body">
                  {stat.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-5">
          {servicePackages.map((service, index) => {
            const Icon = serviceIcons[index] || CheckCircle2;

            return (
              <BlurFade key={service.name} delay={0.14 + index * 0.05} inView>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-black/20",
                    index === 1 && "border-blue-500/40 bg-slate-900"
                  )}
                >
                  {index === 1 && (
                    <BorderBeam
                      duration={7}
                      size={220}
                      className="from-transparent via-blue-500 to-transparent"
                    />
                  )}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-blue-300">
                    <Icon size={21} />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-blue-200 font-body">
                    {service.bestFor}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400 font-body">
                    {service.summary}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-slate-300 font-body"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-emerald-400"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </BlurFade>
            );
          })}
        </div>

        <div id="process" className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <BlurFade delay={0.1} inView>
            <div className="lg:sticky lg:top-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 font-body">
                <ShieldCheck size={16} />
                Safe communication advantage
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl font-heading">
                Clients should never wonder what is happening.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 font-body">
                My process is built around clear scope, frequent progress
                updates, review rounds, client-owned accounts, and handover
                support. That is the difference between a finished website and
                a business asset the client can actually use.
              </p>
            </div>
          </BlurFade>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((item, index) => (
              <BlurFade key={item.title} delay={0.12 + index * 0.04} inView>
                <div className="h-full rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition-colors hover:border-blue-500/40">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.18em] text-blue-300 font-heading">
                      {item.step}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent ml-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400 font-body">
                    {item.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
