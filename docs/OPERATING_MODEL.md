# Atlas Assets — Operating Model 2026–2041

## Strategic thesis

Atlas Assets is a cross-border structure-simulation and professional-coordination platform for globally distributed founders, companies, intellectual property, and digital-asset operations.

Its purpose is to organize facts, assumptions, jurisdictions, dependencies, and professional-review requirements before a client forms an entity, changes ownership, restructures IP, changes custody, or moves assets.

The core principle is **structure before movement**.

## Customer segments

### Primary

- Remote-first founders with operations across multiple countries.
- Digital creators with international royalties, licensing, and customer revenue.
- IP-heavy companies with distributed development and licensing arrangements.
- Digital-asset businesses that need structured review of custody, governance, counterparties, reporting, and regulatory classification.
- Entrepreneurial holding companies with several operating businesses and jurisdictions.

### Psychographic fit

The ideal client understands that cross-border complexity cannot be solved by choosing a jurisdiction from a list. They value documented assumptions, scenario comparison, professional review, and an evidence trail that can be revisited when rules or facts change.

## Value proposition

**Hook:** Structure before movement.

Atlas Assets helps clients and professional advisers compare candidate structures before spending significant time and money implementing the wrong one.

## Core product modules

### Jurisdiction Lattice

Maps residence, management location, entity formation, customer markets, banking, custody, professional coverage, and reporting dependencies.

### Structure Simulator

Represents candidate ownership and operating structures as versioned scenarios. Each scenario has assumptions, dependencies, risk dimensions, open questions, and professional-review status.

### Asset Classification Layer

Separates operating businesses, intellectual property, creator income, digital assets, and mixed portfolios so different professional and regulatory questions can be applied.

### Counterparty Screening Gate

Records jurisdiction, provider, and counterparty screening requirements before a proposed cross-border action can be marked ready for execution.

### Professional Review Router

Packages facts, assumptions, and open questions for the right professional: tax adviser, legal counsel, securities specialist, fiduciary professional, banking provider, or other authorized expert.

### Decision Record

Stores the accepted scenario, rejected alternatives, professional opinions, evidence, approval date, assumptions, and re-review date.

## Revenue model

### Structure Review

Fixed-price initial engagement for a single founder, business, or portfolio. Deliverable: jurisdiction map, scenario set, open-question list, and professional-routing plan.

### Atlas Pro

Recurring software subscription for scenario maintenance, assumption tracking, professional-review workflow, source refresh, and decision history.

### Professional Edition

Workspace for tax advisers, law firms, fiduciary providers, and multi-disciplinary advisory teams that want to collaborate with clients using a common structured fact model.

### Enterprise

Multi-portfolio governance, SSO, delegated permissions, private connectors, security review, custom retention, and organization-wide policy controls.

## Acquisition model

### Founder and creator content

Publish educational material on operational questions such as:

- what changes when a founder becomes resident in another country
- how IP ownership interacts with operating companies
- what information a professional needs before reviewing an international structure
- how custody, governance, and counterparties affect a digital-asset treasury review
- why banking and professional availability can invalidate a theoretical structure

### Professional referral channel

Build relationships with tax advisers, business attorneys, securities counsel, fiduciary professionals, accounting firms, banking advisers, and corporate-service providers.

### High-intent structure review

Offer a fixed-scope scenario review that organizes facts and questions before the client is referred into higher-cost professional work.

## Technical architecture

### Application layer

Next.js and TypeScript for the public site and authenticated scenario workspace.

### Data layer

PostgreSQL with row-level security for client, portfolio, asset, jurisdiction, scenario, assumption, review, decision, and evidence data.

### Analysis services

Python/FastAPI workers for:

- source normalization
- jurisdiction metadata
- document extraction
- assumption validation
- scenario scoring
- professional-review routing
- stale-assumption detection

### Workflow services

Redis and queue infrastructure for workflow locks, rate limiting, scheduled source refresh, retries, and re-review notifications.

### Evidence storage

Encrypted object storage for approved professional opinions, source artifacts, and signed records. The main database stores metadata, access policy, and hashes.

## Core schema

- clients
- users
- portfolios
- assets
- jurisdictions
- scenarios
- scenario_nodes
- assumptions
- risk_dimensions
- source_records
- professional_reviews
- decisions
- evidence_artifacts
- re_review_events
- audit_events

Every assumption should include jurisdiction, effective date, source, confidence, owner, status, and re-review date.

## Scenario engine

A scenario is a graph rather than a text recommendation.

Typical nodes:

- individual residence
- parent company
- operating company
- IP owner
- contracting company
- banking relationship
- custody provider
- customer market
- professional adviser

Typical edges:

- owns
- licenses
- provides services to
- receives revenue from
- pays royalties to
- manages
- banks with
- custodies with
- requires professional review from

The engine should compare scenarios on complexity, unresolved questions, professional coverage, governance burden, banking feasibility, custody requirements, reporting dependencies, and execution readiness.

## Professional review model

Professional review is a first-class object, not a comment field.

Each review stores:

- professional category
- jurisdiction
- assigned person or firm
- scope
- source scenario version
- questions submitted
- status
- opinion or decision reference
- effective date
- re-review trigger

The system should never transform a professional review into a broader conclusion than the scope that was actually approved.

## Non-custodial operating boundary

Atlas Assets does not take possession of client money, securities, private keys, or digital assets. It does not execute transfers or exchange assets for clients.

Any future transaction capability would require a separate product, separate legal analysis, separate compliance controls, and potentially separate licensing before launch.

## Security model

- tenant isolation with row-level security
- least-privilege service accounts
- short-lived signed document access
- role-based professional review permissions
- immutable decision and audit events
- server-side secrets only
- idempotent external workflow events
- source timestamps and effective dates visible in the interface
- no wallet credentials or private keys in intake or analytics systems

## Metrics

### Product

- time from intake to first scenario set
- percentage of assumptions with current sources
- professional-review turnaround time
- number of unresolved questions per scenario
- scenario re-review rate after a material fact change
- percentage of accepted structures with complete decision evidence

### Business

- review-to-subscription conversion
- recurring revenue per portfolio
- professional-channel contribution
- enterprise expansion rate
- average number of jurisdictions per customer
- gross margin by professional-routing category

## 2026–2041 roadmap

### 2026–2028 — Scenario-first product

Focus on structured intake, jurisdiction mapping, scenario comparison, and professional review workflows for founders, creator businesses, IP, and digital-asset operations.

### 2029–2032 — Professional network layer

Add specialized professional workspaces, jurisdiction coverage maps, review templates, source versioning, and structured decision records.

### 2033–2036 — Portfolio intelligence

Support multi-business and multi-asset portfolios, organization-wide governance, more sophisticated scenario graphs, private data connectors, and recurring re-review automation.

### 2037–2041 — Cross-border decision infrastructure

Position Atlas Assets as a durable system of record for cross-border structure decisions, assumptions, professional opinions, and re-review obligations across complex entrepreneurial portfolios.
