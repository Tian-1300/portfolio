import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/skills";

const tones = [
  "text-accent hover:bg-accent-soft",
  "text-accent-2 hover:bg-accent-2-soft",
  "text-accent-3 hover:bg-accent-3-soft",
];

const sizes = [
  "text-base font-medium",
  "text-3xl font-semibold",
  "text-lg font-medium",
  "text-xl font-semibold",
  "text-sm font-medium",
  "text-2xl font-semibold",
];

function hash(value: string) {
  let h = 0;
  for (let i = 0; i < value.length; i++) {
    h = (h * 31 + value.charCodeAt(i)) >>> 0;
  }
  return h;
}

const words = skills.flatMap((group, groupIndex) =>
  group.items.map((item) => ({
    text: item,
    tone: tones[groupIndex % tones.length],
    size: sizes[hash(item) % sizes.length],
  })),
);

export default function Skills() {
  return (
    <section id="skills" className="border-t border-stone-200 px-6 py-24 dark:border-stone-800">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center">
          <SectionHeading color="accent2">Skills</SectionHeading>
        </div>

        <div className="mt-12 flex flex-wrap items-baseline justify-center gap-x-6 gap-y-4">
          {words.map((word) => (
            <span
              key={word.text}
              className={`cursor-default rounded-md px-1.5 py-0.5 leading-none transition-all duration-200 hover:-translate-y-0.5 ${word.size} ${word.tone}`}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
