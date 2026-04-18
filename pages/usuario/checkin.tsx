'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CHECKIN_QS } from '../../lib/data';

type Phase = 'camera' | 'analyzing' | 'questions' | 'done';

export default function Checkin() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>('camera');
  const [progress, setProgress] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState<string|null>(null);

  useEffect(() => {
    if (phase !== 'analyzing') return;
    let p = 0;
    const iv = setInterval(() => {
      p += 2; setProgress(p);
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
      <Head><title>Check-in — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{flex:1,display:'flex',flexDirection:'column',padding:'8px 22px 22px',position:'relative',overflow:'hidden'}}>
            <div className="blob" style={{width:200,height:200,background:'var(--sage)',top:-60,left:-40}} />

            <div style={{marginBottom:16,position:'relative',zIndex:1}}>
              <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)',lineHeight:1.2}}>
                {phase==='camera' ? 'Tomémonos un momento' :
                 phase==='analyzing' ? 'Analizando tu foto...' :
                 phase==='questions' ? 'Cuéntame más' : '¡Listo!'}
              </h2>
              {phase==='questions' && (
                <div style={{display:'flex',gap:5,marginTop:10}}>
                  {CHECKIN_QS.map((_,i)=>(
                    <div key={i} style={{height:4,flex:1,borderRadius:4,background:i<qIdx?'var(--terra)':i===qIdx?'var(--terra-l)':'var(--line)',transition:'background .3s'}} />
                  ))}
                </div>
              )}
            </div>

            {/* CAMERA */}
            {phase==='camera' && (
              <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:16,animation:'fadeUp .5s ease'}}>
                <p style={{fontSize:13.5,color:'var(--gray)',textAlign:'center',lineHeight:1.65}}>
                  Tómate una selfie con tu cara natural de ahora mismo. Sin filtros, sin forzar nada.
                </p>
                <div style={{position:'relative',width:186,height:186,display:'flex',alignItems:'center',justifyContent:'center'}}>
                  {[186,150,114].map((sz,i)=>(
                    <div key={i} style={{position:'absolute',borderRadius:'50%',border:'1.5px solid var(--terra)',width:sz,height:sz,animation:`ringPulse 2s ease-in-out ${i*.4}s infinite`,opacity:.2}} />
                  ))}
                  <div style={{width:108,height:108,borderRadius:'50%',background:'linear-gradient(135deg,var(--cream-d),var(--line))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:46}}>👤</div>
                </div>
                <div style={{background:'var(--sage-g)',borderRadius:15,padding:'11px 15px',border:'1px solid rgba(90,143,107,.22)',width:'100%',textAlign:'center'}}>
                  <p style={{fontSize:12.5,color:'var(--coal)',lineHeight:1.6}}>💚 La foto se procesa en la nube y se elimina inmediatamente.</p>
                </div>
                <button onClick={()=>setPhase('analyzing')} style={{width:74,height:74,borderRadius:'50%',background:'linear-gradient(135deg,var(--terra),var(--amber))',border:'5px solid white',fontSize:30,boxShadow:'0 12px 32px rgba(196,98,58,.5)',animation:'bounceY 2s ease-in-out infinite'}}>📷</button>
              </div>
            )}

            {/* ANALYZING */}
            {phase==='analyzing' && (
              <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:22}}>
                <div style={{display:'flex',gap:5,alignItems:'center',height:36}}>
                  {[0,1,2,3,4].map(i=><div key={i} style={{width:5,borderRadius:3,height:4,background:'var(--terra)',animation:`waveBars .8s ease-in-out ${i*.12}s infinite`}} />)}
                </div>
                <div style={{width:'100%'}}>
                  <div style={{width:'100%',height:8,background:'var(--line)',borderRadius:99,overflow:'hidden',marginBottom:10}}>
                    <div style={{height:'100%',borderRadius:99,background:'linear-gradient(90deg,var(--terra),var(--amber))',width:`${progress}%`,transition:'width .1s linear'}} />
                  </div>
                  <p style={{fontSize:12,color:'var(--gray)',textAlign:'center'}}>
                    {progress < 50 ? 'Comparando con tu foto base...' : 'Detectando señales emocionales...'}
                  </p>
                </div>
                <p style={{fontSize:13,color:'var(--gray)',textAlign:'center',lineHeight:1.6}}>
                  Solo unos segundos ✨<br/><span style={{fontSize:11}}>Tu foto se borrará al terminar</span>
                </p>
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
                      background: selected===opt ? 'var(--terra)' : 'var(--white)',
                      color: selected===opt ? 'white' : 'var(--coal)',
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
                <div style={{fontSize:60,marginBottom:16,animation:'bounceY 1s ease'}}>✨</div>
                <h3 style={{fontFamily:'var(--f-serif)',fontSize:22,color:'var(--coal)',marginBottom:8}}>¡Gracias por contarme!</h3>
                <p style={{fontSize:13,color:'var(--gray)'}}>Preparando tu resultado...</p>
              </div>
            )}
          </div>

          <div className="bnav">
            {[
              {icon:'⌂',label:'Inicio',    href:'/usuario',               on:false},
              {icon:'◉',label:'Check-in',  href:'/usuario/checkin',       on:true},
              {icon:'≋',label:'Historial', href:'/usuario/historial',     on:false},
              {icon:'✦',label:'Recursos',  href:'/usuario/recursos',      on:false},
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
