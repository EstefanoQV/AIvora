import Head from 'next/head';
import Link from 'next/link';
import { PATIENTS } from '@/lib/data';

export default function Pacientes() {
  return (
    <>
      <Head><title>Mis pacientes — AIvora Pro</title></Head>
      <div className="phone-bg">
        <div className="phone phone-sage">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{padding:'4px 22px 14px'}}>
            <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)'}}>Mis pacientes</h2>
            <p style={{fontSize:12.5,color:'var(--gray)'}}>{PATIENTS.length} pacientes · 1 requiere atención</p>
          </div>

          <div className="scroll" style={{paddingBottom:80}}>
            <div className="filters">
              {['Todos','Urgentes','Moderados','Estables'].map((f,i)=>(
                <button key={f} className={`fchip ${i===0?'on-sage':'off'}`}>{f}</button>
              ))}
            </div>
            {PATIENTS.map((p,i)=>(
              // All patients redirect to /pacientes/1 (same detail for all)
              <Link key={p.id} href="/profesional/pacientes/1" className={`au${Math.min(i+1,4)}`} style={{
                display:'flex',background:'var(--white)',borderRadius:19,padding:'14px 15px',
                marginBottom:9,boxShadow:'0 3px 10px rgba(0,0,0,.06)',
                gap:12,alignItems:'center',textDecoration:'none',
                borderLeft:`4px solid ${p.nivelC}`,
              }}>
                <div style={{width:46,height:46,borderRadius:14,background:`${p.nivelC}18`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,flexShrink:0}}>{p.emoji}</div>
                <div style={{flex:1}}>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                    <p style={{fontSize:14,fontWeight:700,color:'var(--coal)'}}>{p.name}</p>
                    <span style={{fontSize:11,color:'var(--gray)'}}>{p.date}</span>
                  </div>
                  <p style={{fontSize:12,color:'var(--gray)',marginBottom:5}}>{p.age} años · {p.region}</p>
                  <div style={{display:'flex',gap:5}}>
                    <span className="badge" style={{background:`${p.nivelC}18`,color:p.nivelC}}>{p.nivel}</span>
                    {!p.consented && <span className="badge" style={{background:'rgba(122,106,99,.12)',color:'var(--gray)'}}>Sin consentimiento</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bnav">
            {[
              {icon:'⌂',label:'Inicio',    href:'/profesional/dashboard', on:false},
              {icon:'👥',label:'Pacientes', href:'/profesional/pacientes', on:true},
              {icon:'👤',label:'Perfil',    href:'/profesional/perfil',    on:false},
            ].map((n,i)=>(
              <Link key={i} href={n.href} className={`bnav-btn ${n.on?'on-sage':''}`}>
                <div className="bnav-ico"><span>{n.icon}</span></div>
                <span className="bnav-lbl">{n.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
