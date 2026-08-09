# Atlas Assets

Atlas Assets is a cross-border structure simulation and professional-coordination system for globally distributed founders, companies, intellectual property, and digital-asset operations.

The brand name is locked. Alternate naming work is intentionally omitted.

## Positioning

**Hook:** Structure before movement.

The product organizes the questions that should be answered before cross-border formation, ownership, custody, banking, or asset-transfer decisions are made.

**Ideal client:** globally mobile founders, creator businesses, remote-first companies, IP-heavy businesses, and digital-asset operators with multi-jurisdictional operating complexity.

## Visual system

**Direction:** Neo-Sovereign Cartographic Terminal.

- Midnight `#07131F`
- Deep navy `#0B1D2C`
- Ivory `#F4F0E8`
- Copper `#C98B59`
- Glacier `#9EE7F5`
- Jade `#66E3B4`

## Core product

- Jurisdiction Lattice: maps residence, entity, management, customer-market, banking, custody, and reporting dependencies.
- Structure Simulator: compares candidate operating and ownership structures across multiple risk dimensions.
- Asset Classification Layer: separates operating companies, IP, creator income, digital assets, and mixed portfolios.
- Counterparty Screening Gate: requires jurisdiction and counterparty review before a proposed cross-border action is treated as executable.
- Professional Review Router: prepares a question set and evidence packet for qualified professionals.
- Decision Record: stores assumptions, source dates, approvals, and superseded scenarios.

## Technical architecture

- Next.js App Router + TypeScript.
- PostgreSQL with row-level security for client, portfolio, jurisdiction, scenario, assumption, review, and decision data.
- Python/FastAPI workers for source normalization, classification, document extraction, and scenario scoring.
- Redis for workflow locks, rate limiting, and short-lived state.
- Encrypted object storage for approved evidence artifacts.
- Queue infrastructure for source refresh and stale-assumption detection.

Core schema:

`Client → Portfolio → Asset → Jurisdiction → StructureScenario → Assumption → RiskDimension → ProfessionalReview → Decision → EvidenceArtifact → AuditEvent`

## Operating boundary

Atlas Assets is non-custodial. It does not take possession of client funds, private keys, securities, or digital assets, and it does not execute transfers. Legal, tax, securities, fiduciary, banking, and jurisdiction-specific conclusions require qualified professionals.

## Deployment

1. `npm install`
2. `npm run typecheck`
3. `npm run build`
4. Configure `ATLAS_REVIEW_ROUTER_URL` and `ATLAS_REVIEW_ROUTER_TOKEN` server-side.
5. Deploy the Next.js application.

The review endpoint intentionally refuses production submissions until secure professional routing is configured.
