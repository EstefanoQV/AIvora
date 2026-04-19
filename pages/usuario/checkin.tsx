// pages/usuario/checkin.tsx — reemplaza el archivo completo
'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CHECKIN_QS } from '@/lib/data';

type Phase = 'intro' | 'analyzing' | 'questions' | 'done';

const ANALYZING_STEPS = [
  'Procesando síntomas con IA...',
  'Comparando con base de datos médica...',
  'Determinando nivel de orientación...',
];

export default function Checkin() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>('intro');
  const [progress, setProgress] = useState(0);
  const [stepLabel, setStepLabel] = useState(ANALYZING_STEPS[0]);
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState<string|null>(null);

  useEffect(() => {
    if (phase !== 'analyzing') return;
    let p = 0;
    const iv = setInterval(() => {
      p += 2; setProgress(p);
      setStepLabel(ANALYZING_STEPS[Math.floor(p/34) % ANALYZING_STEPS.length]);
      if (p >= 100) { clearInterval(iv); setTimeout(() => setPhase('questions'), 400); }
    }, 50);
    return () => clearInterval(iv);
  }, [phase]);

  function answer(opt: string) {
    setSelected(opt);
    setTimeout(() => {
      setSelected(null);
      if (qIdx < CHECKIN_QS.length - 1) setQIdx(qIdx + 1);
      else { setPhase('done'); setTimeout(() => router.push('/usuario/resultado'), 1100); }
    }, 480);
  }

  const q = CHECKIN_QS[qIdx];

  return (
    <>
      <Head><title>Evaluar síntomas — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{flex:1,display:'flex',flexDirection:'column',padding:'8px 22px 22px',position:'relative',overflow:'hidden'}}>
            <div className="blob" style={{width:200,height:200,background:'var(--blue)',top:-60,left:-40}}/>

            <div style={{marginBottom:16,position:'relative',zIndex:1}}>
              <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)',lineHeight:1.2}}>
                {phase==='intro' ? '¿Cómo te sientes hoy?' :
                 phase==='analyzing' ? 'Analizando síntomas...' :
                 phase==='questions' ? 'Cuéntame más' : '¡Listo!'}
              </h2>
              {phase==='questions' && (
                <div style={{display:'flex',gap:5,marginTop:10}}>
                  {CHECKIN_QS.map((_,i)=>(
                    <div key={i} style={{height:4,flex:1,borderRadius:4,background:i<qIdx?'var(--terra)':i===qIdx?'var(--terra-l)':'var(--line)',transition:'background .3s'}}/>
                  ))}
                </div>
              )}
            </div>

            {/* INTRO */}
            {phase==='intro' && (
              <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:18,animation:'fadeUp .5s ease'}}>
                <p style={{fontSize:13.5,color:'var(--gray)',textAlign:'center',lineHeight:1.65}}>
                  Cuéntame qué síntomas tienes y la IA te dará una orientación médica inicial en segundos.
                </p>
                <div style={{width:160,height:160,borderRadius:'50%',background:'linear-gradient(135deg,rgba(74,128,184,.15),rgba(196,98,58,.1))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:72}}>
                  🩺
                </div>
                <div style={{background:'var(--amber-g)',borderRadius:15,padding:'12px 15px',border:'1px solid rgba(245,166,35,.22)',width:'100%'}}>
                  <p style={{fontSize:12.5,color:'var(--coal)',lineHeight:1.6,textAlign:'center'}}>
                    ⚠️ Esta evaluación es orientativa. <strong>No reemplaza a un médico.</strong>
                  </p>
                </div>
                <button onClick={()=>setPhase('analyzing')} style={{width:'100%',padding:'16px',background:'linear-gradient(135deg,var(--terra),var(--terra-l))',border:'none',borderRadius:18,fontSize:15,fontWeight:700,color:'white',boxShadow:'0 10px 28px rgba(196,98,58,.45)',cursor:'pointer',fontFamily:'var(--f-sans)',animation:'bounceY 2s ease-in-out infinite'}}>
                  Comenzar evaluación →
                </button>
              </div>
            )}

            {/* ANALYZING */}
            {phase==='analyzing' && (
              <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:22}}>
                <div style={{fontSize:52,animation:'pulseScale 1.5s ease-in-out infinite'}}>🤖</div>
                <div style={{width:'100%'}}>
                  <div style={{width:'100%',height:8,background:'var(--line)',borderRadius:99,overflow:'hidden',marginBottom:10}}>
                    <div style={{height:'100%',borderRadius:99,background:'linear-gradient(90deg,var(--terra),var(--amber))',width:`${progress}%`,transition:'width .1s linear'}}/>
                  </div>
                  <p style={{fontSize:12,color:'var(--gray)',textAlign:'center'}}>{stepLabel}</p>
                </div>
              </div>
            )}

            {/* QUESTIONS */}
            {phase==='questions' && (
              <div style={{flex:1,animation:'slideR .35s ease'}}>
                <div className="card" style={{marginBottom:18}}>
                  <p style={{fontSize:11,color:'var(--gray)',fontWeight:700,marginBottom:7}}>PREGUNTA {qIdx+1} DE {CHECKIN_QS.length}</p>
                  <h3 style={{fontFamily:'var(--f-serif)',fontSize:19,fontWeight:600,color:'var(--coal)',lineHeight:1.35}}>{q.q}</h3>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:9}}>
                  {q.opts.map((opt,i)=>(
                    <button key={opt} onClick={()=>answer(opt)} style={{
                      width:'100%',padding:'14px 16px',textAlign:'left',borderRadius:15,border:'none',
                      background:selected===opt?'var(--terra)':'var(--white)',
                      color:selected===opt?'white':'var(--coal)',
                      fontSize:13.5,fontWeight:500,display:'flex',alignItems:'center',gap:11,
                      boxShadow:'0 2px 8px rgba(0,0,0,.05)',transition:'all .15s',
                    }}>
                      <span style={{width:26,height:26,borderRadius:'50%',background:selected===opt?'rgba(255,255,255,.25)':'var(--cream-d)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:selected===opt?'white':'var(--gray)',flexShrink:0}}>
                        {String.fromCharCode(65+i)}
                      </span>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* DONE */}
            {phase==='done' && (
              <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',animation:'fadeUp .5s ease'}}>
                <div style={{fontSize:60,marginBottom:16}}>🤖</div>
                <h3 style={{fontFamily:'var(--f-serif)',fontSize:22,color:'var(--coal)',marginBottom:8}}>Análisis completado</h3>
                <p style={{fontSize:13,color:'var(--gray)'}}>Preparando tu orientación médica...</p>
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