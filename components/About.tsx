import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
          About
        </h2>
        <div className="mt-6 grid gap-10 sm:grid-cols-[auto_1fr] sm:items-start">
          <div className="h-28 w-28 flex-shrink-0 rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900" />
          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {site.bio}
            </p>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
              {site.location}
            </p>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
