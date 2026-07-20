import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section id="publications" className="border-t border-stone-200 px-6 py-24 dark:border-stone-800">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Publications</SectionHeading>

        <div className="mt-10 flex flex-col gap-4">
          {publications.map((pub, i) => {
            const dot = [
              "bg-accent",
              "bg-accent-2",
              "bg-accent-3",
            ][i % 3];
            return (
              <a
                key={pub.title}
                href={pub.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-2 rounded-2xl border border-stone-200 p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-stone-900/5 dark:border-stone-800 dark:hover:border-accent/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="flex items-start gap-3 font-serif text-lg text-stone-900 dark:text-stone-50">
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
                <p className="pl-[18px] text-sm text-stone-600 dark:text-stone-400">
                  {pub.journal} &middot; {pub.date}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
