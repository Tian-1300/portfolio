import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section
      id="projects-section"
      className="projects-section border-t border-stone-200 px-6 py-24 dark:border-stone-800"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Projects &amp; Publications</SectionHeading>
        <p className="mt-4 max-w-2xl text-stone-600 dark:text-stone-400">
          Selected research projects — from applied machine-learning systems
          to optimization models — each one published and peer-reviewed.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {publications.map((pub, i) => {
            const dot = ["bg-accent", "bg-accent-2", "bg-accent-3"][i % 3];
            return (
              <Reveal key={pub.title} delay={i * 80}>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-3 rounded-2xl border border-stone-200 p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-stone-900/5 dark:border-stone-800 dark:hover:border-accent/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="flex items-start gap-3 font-serif text-lg font-medium text-stone-900 dark:text-stone-50">
                      <span
                        className={`mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${dot}`}
                      />
                      {pub.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="mt-1 flex-shrink-0 text-stone-400 transition-colors group-hover:text-accent"
                    />
                  </div>
                  <p className="pl-[18px] text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {pub.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pl-[18px]">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="pl-[18px] text-xs text-stone-500 dark:text-stone-500">
                    {pub.journal} &middot; {pub.date}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
