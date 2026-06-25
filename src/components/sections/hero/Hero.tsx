"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Meteors } from "@/components/magicui/meteors";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShinyButton } from "@/components/magicui/shiny-button";

const heroCtaClass =
  "inline-flex h-12 w-[168px] items-center justify-center px-3 py-0 text-sm sm:w-[200px] sm:text-base md:text-base";

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-950 pb-16 sm:pb-0">
      <Meteors
        number={150}
        minSize={0.6}
        maxSize={4.5}
        minDuration={5}
        maxDuration={15}
        colors={["#334155", "#1e293b", "#475569"]}
        className="z-0 opacity-90"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 md:py-16">
        <div className="flex flex-col items-center justify-center space-y-7 text-center sm:space-y-6 md:space-y-9">
          <BlurFade delay={0.2} inView>
            <div className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-md font-body">
              Freelance web development for businesses ready to look serious
            </div>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <h1 className="text-4xl text-amber-50 sm:text-5xl md:text-6xl lg:text-7xl font-heading">
              Alexander Olomukoro
            </h1>
          </BlurFade>

          <BlurFade delay={1} inView>
            <h2 className="text-3xl font-bold tracking-tight text-amber-50 sm:text-4xl md:text-5xl lg:text-6xl font-heading">
              <AuroraText>Websites, CMS platforms & AI-enabled tools</AuroraText>
            </h2>
          </BlurFade>

          <div className="flex w-full justify-center pt-2 sm:pt-4">
            <BlurFade delay={1.5} inView>
              <div className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  "Company websites",
                  "CMS handoff",
                  "SaaS landing pages",
                  "AI workflow prototypes",
                  "Fast launches",
                  "Client-owned accounts",
                ].map((offer) => (
                  <span
                    key={offer}
                    className="rounded-full border border-slate-700/50 bg-slate-800/70 px-3 py-1.5 text-sm text-gray-300 sm:px-4 sm:py-2 sm:text-base md:text-lg font-body"
                  >
                    {offer}
                  </span>
                ))}
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={2} inView>
            <p className="mb-5 max-w-3xl text-lg text-gray-300 sm:mb-10 md:text-xl lg:text-2xl font-body">
              I help founders and small businesses turn ideas into polished
              websites, content-managed platforms, landing pages, and practical
              AI features with clear scope, fast execution, and calm handoff.
            </p>
          </BlurFade>

          <BlurFade delay={2.5} inView>
            <div className="mb-6 mt-2 flex w-full flex-row justify-center gap-3 sm:mb-0 sm:mt-4 sm:gap-6 md:mt-6 font-body">
              <a href="#contact" aria-label="Start a project inquiry">
                <RainbowButton
                  className={`${heroCtaClass} transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
                >
                  Start a Project
                </RainbowButton>
              </a>
              <a
                href="#projects"
                aria-label="View client work and case studies"
              >
                <ShinyButton
                  speed={2.5}
                  className={`${heroCtaClass} cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
                >
                  View Case Studies
                </ShinyButton>
              </a>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
