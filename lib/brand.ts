export const scenarios=[
  {code:'A1',title:'Founder + operating companies',copy:'Model residence, company formation, customer markets, payroll, banking, and professional-service dependencies before adding complexity.',output:'OUTPUT / jurisdiction dependency map'},
  {code:'A2',title:'International IP',copy:'Map ownership, licensing, development location, related-party flows, and professional review points without assuming a preferred jurisdiction.',output:'OUTPUT / IP structure questions'},
  {code:'A3',title:'Digital-asset treasury',copy:'Model custody, counterparties, reporting, sanctions screening, asset classification, and governance before movement.',output:'OUTPUT / compliance route'},
  {code:'A4',title:'Creator income + global clients',copy:'Map residence, income sources, contracting entities, payment rails, royalties, and cross-border professional needs.',output:'OUTPUT / operating structure map'}
] as const;

export const layers=[
  {name:'Tax residence & reporting',description:'Identify residence, entity classification, reporting touchpoints, and questions that require qualified tax professionals.',signal:'TAX / REVIEW'},
  {name:'Entity & governance',description:'Compare ownership chains, control rights, management location, corporate maintenance, and disclosure requirements.',signal:'GOV / MODEL'},
  {name:'Securities & digital assets',description:'Flag asset and transaction facts that may change regulatory treatment or require specialist analysis.',signal:'SEC / CLASSIFY'},
  {name:'Sanctions & counterparties',description:'Require jurisdiction and counterparty screening before any proposed cross-border movement is presented as executable.',signal:'OFAC / SCREEN'},
  {name:'Banking & custody',description:'Model account ownership, custody, signatory authority, transfer controls, and provider eligibility without holding client assets.',signal:'CUSTODY / NON-CUSTODIAL'},
  {name:'IP & commercial flows',description:'Map licenses, royalties, service agreements, development activity, and related-party dependencies for professional review.',signal:'IP / TRACE'}
] as const;

export const controls=[
  {code:'C1',title:'No custody',copy:'Atlas Assets does not take possession of client money, private keys, securities, or digital assets.'},
  {code:'C2',title:'No automatic formation',copy:'Entity, trust, fiduciary, and regulated structures are not created solely from software output.'},
  {code:'C3',title:'Professional gates',copy:'Legal, tax, securities, fiduciary, banking, and jurisdiction-specific conclusions route to qualified professionals.'},
  {code:'C4',title:'Evidence before action',copy:'Assumptions, source dates, approvals, and professional review states are recorded before a scenario becomes executable.'}
] as const;
