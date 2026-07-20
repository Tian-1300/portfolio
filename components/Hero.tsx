import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  OrcidIcon,
} from "@/components/icons/BrandIcons";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
        <div>
          <p className="mb-5 text-sm font-medium tracking-wide text-accent">
            Hi, I&apos;m {site.name.split(" ")[0]}
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-stone-900 sm:text-6xl dark:text-stone-50">
            {site.name}
          </h1>
          <p className="mt-5 inline-block rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent">
            {site.role}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-md border-l-2 border-accent/40 pl-4 text-sm text-stone-500 italic dark:text-stone-400">
            &ldquo;{site.quote}&rdquo;
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#publications"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
            >
              View my research
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-900"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-stone-500 transition-colors hover:text-accent"
            >
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-stone-500 transition-colors hover:text-accent"
            >
              <LinkedinIcon width={20} height={20} />
            </a>
            <a
              href={site.social.orcid}
              target="_blank"
              rel="noreferrer"
              aria-label="ORCID"
              className="text-stone-500 transition-colors hover:text-accent"
            >
              <OrcidIcon width={20} height={20} />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="text-stone-500 transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="absolute -top-8 -right-8 -bottom-8 -left-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent-soft via-accent-3-soft to-accent-2-soft blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-stone-200 shadow-2xl shadow-stone-900/10 dark:border-stone-800">
            <Image
              src="/avatar.png"
              alt={site.name}
              fill
              priority
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
