import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import './performance.css';

export const metadata: Metadata = {
  title: { default: 'Atlas Assets', template: '%s | Atlas Assets' },
  description: 'Cross-border structure simulation and professional coordination for globally distributed companies, intellectual property, and digital-asset operations.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><header><Link className="brand" href="/"><span>Atlas</span><b>Assets</b></Link><nav><Link href="/jurisdictions">Jurisdictions</Link><Link href="/structures">Structures</Link><Link href="/#controls">Controls</Link><Link className="nav-cta" href="/simulation">Run structure review</Link></nav></header>{children}<footer>
<div><strong>Atlas Assets</strong><span>Cross-border structure before cross-border movement.</span></div><p>Scenario modeling and professional coordination only. Legal, tax, securities, fiduciary, banking, and regulated execution remain with qualified professionals.</p><div className="jj-venture-nav" style={{borderTop:'1px solid rgba(255,255,255,.10)',padding:'1rem 1.25rem 1.15rem',textAlign:'center',fontSize:'.78rem',letterSpacing:'.045em'}}><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:700}}>A Joseph Jilovec Venture</a><span aria-hidden="true" style={{color:'#E7C45A',margin:'0 .65rem',opacity:.7}}>•</span><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:800}}>Explore the Venture Studio →</a></div>
</footer></body></html>;
}
