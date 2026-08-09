# Atlas Assets — 2026 Regulatory Baseline

This document records product-design assumptions that require continuous professional and source review. It does not provide legal, tax, securities, investment, or transaction advice.

## Digital-asset tax reporting

Current IRS guidance treats digital assets as property for federal tax purposes and requires taxpayers to report taxable digital-asset transactions. The 2026 Form 1099-DA regime includes broker reporting requirements that continue to evolve across proceeds and basis reporting.

### Architecture rule

Digital-asset scenarios must store:

- asset classification,
- acquisition / disposition context,
- custody model,
- broker or provider role,
- source date,
- reporting question status,
- professional review status.

The product should never infer that lack of a tax form means a transaction has no reporting obligation.

## Securities classification

The SEC issued a new interpretive release in March 2026 addressing application of federal securities laws to certain crypto assets and transactions.

### Architecture rule

Do not encode a permanent global label such as `crypto_asset_is_security`.

Store classification as a scoped professional-review object tied to:

- specific asset,
- transaction type,
- offering or distribution facts,
- date,
- jurisdiction,
- source version,
- professional reviewer.

## Sanctions controls

OFAC sanctions requirements can apply to digital-asset activity. The platform must treat sanctions screening as a precondition to any proposed cross-border action involving covered counterparties or jurisdictions.

### Architecture rule

Every scenario involving digital assets or cross-border counterparties should support:

- sanctions-screening status,
- screening provider,
- source timestamp,
- match disposition,
- reviewer,
- re-screen date.

A stale screen is not a valid execution signal.

## Financial-intermediary boundary

FinCEN guidance distinguishes ordinary users of convertible virtual currency from certain administrators and exchangers that may be treated as money transmitters depending on their activities.

### Product boundary

Atlas Assets remains non-custodial and does not:

- receive client digital assets,
- hold private keys,
- exchange assets for clients,
- transmit value on behalf of clients,
- execute asset transfers.

Any future feature that changes this boundary requires separate legal analysis, compliance design, and potentially separate licensing before development proceeds to production.

## Cross-border structure rules

The scenario engine must treat jurisdiction-specific tax, entity, fiduciary, banking, and reporting rules as versioned assumptions rather than universal truths.

Each assumption should carry:

- jurisdiction,
- authority or source,
- effective date,
- confidence,
- professional owner,
- review status,
- re-review trigger.

## Re-review triggers

- residence change,
- management-location change,
- new operating jurisdiction,
- new custody provider,
- new banking provider,
- material digital-asset transaction,
- IP ownership or licensing change,
- professional opinion expiration,
- sanctions-source update,
- securities guidance change,
- tax reporting rule change.

## Front-end language rule

Preferred language:

- scenario,
- assumption,
- review required,
- source current,
- source stale,
- professional gate,
- non-custodial,
- execution not authorized.

Avoid language that presents a simulated structure as approved, tax-optimal, legally complete, or ready for execution until the required professional review exists.
