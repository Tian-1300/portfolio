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
      className="flex min-h-screen flex-col items-start justify-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          Hi, I&apos;m {site.name.split(" ")[0]} 👋
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl dark:text-neutral-50">
          {site.role}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
          {site.tagline}
        </p>
        <p className="mt-3 max-w-xl text-sm text-neutral-500 italic dark:text-neutral-500">
          &ldquo;{site.quote}&rdquo;
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#publications"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-neutral-900"
          >
            View my research
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
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
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <GithubIcon width={20} height={20} />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <LinkedinIcon width={20} height={20} />
          </a>
          <a
            href={site.social.orcid}
            target="_blank"
            rel="noreferrer"
            aria-label="ORCID"
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <OrcidIcon width={20} height={20} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
