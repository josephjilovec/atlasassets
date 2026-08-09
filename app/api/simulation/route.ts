import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 10;

const assetTypes=new Set(['Operating business','Intellectual property','Digital assets','Mixed portfolio','Creator / royalty income']);

export async function POST(request:Request){
  const body=await request.json().catch(()=>null) as Record<string,unknown>|null;
  if(!body) return NextResponse.json({error:'Invalid request.'},{status:400});
  const record={name:String(body.name||'').trim(),email:String(body.email||'').trim(),residence:String(body.residence||'').trim(),footprint:String(body.footprint||'').trim(),assetType:String(body.assetType||''),objective:String(body.objective||'').trim(),lawfulPurpose:String(body.lawfulPurpose||'')};
  if(!record.name||!record.email.includes('@')||!record.residence||record.footprint.length<5||!assetTypes.has(record.assetType)||record.objective.length<10||record.lawfulPurpose!=='yes') return NextResponse.json({error:'Please complete the required fields and scope attestation.'},{status:422});
  const endpoint=process.env.ATLAS_REVIEW_ROUTER_URL;
  const token=process.env.ATLAS_REVIEW_ROUTER_TOKEN;
  if(!endpoint||!token) return NextResponse.json({error:'Professional review routing is not configured yet.'},{status:503});
  const upstream=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${token}`},body:JSON.stringify({...record,lawfulPurpose:true,source:'atlas-assets'}),cache:'no-store',signal:AbortSignal.timeout(8000)});
  if(!upstream.ok) return NextResponse.json({error:'Secure routing is temporarily unavailable.'},{status:502});
  return NextResponse.json({ok:true},{status:202});
}
