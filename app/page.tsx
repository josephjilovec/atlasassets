import Link from 'next/link';
import { layers, controls, scenarios } from '@/lib/brand';

export default function Home(){
  return <main>
    <section className="hero"><div className="map-lines"/><div className="hero-copy"><p className="kicker">CROSS-BORDER STRUCTURING / DIGITAL ASSETS / IP</p><h1>Structure before<br/><em>movement.</em></h1><p>Atlas Assets models how entities, digital assets, intellectual property, tax residence, banking, custody, and jurisdiction rules interact—then prepares a professional-review path before anything is formed or transferred.</p><div className="actions"><Link className="button" href="/simulation">Run structure review</Link><a href="#model">See the model ↓</a></div></div><div className="orbital"><div className="ring one"/><div className="ring two"/><div className="ring three"/><span>GLOBAL<br/>RISK<br/>MODEL</span><i className="node n1"/><i className="node n2"/><i className="node n3"/></div></section>

    <section id="model" className="section"><div className="section-head"><p>01 / STRUCTURE MODEL</p><h2>A map of obligations, dependencies, and professional review points.</h2></div><div className="scenario-grid">{scenarios.map((s)=><article key={s.title}><span>{s.code}</span><h3>{s.title}</h3><p>{s.copy}</p><small>{s.output}</small></article>)}</div></section>

    <section id="layers" className="section dark"><div className="section-head"><p>02 / ANALYSIS LAYERS</p><h2>Every structure is evaluated across multiple systems at once.</h2></div><div className="layer-list">{layers.map((layer,index)=><article key={layer.name}><b>{String(index+1).padStart(2,'0')}</b><div><h3>{layer.name}</h3><p>{layer.description}</p></div><span>{layer.signal}</span></article>)}</div></section>

    <section className="section terminal"><div className="section-head"><p>03 / SCENARIO ENGINE</p><h2>Compare structures before professionals spend time on the wrong one.</h2></div><div className="terminal-frame"><div className="terminal-top"><span>ATLAS / STRUCTURE COMPARISON</span><span>SIMULATION ONLY</span></div><div className="terminal-grid"><div className="metric"><small>STRUCTURE A</small><strong>US IP company + foreign operating subsidiary</strong><span>Tax / treaty / transfer-pricing review required</span></div><div className="metric"><small>STRUCTURE B</small><strong>Foreign parent + US operating subsidiary</strong><span>Securities / tax / banking review required</span></div><div className="metric"><small>DIGITAL ASSETS</small><strong>Non-custodial treasury policy</strong><span>Sanctions / tax / classification review required</span></div><div className="metric"><small>DECISION</small><strong>Professional review gate</strong><span>No automatic formation or movement</span></div></div></div></section>

    <section id="controls" className="section controls"><div className="section-head"><p>04 / CONTROL RULES</p><h2>Global does not mean ungoverned.</h2></div><div className="control-grid">{controls.map((c)=><article key={c.title}><span>{c.code}</span><h3>{c.title}</h3><p>{c.copy}</p></article>)}</div></section>

    <section className="cta"><div><p>05 / PROFESSIONAL ROUTING</p><h2>Build the question set before building the structure.</h2></div><Link className="button" href="/simulation">Start structure review</Link></section>
  </main>;
}
