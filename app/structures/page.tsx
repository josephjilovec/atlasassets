import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 1800;

const questions = [
  ['Ownership', 'Who owns the operating company, IP, treasury, and contractual rights—and where are those owners resident?'],
  ['Flow', 'How do royalties, service fees, dividends, payroll, and other related-party flows move between entities?'],
  ['Custody', 'Who controls assets and keys, and does any provider introduce licensing, sanctions, or counterparty exposure?'],
  ['Execution', 'Which steps require counsel, tax professionals, banks, fiduciaries, title providers, or corporate service providers?']
];

export default function StructuresPage(){return <main>
  <section className="subhero structure-hero"><Image src="/media/atlas-08-entity-stack.svg" alt="Multi-jurisdiction entity structure" fill priority unoptimized sizes="100vw"/><div className="subhero-shade"/><div><p className="kicker">ATLAS / STRUCTURES</p><h1>Model the stack before forming the stack.</h1><p>Compare ownership, operating, IP, treasury, banking, and professional-review relationships as a system rather than as isolated entity documents.</p><Link href="/simulation" className="button">Model a structure</Link></div></section>
  <section className="destination-grid reverse deferred-section"><div className="destination-copy"><p className="kicker">STRUCTURE LAYERS</p><h2>Every diagram needs assumptions attached to it.</h2>{questions.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><figure><Image src="/media/atlas-03-ip-blueprint.svg" alt="Cross-border intellectual-property structure" fill unoptimized sizes="55vw"/></figure></section>
  <section className="structure-media deferred-section"><figure><Image src="/media/atlas-04-digital-treasury.svg" alt="Digital treasury structure" fill unoptimized sizes="50vw"/><figcaption>Non-custodial treasury analysis</figcaption></figure><figure><Image src="/media/atlas-07-professional-review.svg" alt="Professional review gate" fill unoptimized sizes="50vw"/><figcaption>Professional execution gate</figcaption></figure></section>
  <section className="cta"><div><p>SCENARIO MODEL</p><h2>Compare the architecture before professionals spend time implementing the wrong one.</h2></div><Link href="/simulation" className="button">Run structure review</Link></section>
</main>}
