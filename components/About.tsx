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
              Based in {site.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
