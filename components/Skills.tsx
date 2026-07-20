import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-stone-200 px-6 py-24 dark:border-stone-800">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Skills</SectionHeading>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-serif text-base text-stone-900 dark:text-stone-100">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
