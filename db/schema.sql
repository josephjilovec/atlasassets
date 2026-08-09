create extension if not exists pgcrypto;

create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  display_name text not null,
  created_at timestamptz not null default now()
);

create table if not exists portfolios (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  client_id uuid not null references clients(id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists assets (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  portfolio_id uuid not null references portfolios(id) on delete cascade,
  asset_type text not null,
  label text not null,
  jurisdiction text,
  custody_model text,
  created_at timestamptz not null default now()
);

create table if not exists jurisdictions (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  name text not null,
  source_version text,
  updated_at timestamptz not null default now()
);

create table if not exists scenarios (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  portfolio_id uuid not null references portfolios(id) on delete cascade,
  name text not null,
  version integer not null default 1,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists assumptions (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  scenario_id uuid not null references scenarios(id) on delete cascade,
  jurisdiction_code text,
  assumption_key text not null,
  value jsonb not null,
  source_ref text,
  effective_at timestamptz,
  review_after timestamptz,
  confidence numeric(4,3) check (confidence >= 0 and confidence <= 1),
  created_at timestamptz not null default now()
);

create table if not exists risk_dimensions (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  scenario_id uuid not null references scenarios(id) on delete cascade,
  category text not null,
  status text not null,
  rationale text,
  requires_professional_review boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists professional_reviews (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  scenario_id uuid not null references scenarios(id) on delete cascade,
  professional_type text not null,
  jurisdiction text,
  scope text not null,
  reviewer_ref text,
  status text not null default 'pending',
  decided_at timestamptz,
  re_review_after timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists decisions (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  scenario_id uuid not null references scenarios(id) on delete cascade,
  decision_status text not null,
  approved_by text,
  approved_at timestamptz,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists audit_events (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  portfolio_id uuid references portfolios(id) on delete cascade,
  scenario_id uuid references scenarios(id) on delete cascade,
  event_type text not null,
  actor_ref text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table clients enable row level security;
alter table portfolios enable row level security;
alter table assets enable row level security;
alter table scenarios enable row level security;
alter table assumptions enable row level security;
alter table risk_dimensions enable row level security;
alter table professional_reviews enable row level security;
alter table decisions enable row level security;
alter table audit_events enable row level security;

create policy tenant_clients on clients using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_portfolios on portfolios using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_assets on assets using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_scenarios on scenarios using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_assumptions on assumptions using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_risk on risk_dimensions using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_reviews on professional_reviews using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_decisions on decisions using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);
create policy tenant_audit on audit_events using (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid);

create index if not exists portfolio_client_idx on portfolios(tenant_id, client_id);
create index if not exists asset_portfolio_idx on assets(tenant_id, portfolio_id);
create index if not exists scenario_portfolio_idx on scenarios(tenant_id, portfolio_id, updated_at desc);
create index if not exists assumption_scenario_idx on assumptions(tenant_id, scenario_id);
create index if not exists review_scenario_status_idx on professional_reviews(tenant_id, scenario_id, status);
create index if not exists audit_scenario_created_idx on audit_events(tenant_id, scenario_id, created_at desc);
