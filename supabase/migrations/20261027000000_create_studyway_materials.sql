create table if not exists public.studyway_materials (
  id text primary key,
  institution text not null,
  subject text not null,
  title text not null,
  filename text not null,
  source_path text not null,
  markdown_path text,
  original_storage_path text,
  source_size_bytes bigint not null default 0,
  markdown_size_bytes bigint not null default 0,
  source_sha256 text,
  conversion_status text not null default 'pending'
    check (conversion_status in ('pending', 'converted', 'review_required', 'failed')),
  review_notes text,
  converted_at timestamptz,
  updated_at timestamptz not null default now()
);

create index if not exists studyway_materials_institution_subject_title_idx
  on public.studyway_materials (institution, subject, title);

alter table public.studyway_materials enable row level security;
grant select on public.studyway_materials to anon, authenticated;

drop policy if exists "StudyWay materials are readable" on public.studyway_materials;
create policy "StudyWay materials are readable"
  on public.studyway_materials for select to anon, authenticated using (true);

insert into storage.buckets (id, name, public)
values ('studyway-materials', 'studyway-materials', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "StudyWay material files are publicly readable" on storage.objects;
create policy "StudyWay material files are publicly readable"
  on storage.objects for select to anon, authenticated
  using (bucket_id = 'studyway-materials');
