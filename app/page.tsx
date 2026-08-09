import Image from 'next/image';
import Link from 'next/link';
import { controls } from '@/lib/brand';

export const revalidate = 1800;

const destinations = [
  { href: '/jurisdictions', label: 'Jurisdictions', copy: 'Compare residence, operations, IP, banking, and professional-review exposure by geography.', image: '/media/atlas-02-jurisdiction-architecture.svg' },
  { href: '/structures', label: 'Structures', copy: 'Model entity, IP, digital-asset, and operating-company relationships before implementation.', image: '/media/atlas-08-entity-stack.svg' },
  { href: '/simulation', label: 'Structure review', copy: 'Turn the current footprint into a professional-review question set.', image: '/media/atlas-07-professional-review.svg' }
];

export default function Home(){
  return <main>
    <section className="hero atlas-hero"><Image className="atlas-hero-bg" src="/media/atlas-01-global-corridors.svg" alt="Global cross-border corridors and jurisdiction routes" fill priority unoptimized sizes="100vw"/><div className="atlas-hero-shade"/><div className="hero-copy"><p className="kicker">CROSS-BORDER STRUCTURING / DIGITAL ASSETS / IP</p><h1>Structure before<br/><em>movement.</em></h1><p>Atlas Assets models how entities, digital assets, intellectual property, tax residence, banking, custody, and jurisdiction rules interact—then prepares a professional-review path before anything is formed or transferred.</p><div className="actions"><Link className="button" href="/simulation">Run structure review</Link><Link href="/jurisdictions">Explore jurisdictions →</Link></div></div><div className="orbit-window"><Image src="/media/atlas-10-orbit-loop.svg" alt="Animated Atlas global structure map" fill unoptimized sizes="(max-width: 900px) 90vw, 38vw"/></div></section>

    <section className="route-deck deferred-section"><div className="route-intro"><p className="kicker">THREE WAYS INTO THE SYSTEM</p><h2>Start with geography, structure, or the decision you need reviewed.</h2></div><div className="route-cards">{destinations.map((item)=><Link href={item.href} className="route-card" key={item.href}><div className="route-media"><Image src={item.image} alt="" fill unoptimized sizes="(max-width: 900px) 100vw, 33vw"/></div><div><span>ATLAS / {item.label.toUpperCase()}</span><h3>{item.label}</h3><p>{item.copy}</p><b>Open →</b></div></Link>)}</div></section>

    <section className="world-feature deferred-section"><Image className="world-photo" src="/media/atlas-09-port-city.svg" alt="Global operating city and cross-border commercial routes" fill unoptimized sizes="100vw"/><div className="world-shade"/><div className="world-copy"><p className="kicker">GLOBAL OPERATING FOOTPRINT</p><h2>The legal structure is only one layer of the real system.</h2><p>Residence, employees, customers, intellectual property, banks, custody providers, counterparties, and tax presence can point in different directions. Atlas makes those dependencies visible before implementation.</p></div><div className="world-map"><Image src="/media/atlas-06-treaty-map.svg" alt="Cross-border treaty and review map" fill unoptimized sizes="35vw"/></div></section>

    <section className="analysis-gallery deferred-section"><div className="section-head"><p>01 / ANALYSIS LENSES</p><h2>Different assets create different cross-border questions.</h2></div><div className="analysis-grid"><figure><Image src="/media/atlas-03-ip-blueprint.svg" alt="Cross-border intellectual-property blueprint" fill unoptimized sizes="50vw"/><figcaption><span>IP</span><strong>Ownership, licensing, related-party flows.</strong></figcaption></figure><figure><Image src="/media/atlas-04-digital-treasury.svg" alt="Non-custodial digital treasury structure" fill unoptimized sizes="50vw"/><figcaption><span>DIGITAL ASSETS</span><strong>Classification, custody, sanctions, tax.</strong></figcaption></figure><figure><Image src="/media/atlas-05-banking-corridor.svg" alt="Cross-border banking corridor" fill unoptimized sizes="50vw"/><figcaption><span>BANKING</span><strong>Counterparties, documentation, jurisdiction fit.</strong></figcaption></figure><figure><Image src="/media/atlas-07-professional-review.svg" alt="Professional review handoff" fill unoptimized sizes="50vw"/><figcaption><span>EXECUTION</span><strong>Professional review before consequential action.</strong></figcaption></figure></div></section>

    <section id="controls" className="section controls deferred-section"><div className="section-head"><p>02 / CONTROL RULES</p><h2>Global does not mean ungoverned.</h2></div><div className="control-grid">{controls.map((c)=><article key={c.title}><span>{c.code}</span><h3>{c.title}</h3><p>{c.copy}</p></article>)}</div></section>

    <section className="cta deferred-section"><div><p>03 / PROFESSIONAL ROUTING</p><h2>Build the question set before building the structure.</h2></div><Link className="button" href="/simulation">Start structure review</Link></section>
  </main>;
}
