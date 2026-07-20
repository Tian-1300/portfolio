"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  OrcidIcon,
} from "@/components/icons/BrandIcons";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: { name: string; email: string; message: string }) {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    event.currentTarget.reset();
  }

  return (
    <section
      id="contact-section"
      className="contact-section border-t border-stone-200 px-6 py-24 dark:border-stone-800"
    >
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-stone-900 px-8 py-14 dark:bg-stone-50 sm:px-16">
        <>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute top-1/2 -right-16 h-56 w-56 rounded-full bg-accent-2/25 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-accent-3/25 blur-3xl" />
        </div>

        <div className="text-center">
          <h2 className="relative flex items-center justify-center gap-3 text-sm font-semibold tracking-widest text-stone-400 uppercase dark:text-stone-500">
            <span className="h-px w-8 bg-accent" />
            Contact
            <span className="h-px w-8 bg-accent-3" />
          </h2>

          <h3 className="mt-6 font-serif text-3xl font-medium text-stone-50 sm:text-4xl dark:text-stone-900">
            Let&apos;s connect.
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-lg text-stone-300 dark:text-stone-600">
            Open to research collaborations, academic exchanges, and
            opportunities in data science and decision analytics. Send a
            message directly, or reach out via email and social links below.
          </p>
        </div>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-10 grid max-w-xl gap-4 text-left"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-xs font-medium text-stone-400 dark:text-stone-500"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                aria-invalid={Boolean(errors.name)}
                placeholder="Your name"
                className={`mt-1.5 w-full rounded-lg border bg-stone-800/60 px-3.5 py-2.5 text-sm text-stone-100 placeholder-stone-500 outline-none focus:border-accent dark:bg-white dark:text-stone-900 dark:placeholder-stone-400 ${
                  errors.name
                    ? "border-red-500"
                    : "border-stone-700 dark:border-stone-300"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400 dark:text-red-600">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs font-medium text-stone-400 dark:text-stone-500"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                aria-invalid={Boolean(errors.email)}
                placeholder="you@example.com"
                className={`mt-1.5 w-full rounded-lg border bg-stone-800/60 px-3.5 py-2.5 text-sm text-stone-100 placeholder-stone-500 outline-none focus:border-accent dark:bg-white dark:text-stone-900 dark:placeholder-stone-400 ${
                  errors.email
                    ? "border-red-500"
                    : "border-stone-700 dark:border-stone-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 dark:text-red-600">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-xs font-medium text-stone-400 dark:text-stone-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              aria-invalid={Boolean(errors.message)}
              placeholder="What would you like to talk about?"
              className={`mt-1.5 w-full resize-none rounded-lg border bg-stone-800/60 px-3.5 py-2.5 text-sm text-stone-100 placeholder-stone-500 outline-none focus:border-accent dark:bg-white dark:text-stone-900 dark:placeholder-stone-400 ${
                errors.message
                  ? "border-red-500"
                  : "border-stone-700 dark:border-stone-300"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400 dark:text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
          >
            <Send size={16} />
            Send message
          </button>
          {status === "sent" && (
            <p className="text-center text-xs text-stone-400 dark:text-stone-500">
              Opening your email client with the message pre-filled…
            </p>
          )}
        </form>

        <div className="relative mt-10 flex flex-col items-center gap-6">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-300 transition-colors hover:text-white dark:text-stone-600 dark:hover:text-stone-900"
          >
            <Mail size={16} />
            {site.email}
          </a>
          <div className="flex items-center gap-6">
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-stone-400 transition-colors hover:text-white dark:text-stone-500 dark:hover:text-stone-900"
            >
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-stone-400 transition-colors hover:text-white dark:text-stone-500 dark:hover:text-stone-900"
            >
              <LinkedinIcon width={20} height={20} />
            </a>
            <a
              href={site.social.orcid}
              target="_blank"
              rel="noreferrer"
              aria-label="ORCID"
              className="text-stone-400 transition-colors hover:text-white dark:text-stone-500 dark:hover:text-stone-900"
            >
              <OrcidIcon width={20} height={20} />
            </a>
          </div>
        </div>
        </>
      </Reveal>
    </section>
  );
}
