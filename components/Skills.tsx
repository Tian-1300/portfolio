import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/skills";

const palette = [
  { pill: "bg-accent-soft text-accent", dot: "bg-accent" },
  { pill: "bg-accent-2-soft text-accent-2", dot: "bg-accent-2" },
  { pill: "bg-accent-3-soft text-accent-3", dot: "bg-accent-3" },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-stone-200 px-6 py-24 dark:border-stone-800">
      <div className="mx-auto max-w-5xl">
        <SectionHeading color="accent2">Skills</SectionHeading>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const tone = palette[i % palette.length];
            return (
              <div key={group.category}>
                <h3 className="flex items-center gap-2 font-serif text-base text-stone-900 dark:text-stone-100">
                  <span className={`h-2 w-2 rounded-full ${tone.dot}`} />
                  {group.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${tone.pill}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
