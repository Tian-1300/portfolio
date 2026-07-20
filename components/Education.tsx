import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
          Education
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={`${item.period}-${item.degree}`}
              className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800"
            >
              <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {item.institution}
              </p>
              {item.note && (
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
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
