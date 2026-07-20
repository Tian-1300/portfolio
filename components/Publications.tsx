import { ArrowUpRight } from "lucide-react";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section id="publications" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
          Publications
        </h2>

        <div className="mt-8 flex flex-col gap-4">
          {publications.map((pub) => (
            <a
              key={pub.title}
              href={pub.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  {pub.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="mt-1 flex-shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-900 dark:group-hover:text-neutral-100"
                />
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {pub.journal} &middot; {pub.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
