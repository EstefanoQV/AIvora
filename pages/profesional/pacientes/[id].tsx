import Head from 'next/head';
import Link from 'next/link';
import { PATIENTS } from '@/lib/data';

const P = PATIENTS[0]; // All IDs show same patient

export default function PatientDetail() {
  const trend = P.scores[P.scores.length-1] - P.scores[0];
  const maxScore = 100;
  const chartW = 280;
  const chartH = 90;

  return (
    <>
      <Head><title>{P.name} — AIvora Pro</title></Head>
      <div className="phone-bg">
        <div className="phone phone-sage">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{flex:1,overflowY:'auto',padding:'8px 22px 84px'}}>
            <Link href="/profesional/pacientes" style={{display:'flex',alignItems:'center',gap:5,fontSize:13,color:'var(--gray)',marginBottom:13,textDecoration:'none'}}>
              ← Pacientes
            </Link>

            {/* Patient header */}
            <div className="card au" style={{marginBottom:12}}>
              <div style={{display:'flex',gap:13,alignItems:'center',marginBottom:12}}>
                <div style={{width:58,height:58,borderRadius:18,background:`${P.nivelC}22`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28}}>{P.emoji}</div>
                <div>
                  <h2 style={{fontFamily:'var(--f-serif)',fontSize:20,fontWeight:700,color:'var(--coal)'}}>{P.name}</h2>
                  <p style={{fontSize:12.5,color:'var(--gray)'}}>{P.age} años · {P.region}</p>
                  <div style={{display:'flex',gap:5,marginTop:4}}>
                    <span className="badge" style={{background:`${P.nivelC}18`,color:P.nivelC}}>{P.nivel}</span>
                    {P.consented ? <span className="badge" style={{background:'rgba(90,143,107,.14)',color:'var(--sage-d)'}}>DATOS COMPARTIDOS ✓</span> :
                      <span className="badge" style={{background:'rgba(122,106,99,.12)',color:'var(--gray)'}}>SIN CONSENTIMIENTO</span>}
                  </div>
                </div>
              </div>
              {!P.consented && (
                <div style={{background:'var(--amber-g)',borderRadius:12,padding:'11px 13px',border:'1px solid rgba(245,166,35,.28)'}}>
                  <p style={{fontSize:12,color:'var(--coal)',lineHeight:1.6}}>⚠️ Esta persona no ha compartido su información. Solo ves datos básicos.</p>
                </div>
              )}
            </div>

            {P.consented && (
              <>
                {/* Trend chart - SVG */}
                <div className="card au1" style={{marginBottom:12,padding:'16px'}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                    <h3 style={{fontFamily:'var(--f-serif)',fontSize:15,fontWeight:600,color:'var(--coal)'}}>Tendencia emocional</h3>
                    <span className="badge" style={{background:trend>=0?'rgba(62,166,106,.14)':'rgba(200,75,75,.12)',color:trend>=0?'var(--green)':'var(--red)'}}>
                      {trend>=0?`↗ +${trend}`:` ↘ ${trend}`} pts
                    </span>
                  </div>
                  <svg viewBox={`0 0 ${chartW} ${chartH}`} style={{width:'100%',height:chartH,overflow:'visible'}}>
                    <defs>
                      <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={P.nivelC} stopOpacity=".3"/>
                        <stop offset="100%" stopColor={P.nivelC} stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path
                      d={`M ${P.scores.map((v,i)=>`${i*(chartW/(P.scores.length-1))},${chartH-v*(chartH/maxScore)}`).join(' L ')} L ${chartW},${chartH} L 0,${chartH} Z`}
                      fill="url(#pg)"
                    />
                    <polyline
                      points={P.scores.map((v,i)=>`${i*(chartW/(P.scores.length-1))},${chartH-v*(chartH/maxScore)}`).join(' ')}
                      fill="none" stroke={P.nivelC} strokeWidth="2" strokeLinejoin="round"
                    />
                    {P.scores.map((v,i)=>(
                      <circle key={i} cx={i*(chartW/(P.scores.length-1))} cy={chartH-v*(chartH/maxScore)} r="3" fill={P.nivelC}/>
                    ))}
                  </svg>
                </div>

                {/* Last check-in */}
                <div className="card au2" style={{marginBottom:12,padding:'16px'}}>
                  <h3 style={{fontFamily:'var(--f-serif)',fontSize:15,fontWeight:600,color:'var(--coal)',marginBottom:11}}>Último check-in</h3>
                  {[['Sueño','Me costó dormir'],['Energía','Estoy agotado/a'],['Disfrute','Nada me llama la atención'],['Pensamientos','Me pesan bastante']].map(([l,v])=>(
                    <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid var(--line)'}}>
                      <span style={{fontSize:12,color:'var(--gray)',fontWeight:600}}>{l}</span>
                      <span style={{fontSize:12,color:'var(--coal)'}}>{v}</span>
                    </div>
                  ))}
                </div>

                {/* Notes */}
                <div className="card au3" style={{marginBottom:12,padding:'16px'}}>
                  <h3 style={{fontFamily:'var(--f-serif)',fontSize:15,fontWeight:600,color:'var(--coal)',marginBottom:10}}>Notas clínicas</h3>
                  <textarea placeholder="Observaciones (solo visibles para ti)..." style={{width:'100%',height:80,padding:'10px 12px',borderRadius:11,border:'1.5px solid var(--line)',fontSize:12.5,color:'var(--coal)',background:'var(--cream-d)',resize:'none',fontFamily:'var(--f-sans)'}} />
                  <button style={{width:'100%',marginTop:9,padding:'11px',borderRadius:11,border:'none',background:'rgba(90,143,107,.18)',fontSize:13,fontWeight:700,color:'var(--sage-d)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>Guardar nota</button>
                </div>

                <button style={{width:'100%',padding:'14px',borderRadius:17,border:'none',background:'linear-gradient(135deg,var(--sage-d),var(--sage))',fontSize:14,fontWeight:700,color:'white',boxShadow:'0 8px 22px rgba(90,143,107,.4)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>
                  Agendar sesión
                </button>
              </>
            )}
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
