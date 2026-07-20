import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { skills } from "@/data/skills";

const tones = [
  "text-rose-600 hover:bg-rose-100 dark:text-rose-400 dark:hover:bg-rose-950/40",
  "text-amber-600 hover:bg-amber-100 dark:text-amber-400 dark:hover:bg-amber-950/40",
  "text-teal-600 hover:bg-teal-100 dark:text-teal-400 dark:hover:bg-teal-950/40",
  "text-sky-600 hover:bg-sky-100 dark:text-sky-400 dark:hover:bg-sky-950/40",
  "text-violet-600 hover:bg-violet-100 dark:text-violet-400 dark:hover:bg-violet-950/40",
  "text-emerald-600 hover:bg-emerald-100 dark:text-emerald-400 dark:hover:bg-emerald-950/40",
  "text-fuchsia-600 hover:bg-fuchsia-100 dark:text-fuchsia-400 dark:hover:bg-fuchsia-950/40",
  "text-orange-600 hover:bg-orange-100 dark:text-orange-400 dark:hover:bg-orange-950/40",
];

const sizes = [
  "text-[10px] font-normal",
  "text-[10px] font-normal",
  "text-[11px] font-normal",
  "text-xs font-normal",
  "text-xs font-medium",
  "text-[13px] font-medium",
];

function hash(value: string, seed = 0) {
  let h = seed;
  for (let i = 0; i < value.length; i++) {
    h = (h * 31 + value.charCodeAt(i)) >>> 0;
  }
  return h;
}

const words = skills.flatMap((group) =>
  group.items.map((item) => ({
    text: item,
    tone: tones[hash(item, 1) % tones.length],
    size: sizes[hash(item, 7) % sizes.length],
    rotate: (hash(item, 13) % 9) - 4,
    shift: (hash(item, 29) % 7) - 3,
  })),
);

export default function Skills() {
  return (
    <section id="skills" className="border-t border-stone-200 px-6 py-24 dark:border-stone-800">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal className="flex justify-center">
          <SectionHeading color="accent2">Skills</SectionHeading>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5"
        >
          <>
            {words.map((word) => (
              <span
                key={word.text}
                style={{
                  transform: `rotate(${word.rotate}deg) translateY(${word.shift}px)`,
                }}
                className="inline-block"
              >
                <span
                  className={`inline-block cursor-default rounded-md px-1.5 py-0.5 leading-none transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110 ${word.size} ${word.tone}`}
                >
                  {word.text}
                </span>
              </span>
            ))}
          </>
        </Reveal>
      </div>
    </section>
  );
}
