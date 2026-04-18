'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { PLAN7, GUIDES } from '@/lib/data';

export default function Recursos() {
  const [completed, setCompleted] = useState(false);
  const [toast, setToast] = useState(false);

  function complete() {
    setCompleted(true);
    setToast(true);
    setTimeout(()=>setToast(false), 3000);
  }

  return (
    <>
      <Head><title>Recursos — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{padding:'4px 22px 14px',position:'relative'}}>
            <div className="blob" style={{width:180,height:180,background:'var(--sage)',top:-50,right:-50}} />
            <p style={{fontSize:11.5,color:'var(--gray)'}}>Tu espacio de herramientas</p>
            <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)'}}>Recursos para ti</h2>
          </div>

          <div className="scroll" style={{paddingBottom:80}}>
            {/* 7-day plan */}
            <div className="au" style={{background:'linear-gradient(135deg,var(--sage-d),var(--sage))',borderRadius:24,padding:20,marginBottom:16,boxShadow:'0 10px 28px rgba(90,143,107,.45)'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:12}}>
                <div>
                  <span className="badge" style={{background:'rgba(255,200,92,.22)',color:'var(--amber-l)'}}>EN PROGRESO</span>
                  <h3 style={{fontFamily:'var(--f-serif)',fontSize:20,fontWeight:700,color:'white',marginTop:6}}>Plan 7 días de autocuidado</h3>
                </div>
                <div style={{textAlign:'right'}}>
                  <span style={{fontFamily:'var(--f-serif)',fontSize:26,fontWeight:700,color:'white'}}>3</span>
                  <span style={{fontSize:13,color:'rgba(255,255,255,.65)'}}>/7</span>
                  <p style={{fontSize:10,color:'rgba(255,255,255,.55)'}}>completados</p>
                </div>
              </div>
              <div style={{height:6,background:'rgba(255,255,255,.2)',borderRadius:99,marginBottom:14}}>
                <div style={{height:'100%',borderRadius:99,width:'43%',background:'var(--amber-l)'}} />
              </div>
              <div style={{display:'flex',gap:5}}>
                {PLAN7.map(p=>(
                  <div key={p.d} style={{flex:1,height:34,borderRadius:9,display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:700,
                    background:p.done?'var(--amber-l)':p.today?'rgba(255,255,255,.25)':'rgba(255,255,255,.1)',
                    border:p.today?'2px solid white':'none',
                    color:p.done?'var(--sage-d)':'white'}}>
                    {p.done ? '✓' : p.d}
                  </div>
                ))}
              </div>
            </div>

            {/* Today task */}
            {PLAN7.filter(p=>p.today).map(p=>(
              <div key={p.d} className="card au1" style={{marginBottom:16,border:'2px solid rgba(90,143,107,.3)'}}>
                <span className="badge" style={{background:'var(--sage-g)',color:'var(--sage-d)'}}>ACTIVIDAD DE HOY · DÍA 3</span>
                <div style={{display:'flex',gap:13,alignItems:'center',marginTop:12}}>
                  <div style={{width:50,height:50,borderRadius:15,background:'var(--sage-g)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,flexShrink:0}}>{p.icon}</div>
                  <div>
                    <h4 style={{fontFamily:'var(--f-serif)',fontSize:17,fontWeight:600,color:'var(--coal)',marginBottom:2}}>{p.title}</h4>
                    <p style={{fontSize:12,color:'var(--gray)'}}>Duración sugerida: {p.min}</p>
                  </div>
                </div>
                <button onClick={complete} disabled={completed} style={{width:'100%',marginTop:14,padding:'13px',borderRadius:14,border:'none',
                  background:completed?'rgba(90,143,107,.3)':'linear-gradient(135deg,var(--sage),var(--sage-l))',
                  fontSize:14,fontWeight:700,color:completed?'var(--sage-d)':'white',
                  boxShadow:completed?'none':'0 6px 18px rgba(90,143,107,.4)',cursor:completed?'default':'pointer',transition:'all .3s'}}>
                  {completed ? 'Completado hoy ✓' : 'Marcar como completado ✓'}
                </button>
              </div>
            ))}

            {/* Guides */}
            <h3 className="au2" style={{fontFamily:'var(--f-serif)',fontSize:17,fontWeight:600,color:'var(--coal)',marginBottom:12}}>
              Guías de psicoeducación
            </h3>
            {GUIDES.map((g,i)=>(
              <Link key={i} href="/usuario/guia/1" className={`au${Math.min(i+2,4)}`} style={{background:'var(--white)',borderRadius:17,padding:'13px 14px',marginBottom:8,display:'flex',gap:12,alignItems:'center',boxShadow:'0 2px 8px rgba(0,0,0,.04)',cursor:'pointer',textDecoration:'none'}}>
                <div style={{width:44,height:44,borderRadius:13,background:'var(--cream-d)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,flexShrink:0}}>{g.icon}</div>
                <div style={{flex:1}}>
                  <div style={{display:'flex',gap:5,marginBottom:3}}>
                    <span className="badge" style={{background:'var(--terra-g)',color:'var(--terra)'}}>{g.cat}</span>
                    {g.offline && <span className="badge" style={{background:'rgba(74,128,184,.12)',color:'var(--blue)'}}>📥 OFFLINE</span>}
                  </div>
                  <p style={{fontSize:13,fontWeight:600,color:'var(--coal)'}}>{g.title}</p>
                  <p style={{fontSize:11,color:'var(--gray)'}}>{g.pages}</p>
                </div>
                <span style={{fontSize:16,color:'var(--gray)'}}>→</span>
              </Link>
            ))}
          </div>

          {toast && (
            <div className="toast">
              <div className="toast-ico" style={{background:'rgba(62,166,106,.2)',color:'var(--green)'}}>✓</div>
              <span className="toast-msg">¡Actividad completada! Excelente trabajo hoy. 🎉</span>
            </div>
          )}

          <div className="bnav">
            {[
              {icon:'⌂',label:'Inicio',    href:'/usuario',               on:false},
              {icon:'◉',label:'Check-in',  href:'/usuario/checkin',       on:false},
              {icon:'≋',label:'Historial', href:'/usuario/historial',     on:false},
              {icon:'✦',label:'Recursos',  href:'/usuario/recursos',      on:true},
              {icon:'👤',label:'Apoyo',     href:'/usuario/profesionales', on:false},
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