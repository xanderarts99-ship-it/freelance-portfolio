"use client";

import { useEffect, useRef, useState } from "react";
import type { HTMLAttributes } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import {
  CalendarDays,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MessageSquareText,
} from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Container } from "@/components/layout/Container";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { cn } from "@/lib/utils";

type IconProps = HTMLAttributes<SVGElement>;

const Icons = {
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
};

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/xandersavage",
    color: "hover:text-slate-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/alexander-olomukoro-699255199/",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "X",
    icon: Icons.x,
    href: "https://x.com/xandersavage7",
    color: "hover:text-sky-500 dark:hover:text-sky-400",
  },
];

const briefPrompts = [
  "What are you building?",
  "Who is it for?",
  "Do you need CMS, payments, AI, or a landing page?",
  "Do you already have copy, brand assets, and examples?",
  "What timeline and budget range should I plan around?",
];

const inquiryHref = `mailto:swankylex@gmail.com?subject=${encodeURIComponent(
  "Project inquiry from olomukoro.uk"
)}&body=${encodeURIComponent(`Hi Alexander,

I want to discuss a project.

Project idea:
Business or product:
Main goal:
Pages/features needed:
CMS or AI needed:
Timeline:
Budget range:
Links/assets:

`)}`;

const discoveryHref = `mailto:swankylex@gmail.com?subject=${encodeURIComponent(
  "Discovery call request from olomukoro.uk"
)}&body=${encodeURIComponent(`Hi Alexander,

I would like to request a discovery call.

Project idea:
Preferred days/times:
Timezone:
Preferred platform:
Budget/timeline:
Links/assets:

`)}`;

const contactCtaClass =
  "inline-flex h-12 w-full items-center justify-center px-4 py-0 text-sm sm:w-[210px] sm:text-base";

export function Contact() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const springConfig = { stiffness: 300, damping: 30 };
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 50]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]),
    springConfig
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-white py-24 dark:bg-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.12),transparent_30%)]" />

      <Container className="relative z-10">
        <BlurFade delay={0.2} inView={isInView}>
          <motion.div className="mb-16 text-center" style={{ y, opacity }}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300 font-heading">
              Project inquiry
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl dark:text-white font-heading">
              Tell me what you&apos;re building.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-700 dark:text-slate-300 font-body">
              Send the goal, timeline, budget range, and any links or assets
              you already have. I will reply with next questions, fit, and a
              sensible path to scope the work.
            </p>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>
        </BlurFade>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-black/20 md:p-8"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <MessageSquareText size={22} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                Send a project brief
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300 font-body">
                This is currently a direct email inquiry path. When a real form
                backend is added, submissions can go through a database or email
                service instead of mailto.
              </p>

              <div className="mt-6 grid gap-3">
                {briefPrompts.map((prompt) => (
                  <div
                    key={prompt}
                    className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white/70 p-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 font-body"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-500"
                    />
                    <span>{prompt}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <RainbowButton
                  type="button"
                  onClick={() => {
                    window.location.href = inquiryHref;
                  }}
                  className={contactCtaClass}
                >
                  Email Project Brief
                </RainbowButton>
                <ShinyButton
                  type="button"
                  speed={2.5}
                  onClick={() => {
                    window.location.href = "mailto:swankylex@gmail.com";
                  }}
                  className={contactCtaClass}
                >
                  swankylex@gmail.com
                </ShinyButton>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:pl-4"
          >
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950/70 md:p-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white font-heading">
                What happens next
              </h3>
              <div className="mt-5 space-y-4">
                {[
                  "I review the scope and ask any missing questions.",
                  "If it is a fit, we define deliverables, timeline, and payment milestones.",
                  "You get a clear proposal before work begins.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                      {index + 1}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 font-body">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/70 md:p-8">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white font-heading">
                  Discovery call
                </h3>
              </div>
              <p className="mt-3 text-slate-600 dark:text-slate-400 font-body">
                Send a quick call request with your preferred days, timezone,
                platform, and project context. I&apos;ll reply with 2-3 time
                options that work.
              </p>
              <a
                href={discoveryHref}
                className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 text-sm font-medium text-slate-800 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300 font-body"
              >
                <Mail size={16} />
                Request Discovery Call
              </a>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950/70 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white font-heading">
                Connect elsewhere
              </h3>
              <div className="mt-5 flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={cn(
                      "rounded-full border border-slate-200 bg-slate-100 p-3 text-slate-700 transition-all duration-200 hover:scale-110 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200",
                      social.color
                    )}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
