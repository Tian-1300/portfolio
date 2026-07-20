import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
          Experience
        </h2>

        <ol className="mt-8 space-y-8 border-l border-neutral-200 pl-6 dark:border-neutral-800">
          {experience.map((item) => (
            <li key={`${item.period}-${item.role}`} className="relative">
              <span className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
              <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {item.role}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.org}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
