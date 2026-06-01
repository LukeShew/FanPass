create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  role text not null,
  organization text,
  notes text,
  source text default 'website',
  created_at timestamptz not null default now(),
  constraint waitlist_signups_email_not_blank check (length(btrim(email)) > 3),
  constraint waitlist_signups_role_allowed check (
    role in (
      'Parent / Spectator',
      'Tournament Director / Organizer',
      'Coach',
      'Other'
    )
  )
);

alter table public.waitlist_signups enable row level security;

revoke all on table public.waitlist_signups from anon;
revoke all on table public.waitlist_signups from authenticated;

grant insert on table public.waitlist_signups to anon;
grant select, insert, update, delete on table public.waitlist_signups to service_role;

drop policy if exists "Allow anonymous waitlist inserts" on public.waitlist_signups;

create policy "Allow anonymous waitlist inserts"
on public.waitlist_signups
for insert
to anon
with check (
  email is not null
  and length(btrim(email)) > 3
  and position('@' in email) > 1
  and role in (
    'Parent / Spectator',
    'Tournament Director / Organizer',
    'Coach',
    'Other'
  )
);
