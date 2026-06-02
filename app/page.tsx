import Link from "next/link";
import { audienceContent, type AudienceKey } from "@/components/audience-pages";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const audienceOrder: AudienceKey[] = ["organizers", "parents", "coaches"];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section id="choose-role" className="bg-fanpass-gray">
        <div className="mx-auto max-w-6xl px-5 py-10 lg:py-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fanpass-blue">
              Choose your role
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-fanpass-navy sm:text-5xl">
              Who are you signing up for FanPass as?
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              FanPass is different for tournament directors, parents, and
              coaches. Pick your role to see the reasons to join and the
              waitlist built for you.
            </p>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {audienceOrder.map((key) => (
              <AudienceCard key={key} audience={key} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function AudienceCard({ audience }: { audience: AudienceKey }) {
  const content = audienceContent[audience];

  return (
    <article className="flex min-h-[500px] flex-col rounded-lg border border-fanpass-border bg-white p-5 shadow-soft">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fanpass-blue">
          {content.eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-bold text-fanpass-navy">
          {content.label}
        </h3>
        <p className="mt-3 leading-7 text-slate-600">{content.description}</p>
      </div>

      <div className="my-5 h-px bg-fanpass-border" />

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
          Why sign up
        </p>
        <ul className="mt-4 grid gap-3">
          {content.reasons.map((reason) => (
            <li key={reason.title} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-fanpass-blue"
              >
                ✓
              </span>
              <div>
                <p className="font-bold text-fanpass-navy">{reason.title}</p>
                <p className="mt-0.5 text-sm leading-6 text-slate-600">
                  {reason.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-5">
        <div className="grid gap-3">
          <Link
            href={`/${audience}#waitlist`}
            className="inline-flex h-12 items-center justify-center rounded-md bg-fanpass-blue px-5 text-base font-semibold text-white transition hover:bg-blue-700"
          >
            Join the waitlist
          </Link>
          <Link
            href={`/${audience}`}
            className="inline-flex h-12 items-center justify-center rounded-md border border-fanpass-border bg-white px-5 text-base font-semibold text-fanpass-navy transition hover:border-blue-200 hover:text-fanpass-blue"
          >
            Learn more
          </Link>
        </div>
      </div>
    </article>
  );
}
