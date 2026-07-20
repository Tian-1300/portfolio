import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="border-t border-stone-200 px-6 py-24 dark:border-stone-800">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading color="accent2">Education</SectionHeading>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={`${item.period}-${item.degree}`} delay={i * 80}>
              <div className="rounded-2xl border border-stone-200 border-t-2 border-t-accent-2/50 bg-stone-50/60 p-6 transition-shadow hover:shadow-md dark:border-stone-800 dark:border-t-accent-2/50 dark:bg-stone-900/30">
                <p className="text-xs font-medium tracking-wide text-accent-2 uppercase">
                  {item.period}
                </p>
                <h3 className="mt-2 font-serif text-lg font-medium text-stone-900 dark:text-stone-50">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                  {item.institution}
                </p>
                {item.note && (
                  <p className="mt-1 text-sm text-stone-500 dark:text-stone-500">
                    {item.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
