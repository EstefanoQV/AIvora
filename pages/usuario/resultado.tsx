// pages/usuario/resultado.tsx — reemplaza el archivo completo
'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const RECOS = [
  {icon:'📋',title:'Plan de seguimiento médico',    desc:'7 días de indicaciones según tus síntomas.', color:'var(--sage)',  href:'/usuario/recursos'},
  {icon:'💊',title:'Guía de medicamentos sin receta', desc:'Qué tomar y qué evitar para este caso.',    color:'var(--blue)',  href:'/usuario/guia/1'},
  {icon:'👨‍⚕️',title:'Habla con un médico',           desc:'Profesionales disponibles en tu región.',   color:'var(--terra)', href:'/usuario/profesionales'},
];

export default function Resultado() {
  const [confirmed, setConfirmed] = useState<boolean|null>(null);
  const [showRecos, setShowRecos] = useState(false);

  function confirm(v: boolean) {
    setConfirmed(v);
    setTimeout(()=>setShowRecos(true), 600);
  }

  return (
    <>
      <Head><title>Tu orientación médica — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{padding:'4px 22px 14px',position:'relative'}}>
            <div className="blob" style={{width:180,height:180,background:'var(--amber)',top:-40,right:-40}}/>
            <p style={{fontSize:11.5,color:'var(--gray)'}}>Sábado, 5 de abril</p>
            <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)'}}>Tu orientación médica</h2>
          </div>

          <div className="scroll" style={{paddingBottom:80}}>

            {/* Main result card */}
            <div className="card au" style={{marginBottom:16,position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:4,background:'linear-gradient(90deg,var(--amber),var(--amber-l))',borderRadius:'24px 24px 0 0'}}/>
              <div style={{display:'flex',gap:13,alignItems:'center',marginBottom:16,marginTop:4}}>
                <div style={{width:62,height:62,borderRadius:20,background:'rgba(245,166,35,.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:30}}>🤒</div>
                <div>
                  <span className="badge" style={{background:'rgba(245,166,35,.2)',color:'var(--yellow)'}}>CONSULTA PRONTO</span>
                  <h3 style={{fontFamily:'var(--f-serif)',fontSize:21,fontWeight:700,color:'var(--coal)',marginTop:4,lineHeight:1.2}}>
                    Posible infección respiratoria alta
                  </h3>
                </div>
              </div>

              {/* Triage scale */}
              <div style={{display:'flex',gap:7,marginBottom:16}}>
                {([
                  ['✅','Sin urgencia','var(--green)'],
                  ['⏰','Consulta pronto','var(--yellow)'],
                  ['🚨','Urgente','var(--red)'],
                ] as const).map(([e,l,c],i)=>(
                  <div key={l} style={{flex:1,padding:'9px 4px',borderRadius:12,textAlign:'center',background:i===1?'rgba(245,166,35,.18)':'var(--cream-d)',border:`1.5px solid ${i===1?'var(--amber)':'transparent'}`}}>
                    <div style={{fontSize:18}}>{e}</div>
                    <div style={{fontSize:9.5,fontWeight:700,color:i===1?'var(--yellow)':'var(--gray)'}}>{l}</div>
                  </div>
                ))}
              </div>

              <p style={{fontSize:13.5,color:'var(--gray)',lineHeight:1.7,borderTop:'1px solid var(--line)',paddingTop:14}}>
                Los síntomas que describes — fiebre, dolor de cabeza y malestar general de varios días — son compatibles con una infección respiratoria alta. <strong>Te recomendamos consultar con un médico en las próximas 48 horas.</strong>
              </p>

              {/* IA disclaimer */}
              <div style={{background:'var(--amber-g)',borderRadius:12,padding:'10px 12px',marginTop:14,border:'1px solid rgba(245,166,35,.25)'}}>
                <p style={{fontSize:11.5,color:'var(--coal)',lineHeight:1.5}}>
                  🤖 Esta orientación fue generada por IA. No es un diagnóstico médico. Ante dudas, consulta a un profesional.
                </p>
              </div>
            </div>

            {/* Confirm */}
            {!showRecos && (
              <div className="au1">
                <h3 style={{fontFamily:'var(--f-serif)',fontSize:17,fontWeight:600,color:'var(--coal)',marginBottom:13,textAlign:'center'}}>
                  ¿Esta orientación se ajusta a lo que sientes?
                </h3>
                <div style={{display:'flex',gap:10}}>
                  <button onClick={()=>confirm(true)} style={{flex:1,padding:'14px',borderRadius:16,border:'none',background:confirmed===true?'var(--sage)':'var(--white)',color:confirmed===true?'white':'var(--coal)',fontSize:13,fontWeight:700,boxShadow:'0 2px 8px rgba(0,0,0,.06)',transition:'all .2s',cursor:'pointer',fontFamily:'var(--f-sans)'}}>
                    Sí, tiene sentido 👍
                  </button>
                  <button onClick={()=>confirm(false)} style={{flex:1,padding:'14px',borderRadius:16,border:'none',background:confirmed===false?'var(--terra)':'var(--white)',color:confirmed===false?'white':'var(--coal)',fontSize:13,fontWeight:700,boxShadow:'0 2px 8px rgba(0,0,0,.06)',transition:'all .2s',cursor:'pointer',fontFamily:'var(--f-sans)'}}>
                    No del todo 🤔
                  </button>
                </div>
              </div>
            )}

            {/* Recommendations */}
            {showRecos && (
              <div style={{animation:'fadeUp .5s ease'}}>
                <h3 style={{fontFamily:'var(--f-serif)',fontSize:17,fontWeight:600,color:'var(--coal)',marginBottom:13}}>¿Qué hacer ahora? 💡</h3>
                {RECOS.map((r,i)=>{
                  const inner = (
                    <div style={{background:'var(--white)',borderRadius:17,padding:'14px 15px',marginBottom:9,display:'flex',gap:12,alignItems:'center',boxShadow:'0 3px 10px rgba(0,0,0,.05)',border:`1.5px solid ${r.color}28`,cursor:'pointer'}}>
                      <div style={{width:48,height:48,borderRadius:15,background:`${r.color}18`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,flexShrink:0}}>{r.icon}</div>
                      <div style={{flex:1}}>
                        <p style={{fontSize:13.5,fontWeight:700,color:'var(--coal)',marginBottom:2}}>{r.title}</p>
                        <p style={{fontSize:11.5,color:'var(--gray)'}}>{r.desc}</p>
                      </div>
                      <span style={{fontSize:14,color:'var(--gray)'}}>→</span>
                    </div>
                  );
                  return <Link key={i} href={r.href} style={{textDecoration:'none'}}>{inner}</Link>;
                })}
              </div>
            )}
          </div>

          <div className="bnav">
            {[
              {icon:'⌂', label:'Inicio',    href:'/usuario',               on:false},
              {icon:'🩺',label:'Evaluar',   href:'/usuario/checkin',       on:true},
              {icon:'≋', label:'Historial', href:'/usuario/historial',     on:false},
              {icon:'✦', label:'Recursos',  href:'/usuario/recursos',      on:false},
              {icon:'👤',label:'Médicos',   href:'/usuario/profesionales', on:false},
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