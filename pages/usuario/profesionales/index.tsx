// ══════════════════════════════════════════════════
// pages/usuario/profesionales/index.tsx
// ══════════════════════════════════════════════════
import Head from 'next/head';
import Link from 'next/link';
import { PROFESSIONALS } from '@/lib/data';

export default function Profesionales() {
  return (
    <>
      <Head><title>Médicos disponibles — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>
          <div style={{padding:'4px 22px 14px',position:'relative'}}>
            <div className="blob" style={{width:170,height:170,background:'var(--terra)',top:-50,right:-50}}/>
            <p style={{fontSize:11.5,color:'var(--gray)'}}>Médicos verificados · Atención online</p>
            <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)'}}>Médicos disponibles</h2>
          </div>
          <div className="scroll" style={{paddingBottom:80}}>
            <div className="filters">
              {['Todos','Disponibles','General','Especialistas'].map((f,i)=>(
                <button key={f} className={`fchip ${i===0?'on':'off'}`}>{f}</button>
              ))}
            </div>
            {PROFESSIONALS.map((p,i)=>(
              <Link key={p.id} href="/usuario/profesionales/1" className={`au${Math.min(i+1,4)}`} style={{display:'flex',background:'var(--white)',borderRadius:20,padding:'15px 15px',marginBottom:10,boxShadow:'0 3px 12px rgba(0,0,0,.06)',gap:12,alignItems:'center',textDecoration:'none'}}>
                <div style={{width:52,height:52,borderRadius:17,background:'linear-gradient(135deg,rgba(168,206,176,.5),rgba(90,143,107,.25))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,flexShrink:0}}>{p.avatar}</div>
                <div style={{flex:1}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                    <p style={{fontSize:14,fontWeight:700,color:'var(--coal)'}}>{p.name}</p>
                    <div style={{width:9,height:9,borderRadius:'50%',marginTop:4,background:p.available?'var(--green)':'var(--line)',boxShadow:p.available?'0 0 0 3px rgba(62,166,106,.2)':'none'}}/>
                  </div>
                  <p style={{fontSize:12,color:'var(--gray)',marginBottom:6}}>{p.spec} · {p.region}</p>
                  <div style={{display:'flex',gap:5,flexWrap:'wrap'}}>
                    {p.tags.map(t=><span key={t} className="badge" style={{background:'var(--terra-g)',color:'var(--terra)'}}>{t}</span>)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="bnav">
            {[
              {icon:'⌂', label:'Inicio',    href:'/usuario',               on:false},
              {icon:'🩺',label:'Evaluar',   href:'/usuario/checkin',       on:false},
              {icon:'≋', label:'Historial', href:'/usuario/historial',     on:false},
              {icon:'✦', label:'Recursos',  href:'/usuario/recursos',      on:false},
              {icon:'👤',label:'Médicos',   href:'/usuario/profesionales', on:true},
            ].map((n,i)=>(
              <Link key={i} href={n.href} className={`bnav-btn ${n.on?'on':''}`}>
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

