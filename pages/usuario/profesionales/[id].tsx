'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { PROFESSIONALS } from '../../../lib/data';

// All IDs resolve to the same professional
const PRO = PROFESSIONALS[0];

export default function ProDetail() {
  const [consented, setConsented] = useState(false);
  const [sent, setSent] = useState(false);
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);

  function confirm() {
    setModal(false);
    setSent(true);
    setToast(true);
    setTimeout(()=>setToast(false), 3000);
  }

  return (
    <>
      <Head><title>{PRO.name} — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{flex:1,overflowY:'auto',padding:'8px 22px 84px'}}>
            <Link href="/usuario/profesionales" style={{display:'flex',alignItems:'center',gap:6,fontSize:13,color:'var(--gray)',marginBottom:14,textDecoration:'none'}}>
              ← Profesionales
            </Link>

            {/* Profile card */}
            <div className="card au" style={{marginBottom:12}}>
              <div style={{display:'flex',gap:13,alignItems:'center',marginBottom:14}}>
                <div style={{width:68,height:68,borderRadius:22,background:'linear-gradient(135deg,var(--sage-l),var(--sage))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:30,boxShadow:'0 8px 20px rgba(90,143,107,.4)'}}>{PRO.avatar}</div>
                <div>
                  <h2 style={{fontFamily:'var(--f-serif)',fontSize:20,fontWeight:700,color:'var(--coal)'}}>{PRO.name}</h2>
                  <p style={{fontSize:12.5,color:'var(--gray)'}}>{PRO.spec} · {PRO.region}</p>
                  <div style={{display:'flex',gap:1,marginTop:3}}>
                    {'★★★★★'.split('').map((s,i)=><span key={i} style={{fontSize:12,color:'var(--amber)'}}>{s}</span>)}
                    <span style={{fontSize:11,color:'var(--gray)',marginLeft:4}}>{PRO.rating} </span>
                  </div>
                </div>
              </div>
              <div style={{display:'flex',gap:7,marginBottom:14}}>
                {[['Años exp.',`${PRO.years}`],['Sesiones',`${PRO.sessions}`],['Estado',PRO.available?'Disponible':'No disponible']].map(([l,v])=>(
                  <div key={l} style={{flex:1,background:'var(--cream-d)',borderRadius:11,padding:'9px 7px',textAlign:'center'}}>
                    <p style={{fontSize:10,color:'var(--gray)',fontWeight:700}}>{l}</p>
                    <p style={{fontSize:12.5,fontWeight:700,color:'var(--coal)'}}>{v}</p>
                  </div>
                ))}
              </div>
              <div style={{display:'flex',gap:5,flexWrap:'wrap',marginBottom:14}}>
                {PRO.tags.map(t=><span key={t} className="badge" style={{background:'var(--terra-g)',color:'var(--terra)'}}>{t}</span>)}
              </div>
              <p style={{fontSize:13,color:'var(--gray)',lineHeight:1.65,borderTop:'1px solid var(--line)',paddingTop:12}}>
                Especializada en terapia cognitivo-conductual y mindfulness para adultos. Experiencia en contextos rurales y urbanos del sur del Perú.
              </p>
            </div>

            {/* Consent */}
            {!sent ? (
              <div className="card au1" style={{marginBottom:12}}>
                <h3 style={{fontFamily:'var(--f-serif)',fontSize:16,color:'var(--coal)',marginBottom:8}}>Consentimiento de datos</h3>
                <p style={{fontSize:12.5,color:'var(--gray)',lineHeight:1.65,marginBottom:13}}>
                  Al solicitar una sesión, {PRO.name.split(' ')[1]} podrá ver tu check-in de hoy. Tú tienes el control total y puedes revocar el permiso cuando quieras.
                </p>
                <div onClick={()=>setConsented(!consented)} style={{display:'flex',gap:11,alignItems:'flex-start',cursor:'pointer'}}>
                  <div style={{width:22,height:22,borderRadius:7,flexShrink:0,marginTop:1,background:consented?'var(--sage)':'var(--cream-d)',border:`2px solid ${consented?'var(--sage)':'var(--line)'}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:900,color:'white',transition:'all .2s'}}>
                    {consented ? '✓' : ''}
                  </div>
                  <p style={{fontSize:12.5,color:'var(--coal)',lineHeight:1.5}}>Acepto compartir mi información de salud emocional de hoy con este profesional</p>
                </div>
              </div>
            ) : (
              <div className="au" style={{background:'var(--sage-g)',borderRadius:22,padding:24,textAlign:'center',border:'1.5px solid rgba(90,143,107,.28)',marginBottom:12}}>
                <div style={{fontSize:44,marginBottom:10}}>✅</div>
                <h3 style={{fontFamily:'var(--f-serif)',fontSize:18,color:'var(--coal)',marginBottom:8}}>Solicitud enviada</h3>
                <p style={{fontSize:13,color:'var(--gray)',lineHeight:1.6}}>{PRO.name} recibirá una notificación y te contactará pronto. 💚</p>
              </div>
            )}

            {!sent && (
              <button onClick={()=>consented&&setModal(true)} style={{width:'100%',padding:'15px',border:'none',borderRadius:18,fontSize:15,fontWeight:700,transition:'all .3s',cursor:consented?'pointer':'not-allowed',
                background:consented?'linear-gradient(135deg,var(--terra),var(--terra-l))':'var(--line)',
                color:consented?'white':'var(--gray)',
                boxShadow:consented?'0 8px 24px rgba(196,98,58,.4)':'none',
              }}>
                {PRO.available ? 'Solicitar sesión →' : 'No disponible ahora'}
              </button>
            )}
          </div>

          {/* Modal */}
          {modal && (
            <div className="overlay" onClick={()=>setModal(false)}>
              <div className="mbox" onClick={e=>e.stopPropagation()}>
                <h3>¿Compartir tu check-in?</h3>
                <p>{PRO.name} podrá ver tu resultado de hoy. Solo ella lo verá. Puedes revocar en Ajustes.</p>
                <div className="mbtns">
                  <button className="mbtn mbtn-cancel" onClick={()=>setModal(false)}>Cancelar</button>
                  <button className="mbtn mbtn-ok" onClick={confirm}>Sí, compartir y solicitar</button>
                </div>
              </div>
            </div>
          )}

          {toast && (
            <div className="toast">
              <div className="toast-ico" style={{background:'rgba(62,166,106,.2)',color:'var(--green)'}}>✓</div>
              <span className="toast-msg">Solicitud enviada. Te contactará pronto. 💚</span>
            </div>
          )}

          <div className="bnav">
            {[
              {icon:'⌂',label:'Inicio',    href:'/usuario',               on:false},
              {icon:'◉',label:'Check-in',  href:'/usuario/checkin',       on:false},
              {icon:'≋',label:'Historial', href:'/usuario/historial',     on:false},
              {icon:'✦',label:'Recursos',  href:'/usuario/recursos',      on:false},
              {icon:'👤',label:'Apoyo',     href:'/usuario/profesionales', on:true},
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
