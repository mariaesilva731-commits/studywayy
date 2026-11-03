create extension if not exists pgcrypto;

create table if not exists public.studyway_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  institution text not null default 'ENEM',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.studyway_subjects (
  id text primary key,
  name text not null unique,
  total integer not null default 0 check (total >= 0),
  icon text not null default 'book-outline',
  sort_order integer not null default 0
);

create table if not exists public.studyway_daily_tasks (
  user_id uuid not null references auth.users(id) on delete cascade,
  task_date date not null,
  task_index smallint not null check (task_index >= 0),
  subject text not null,
  title text not null,
  duration_minutes integer not null default 30 check (duration_minutes > 0),
  is_completed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, task_date, task_index)
);

create table if not exists public.studyway_activities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  activity_type text not null,
  activity_day date not null default current_date,
  created_at timestamptz not null default now(),
  unique (user_id, activity_type, activity_day)
);

create table if not exists public.studyway_calendar_activities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  activity_date date not null,
  title text not null,
  start_time time not null default '14:00',
  duration_minutes integer check (duration_minutes is null or duration_minutes > 0),
  is_completed boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.studyway_calendar_activities
  add column if not exists is_completed boolean not null default false;

create table if not exists public.studyway_simulations (
  id text primary key,
  title text not null,
  institution text not null,
  subject text not null default 'Geral',
  question_count integer not null default 0 check (question_count >= 0),
  duration_minutes integer not null default 0 check (duration_minutes >= 0),
  sort_order integer not null default 0
);

create table if not exists public.studyway_questions (
  id uuid primary key default gen_random_uuid(),
  simulation_id text references public.studyway_simulations(id) on delete cascade,
  subject text not null,
  prompt text not null,
  options jsonb not null default '[]'::jsonb,
  correct_answer text,
  sort_order integer not null default 0
);

create table if not exists public.studyway_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  notifications_enabled boolean not null default true,
  updated_at timestamptz not null default now()
);

alter table public.studyway_profiles enable row level security;
alter table public.studyway_subjects enable row level security;
alter table public.studyway_daily_tasks enable row level security;
alter table public.studyway_activities enable row level security;
alter table public.studyway_calendar_activities enable row level security;
alter table public.studyway_simulations enable row level security;
alter table public.studyway_questions enable row level security;
alter table public.studyway_preferences enable row level security;

grant select on public.studyway_subjects to anon, authenticated;
grant select on public.studyway_simulations, public.studyway_questions to anon, authenticated;
grant select, insert, update, delete on public.studyway_profiles to authenticated;
grant select, insert, update, delete on public.studyway_daily_tasks to authenticated;
grant select, insert, update, delete on public.studyway_activities to authenticated;
grant select, insert, update, delete on public.studyway_calendar_activities to authenticated;
grant select, insert, update, delete on public.studyway_preferences to authenticated;

drop policy if exists "StudyWay subjects are readable" on public.studyway_subjects;
create policy "StudyWay subjects are readable"
  on public.studyway_subjects for select to anon, authenticated using (true);

drop policy if exists "StudyWay simulations are readable" on public.studyway_simulations;
create policy "StudyWay simulations are readable"
  on public.studyway_simulations for select to anon, authenticated using (true);

drop policy if exists "StudyWay questions are readable" on public.studyway_questions;
create policy "StudyWay questions are readable"
  on public.studyway_questions for select to anon, authenticated using (true);

drop policy if exists "Users manage their own StudyWay profile" on public.studyway_profiles;
create policy "Users manage their own StudyWay profile"
  on public.studyway_profiles for all to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

drop policy if exists "Users manage their own StudyWay tasks" on public.studyway_daily_tasks;
create policy "Users manage their own StudyWay tasks"
  on public.studyway_daily_tasks for all to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "Users manage their own StudyWay activities" on public.studyway_activities;
create policy "Users manage their own StudyWay activities"
  on public.studyway_activities for all to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "Users manage their own StudyWay calendar" on public.studyway_calendar_activities;
create policy "Users manage their own StudyWay calendar"
  on public.studyway_calendar_activities for all to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "Users manage their own StudyWay preferences" on public.studyway_preferences;
create policy "Users manage their own StudyWay preferences"
  on public.studyway_preferences for all to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

create or replace function public.studyway_create_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.studyway_profiles (id, full_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists studyway_on_auth_user_created on auth.users;
create trigger studyway_on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.studyway_create_profile_for_new_user();

insert into public.studyway_subjects (id, name, total, icon, sort_order) values
  ('matematica', 'Matemática', 6, 'calculator-outline', 0),
  ('portugues', 'Português', 25, 'book-outline', 1),
  ('historia', 'História', 18, 'time-outline', 2),
  ('geografia', 'Geografia', 3, 'earth-outline', 3),
  ('biologia', 'Biologia', 24, 'leaf-outline', 4),
  ('quimica', 'Química', 25, 'flask-outline', 5)
on conflict (id) do nothing;

insert into public.studyway_simulations
  (id, title, institution, subject, question_count, duration_minutes, sort_order)
values
  ('enem-humanas', 'ENEM • Ciências Humanas', 'ENEM', 'Ciências Humanas', 20, 30, 0),
  ('enem-matematica', 'ENEM • Matemática', 'ENEM', 'Matemática', 25, 40, 1),
  ('usp-linguagens', 'USP • Linguagens', 'USP', 'Linguagens', 30, 50, 2),
  ('unesp-geral', 'UNESP • Geral', 'UNESP', 'Geral', 35, 60, 3)
on conflict (id) do nothing;

insert into public.studyway_questions
  (simulation_id, subject, prompt, options, correct_answer, sort_order)
values
  ('enem-matematica', 'Matemática', 'Se f(x) = 2x + 3, qual é o valor de f(4)?', '["7", "9", "11", "12"]'::jsonb, '11', 0);