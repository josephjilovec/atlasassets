import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 1800;

const lenses = [
  ['Residence', 'Where founders, executives, and beneficial owners are personally resident can change tax and reporting questions.'],
  ['Operations', 'Employees, offices, contractors, customers, and local activity can create obligations independent of entity formation.'],
  ['Banking', 'Account location, payment rails, counterparties, and onboarding standards can constrain otherwise elegant structures.'],
  ['Professional review', 'Local counsel, tax, banking, securities, fiduciary, and sanctions review remain jurisdiction-specific.']
];

export default function JurisdictionsPage(){return <main>
  <section className="subhero jurisdiction-hero"><Image src="/media/atlas-02-jurisdiction-architecture.svg" alt="Institutional jurisdiction architecture" fill priority unoptimized sizes="100vw"/><div className="subhero-shade"/><div><p className="kicker">ATLAS / JURISDICTIONS</p><h1>Geography is not a dropdown.</h1><p>Atlas compares where people, companies, intellectual property, banking relationships, and operational activity actually sit before anyone recommends a structure.</p><Link href="/simulation" className="button">Run structure review</Link></div></section>
  <section className="destination-grid deferred-section"><figure><Image src="/media/atlas-06-treaty-map.svg" alt="Jurisdiction and treaty corridor map" fill unoptimized sizes="55vw"/></figure><div className="destination-copy"><p className="kicker">JURISDICTION LATTICE</p><h2>Map relationships before comparing entities.</h2>{lenses.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
  <section className="jurisdiction-media deferred-section"><figure><Image src="/media/atlas-05-banking-corridor.svg" alt="Banking and counterparty corridor" fill unoptimized sizes="50vw"/><figcaption>Banking & counterparties</figcaption></figure><figure><Image src="/media/atlas-09-port-city.svg" alt="International operating footprint" fill unoptimized sizes="50vw"/><figcaption>Operating footprint</figcaption></figure></section>
  <section className="cta"><div><p>PROFESSIONAL REVIEW</p><h2>Use Atlas to define the questions—then route them to the right jurisdiction-specific professional.</h2></div><Link href="/simulation" className="button">Start review</Link></section>
</main>}
