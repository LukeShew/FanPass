import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <Link className="text-sm font-semibold text-fanpass-blue" href="/">
        Back to FanPass
      </Link>
      <h1 className="mt-8 text-4xl font-bold text-fanpass-navy">
        Privacy Policy
      </h1>
      <p className="mt-5 leading-8 text-slate-600">
        FanPass collects waitlist information so we can contact people who want
        product updates or early access. This may include email, name,
        organization, role, and notes submitted through the waitlist form.
      </p>
      <p className="mt-4 leading-8 text-slate-600">
        FanPass does not sell waitlist information. A fuller privacy policy will
        be added before FanPass launches broader customer accounts or payments.
      </p>
    </main>
  );
}
