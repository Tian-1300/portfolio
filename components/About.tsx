import { FileDown, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="border-t border-stone-200 px-6 py-24 dark:border-stone-800">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>About</SectionHeading>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto]">
          <p className="max-w-2xl text-lg leading-relaxed text-stone-700 dark:text-stone-300">
            {site.bio}
          </p>

          <div className="flex h-fit flex-col gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-6 lg:w-64 dark:border-stone-800 dark:bg-stone-900/40">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0 text-accent" />
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {site.location}
              </p>
            </div>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-stone-900"
            >
              <FileDown size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
