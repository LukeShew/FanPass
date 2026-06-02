type MockupType = "organizers" | "parents" | "coaches";

export function ProductMockup({ type }: { type: MockupType }) {
  if (type === "parents") {
    return <ParentPassMockup />;
  }

  if (type === "coaches") {
    return <CoachMockup />;
  }

  return <OrganizerDashboardMockup />;
}

function OrganizerDashboardMockup() {
  return (
    <div className="rounded-lg border border-fanpass-border bg-white p-4 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fanpass-blue">
            Live admissions
          </p>
          <h3 className="mt-1 text-xl font-bold text-fanpass-navy">
            Saturday Gate
          </h3>
        </div>
        <div className="rounded-md bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">
          Open
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Metric label="Revenue" value="$8,420" />
        <Metric label="Checked in" value="612" />
        <Metric label="Passes sold" value="738" />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-fanpass-border p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-bold text-fanpass-navy">Entry pace</p>
            <p className="text-sm font-semibold text-slate-500">Last hour</p>
          </div>
          <div className="flex h-36 items-end gap-2">
            {[38, 62, 49, 84, 72, 96, 65].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-fanpass-blue"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-fanpass-border p-4">
          <p className="mb-3 font-bold text-fanpass-navy">Recent check-ins</p>
          <CheckInRow name="Weekend family pass" time="9:42 AM" />
          <CheckInRow name="Adult day pass" time="9:39 AM" />
          <CheckInRow name="Coach pass" time="9:37 AM" />
          <CheckInRow name="Weekend family pass" time="9:35 AM" />
        </div>
      </div>
    </div>
  );
}

function ParentPassMockup() {
  return (
    <div className="rounded-lg border border-fanpass-border bg-white p-4 shadow-soft">
      <div className="mx-auto max-w-[320px] rounded-[28px] border border-slate-200 bg-fanpass-navy p-3">
        <div className="rounded-[22px] bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-bold text-fanpass-navy">FanPass</p>
            <div className="h-2 w-14 rounded-full bg-slate-200" />
          </div>
          <div className="rounded-lg bg-fanpass-blue p-4 text-white">
            <p className="text-sm font-semibold text-blue-100">Weekend Pass</p>
            <h3 className="mt-1 text-2xl font-bold">John Smith</h3>
            <div className="mt-4 grid aspect-square grid-cols-5 gap-1 rounded-md bg-white p-3">
              {Array.from({ length: 25 }).map((_, index) => (
                <div
                  key={index}
                  className={
                    index % 3 === 0 || index % 7 === 0
                      ? "bg-fanpass-navy"
                      : "bg-white"
                  }
                />
              ))}
            </div>
            <p className="mt-4 text-xs font-medium text-blue-100">
              Valid June 14 - June 16
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Metric label="Entry" value="Ready" />
            <Metric label="Gate" value="North" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CoachMockup() {
  return (
    <div className="rounded-lg border border-fanpass-border bg-white p-4 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fanpass-blue">
            Team access
          </p>
          <h3 className="mt-1 text-xl font-bold text-fanpass-navy">
            14U Blue Roster
          </h3>
        </div>
        <div className="rounded-md bg-blue-50 px-3 py-1 text-sm font-bold text-fanpass-blue">
          18 ready
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Metric label="Players" value="12" />
        <Metric label="Coaches" value="3" />
        <Metric label="Families" value="18" />
      </div>

      <div className="mt-4 rounded-lg border border-fanpass-border p-4">
        <p className="mb-3 font-bold text-fanpass-navy">Arrival status</p>
        <TeamRow name="M. Carter" status="Checked in" ready />
        <TeamRow name="A. Johnson" status="Checked in" ready />
        <TeamRow name="T. Williams" status="Pass sent" ready />
        <TeamRow name="R. Davis" status="Needs pass" />
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-fanpass-border bg-white p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-xl font-bold text-fanpass-navy">{value}</p>
    </div>
  );
}

function CheckInRow({ name, time }: { name: string; time: string }) {
  return (
    <div className="flex items-center justify-between border-t border-fanpass-border py-2 first:border-t-0 first:pt-0">
      <p className="text-sm font-semibold text-fanpass-navy">{name}</p>
      <p className="text-xs font-medium text-slate-500">{time}</p>
    </div>
  );
}

function TeamRow({
  name,
  status,
  ready = false
}: {
  name: string;
  status: string;
  ready?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-t border-fanpass-border py-3 first:border-t-0 first:pt-0">
      <div>
        <p className="font-semibold text-fanpass-navy">{name}</p>
        <p className="text-sm text-slate-500">{status}</p>
      </div>
      <div
        className={`h-3 w-3 rounded-full ${
          ready ? "bg-emerald-500" : "bg-amber-400"
        }`}
      />
    </div>
  );
}
