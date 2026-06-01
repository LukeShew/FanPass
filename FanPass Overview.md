# FanPass Overview

## What The Product Currently Is

FanPass is currently a waitlist website for a youth sports tournament admission platform.

## What Works

- One-page marketing site
- Waitlist form
- Audience selector
- Email validation
- Loading, success, and error states
- Supabase migration for waitlist storage
- Placeholder privacy and terms pages

## What Does Not Work Yet

- No live tournament admission
- No QR pass system
- No dashboard
- No auth
- No payment processing

## Current Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## Pages And Features

- `/` waitlist landing page
- `/privacy` placeholder privacy page
- `/terms` placeholder terms page

## Supabase Status

Supabase project: `saxkpxzqwnwjqcjypysu`

Migration added for `public.waitlist_signups`.

## GitHub Status

Repository: `https://github.com/LukeShew/FanPass`

Local Git remote is set to that repo. Pushing requires GitHub authentication and explicit approval.

## Vercel Status

The app is ready for Vercel configuration as a Next.js project. Deployment should wait until environment variables are added.

## Local Website Instructions

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Live Website Link

Not deployed from this workspace yet.

## Risks And Limitations

- The waitlist form will not submit until Supabase public env vars are configured.
- GitHub clone failed locally because private repo auth is not configured for command-line Git.
- Legal pages are placeholders and should be replaced before a paid launch.

## Recommended Next Improvements

- Add the real logo asset if a final file exists.
- Configure Vercel env vars.
- Push the local commit to GitHub after approval.
- Deploy a Vercel preview and test the real Supabase insert path.
