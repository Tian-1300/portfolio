import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading color="accent3">Experience</SectionHeading>

        <ol className="mt-10 space-y-9 border-l border-stone-200 pl-7 dark:border-stone-800">
          {experience.map((item) => (
            <li key={`${item.period}-${item.role}`} className="relative">
              <span className="absolute top-1.5 -left-[33px] h-3 w-3 rounded-full border-2 border-background bg-accent-3" />
              <p className="text-xs font-medium tracking-wide text-accent-3 uppercase">
                {item.period}
              </p>
              <h3 className="mt-1.5 font-serif text-xl font-medium text-stone-900 dark:text-stone-50">
                {item.role}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {item.org}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
