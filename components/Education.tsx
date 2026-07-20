import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="border-t border-stone-200 px-6 py-24 dark:border-stone-800">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Education</SectionHeading>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={`${item.period}-${item.degree}`}
              className="rounded-2xl border border-stone-200 bg-stone-50/60 p-6 transition-shadow hover:shadow-md dark:border-stone-800 dark:bg-stone-900/30"
            >
              <p className="text-xs font-medium tracking-wide text-accent uppercase">
                {item.period}
              </p>
              <h3 className="mt-2 font-serif text-lg text-stone-900 dark:text-stone-50">
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
          ))}
        </div>
      </div>
    </section>
  );
}
