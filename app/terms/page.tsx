import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <Link className="text-sm font-semibold text-fanpass-blue" href="/">
        Back to FanPass
      </Link>
      <h1 className="mt-8 text-4xl font-bold text-fanpass-navy">
        Terms
      </h1>
      <p className="mt-5 leading-8 text-slate-600">
        This website is an early FanPass waitlist page. Joining the waitlist
        does not guarantee access, pricing, or availability.
      </p>
      <p className="mt-4 leading-8 text-slate-600">
        Full product terms will be added before FanPass launches paid services,
        customer accounts, admissions, or payments.
      </p>
    </main>
  );
}
