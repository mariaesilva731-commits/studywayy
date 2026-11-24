create table if not exists public.studyway_subscriptions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  provider text not null,
  provider_subscription_id text unique,
  plan_id text not null check (plan_id in ('monthly', 'annual')),
  status text not null check (
    status in ('active', 'past_due', 'canceled', 'incomplete', 'expired')
  ),
  current_period_end timestamptz not null,
  cancel_at_period_end boolean not null default false,
  updated_at timestamptz not null default now()
);

alter table public.studyway_subscriptions enable row level security;

grant select on public.studyway_subscriptions to authenticated;

drop policy if exists "Users read their own StudyWay subscription"
  on public.studyway_subscriptions;
create policy "Users read their own StudyWay subscription"
  on public.studyway_subscriptions for select to authenticated
  using (user_id = (select auth.uid()));

revoke insert, update, delete on public.studyway_subscriptions
  from anon, authenticated;
