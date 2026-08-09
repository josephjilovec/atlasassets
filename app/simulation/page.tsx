'use client';

import { FormEvent, useState } from 'react';

export default function SimulationPage(){
  const [status,setStatus]=useState('');
  const [busy,setBusy]=useState(false);
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault(); setBusy(true); setStatus('');
    const form=event.currentTarget;
    const payload=Object.fromEntries(new FormData(form).entries());
    try{
      const response=await fetch('/api/simulation',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
      const result=await response.json();
      if(!response.ok) throw new Error(result.error||'Request failed');
      form.reset(); setStatus('Review request received. Sensitive financial, identity, or wallet information should only be shared later through an approved secure professional channel.');
    }catch(error){setStatus(error instanceof Error?error.message:'Unable to submit request.');}
    finally{setBusy(false);}
  }
  return <main className="simulation"><section><p className="kicker">STRUCTURE REVIEW</p><h1>Map the facts.<br/><em>Then model the options.</em></h1><p>This first step collects only high-level facts. Do not submit wallet keys, account numbers, tax IDs, passport data, privileged legal material, or exact private asset balances.</p></section><form onSubmit={submit}><label>Name<input name="name" required maxLength={120}/></label><label>Work email<input name="email" type="email" required maxLength={160}/></label><label>Primary residence / tax jurisdiction<input name="residence" required maxLength={120}/></label><label>Business footprint<input name="footprint" required maxLength={300} placeholder="Example: US company, EU clients, remote contractors"/></label><label>Primary asset type<select name="assetType" required defaultValue=""><option value="" disabled>Select one</option><option>Operating business</option><option>Intellectual property</option><option>Digital assets</option><option>Mixed portfolio</option><option>Creator / royalty income</option></select></label><label>Objective<textarea name="objective" rows={6} required maxLength={1800} placeholder="Describe the commercial objective and operating facts."/></label><label className="check"><input type="checkbox" name="lawfulPurpose" value="yes" required/><span>I understand that Atlas Assets provides scenario modeling and professional coordination, not legal, tax, investment, or transaction execution.</span></label><button className="button" disabled={busy}>{busy?'Sending…':'Request structure review'}</button><p className="status" role="status">{status}</p></form></main>;
}
