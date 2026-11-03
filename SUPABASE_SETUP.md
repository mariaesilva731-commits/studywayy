# Supabase setup

The app uses the existing Supabase project configured in
`src/services/supabase.jsx`. The URL and publishable key are intended for client
use; never replace the publishable key with a `service_role` or secret key.

To use another Supabase project, copy `.env.example` to `.env`, then fill in
`EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY` from that
project's API settings. Restart Expo after changing `.env`.

## Apply the database migration

1. Open the project's Supabase Dashboard and go to **SQL Editor**.
2. Open `supabase/migrations/20261020000000_create_studyway_tables.sql` in this repository.
3. Run its contents in the SQL Editor.
4. Confirm the `studyway_*` tables appear in **Table Editor**.

Run both migrations in `supabase/migrations` in timestamp order. The first
creates the profile, subject catalog, daily task, activity, calendar,
simulation, question, and preference tables. The second creates the public
material catalog and the `studyway-materials` Storage bucket. It permits public
read access to study materials; only the server-side import script should write
to this bucket and table.

## Authentication

Enable Email under **Authentication > Providers**. If email confirmation is
enabled, signup returns a message asking the user to confirm their address;
the app does not use a separate verification screen. Social OAuth providers
must be enabled and configured in the Supabase Dashboard before using them.

The registration form sends the full name as Supabase Auth user metadata. The
migration's auth trigger copies it into `studyway_profiles`; after login, the
app also creates a missing profile row from that metadata. The user profile is
only readable and editable by its owner through row-level security.

Only the URL and publishable key belong in the client. Never put a secret or
`service_role` key in the app.

## Convert and publish materials

The original PDFs remain in `PDF's`. Convert them with:

```powershell
npm run convert:materials
```

The converter writes Markdown files to the ignored `materials/markdown/`
folder, a detailed audit to `materials/conversion-manifest.json`, and a readable
summary to `materials/conversion-report.md`. It caches
successful and review-required results using each source file's size and
modified time; use `npm run convert:materials -- --force` to reconvert all
files.

To publish Markdown and metadata to the existing Supabase project, copy
`.env.example` to `.env`, set `SUPABASE_SERVICE_ROLE_KEY` to the projectâ€™s
service-role secret, apply both migrations, then run:

```powershell
npm run upload:materials
```

The service-role secret is read only by this Node import script and must never
be prefixed with `EXPO_PUBLIC_` or included in application code. By default,
the import sends Markdown and metadata only. Add `npm run upload:materials -- --include-originals` to
also upload all PDFs so the app can offer them as an alternative; this uploads
about 2.7 GB and may exceed the Storage quota or maximum file size for your
Supabase plan.

To publish a new Markdown-only material, place the `.md` file inside the
project and run:

```powershell
npm run upload:markdown -- --file="materials/manual/guia.md" --title="Guia de Biologia" --subject="Biologia" --institution=ENEM
```

This stores the file by content hash (so identical Markdown is not uploaded
twice) and registers its metadata in the same `studyway_materials` table.

The reader downloads only the selected Markdown file from Storage. It renders
headings, paragraphs, lists, links, tables, images referenced by Markdown, and
code blocks responsively. Inline math is kept readable as formula text. PDFs
with scanned pages are marked for review because OCR is not installed in the
conversion environment. Pages containing images are also marked for review;
those visuals stay available in the original PDF when originals have been
uploaded.

