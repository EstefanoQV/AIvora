// ══════════════════════════════════════════════════
// pages/profesional/pacientes/[id].tsx
// ══════════════════════════════════════════════════
import Head from 'next/head';
import Link from 'next/link';
import { PATIENTS } from '@/lib/data';

const P = PATIENTS[0];

export default function PatientDetail() {
  return (
    <>
      <Head><title>{P.name} — AIvora Médico</title></Head>
      <div className="phone-bg">
        <div className="phone phone-sage">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>
          <div style={{flex:1,overflowY:'auto',padding:'8px 22px 84px'}}>
            <Link href="/profesional/pacientes" style={{display:'flex',alignItems:'center',gap:5,fontSize:13,color:'var(--gray)',marginBottom:13,textDecoration:'none'}}>← Pacientes</Link>

            <div className="card au" style={{marginBottom:12}}>
              <div style={{display:'flex',gap:13,alignItems:'flex-start',marginBottom:12}}>
                <div style={{width:58,height:58,borderRadius:18,background:`${P.nivelC}22`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28}}>{P.emoji}</div>
                <div>
                  <h2 style={{fontFamily:'var(--f-serif)',fontSize:20,fontWeight:700,color:'var(--coal)'}}>{P.name}</h2>
                  <p style={{fontSize:12.5,color:'var(--gray)'}}>{P.age} años · {P.region}</p>
                  <div style={{display:'flex',gap:5,marginTop:4,flexWrap:'wrap'}}>
                    <span className="badge" style={{background:`${P.nivelC}18`,color:P.nivelC}}>{P.nivel}</span>
                    {P.consented
                      ? <span className="badge" style={{background:'rgba(90,143,107,.14)',color:'var(--sage-d)'}}>DATOS COMPARTIDOS ✓</span>
                      : <span className="badge" style={{background:'rgba(122,106,99,.12)',color:'var(--gray)'}}>SIN CONSENTIMIENTO</span>}
                  </div>
                </div>
              </div>
              <div style={{background:'var(--cream-d)',borderRadius:14,padding:'11px 13px'}}>
                <p style={{fontSize:11.5,color:'var(--gray)',fontWeight:700,marginBottom:3}}>MOTIVO DE CONSULTA</p>
                <p style={{fontSize:13.5,color:'var(--coal)'}}>{P.sintoma}</p>
              </div>
            </div>

            {P.consented && (
              <>
                <div className="card au1" style={{marginBottom:12,padding:'16px'}}>
                  <h3 style={{fontFamily:'var(--f-serif)',fontSize:15,fontWeight:600,color:'var(--coal)',marginBottom:11}}>Respuestas del cuestionario IA</h3>
                  {[
                    ['Síntoma principal','Dolor de cabeza y fiebre'],
                    ['Duración','2 a 3 días'],
                    ['Intensidad','Moderada, le cuesta actividades'],
                    ['Síntomas adicionales','Fiebre alta (38.8°C)'],
                  ].map(([l,v])=>(
                    <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid var(--line)'}}>
                      <span style={{fontSize:12,color:'var(--gray)',fontWeight:600}}>{l}</span>
                      <span style={{fontSize:12,color:'var(--coal)',maxWidth:'55%',textAlign:'right'}}>{v}</span>
                    </div>
                  ))}
                </div>

                <div className="card au2" style={{marginBottom:12,padding:'16px'}}>
                  <h3 style={{fontFamily:'var(--f-serif)',fontSize:15,fontWeight:600,color:'var(--coal)',marginBottom:10}}>Orientación generada por IA</h3>
                  <div style={{background:'rgba(245,166,35,.12)',borderRadius:12,padding:'11px 13px',border:'1px solid rgba(245,166,35,.28)'}}>
                    <span className="badge" style={{background:'rgba(245,166,35,.2)',color:'var(--yellow)',marginBottom:6,display:'inline-flex'}}>CONSULTA PRONTO</span>
                    <p style={{fontSize:13,color:'var(--coal)',lineHeight:1.6,marginTop:6}}>
                      Compatible con infección respiratoria alta. Se recomienda evaluación médica en 24-48h.
                    </p>
                  </div>
                </div>

                <div className="card au3" style={{marginBottom:12,padding:'16px'}}>
                  <h3 style={{fontFamily:'var(--f-serif)',fontSize:15,fontWeight:600,color:'var(--coal)',marginBottom:10}}>Notas clínicas</h3>
                  <textarea placeholder="Escribe tu evaluación clínica (solo visible para ti)..." style={{width:'100%',height:80,padding:'10px 12px',borderRadius:11,border:'1.5px solid var(--line)',fontSize:12.5,color:'var(--coal)',background:'var(--cream-d)',resize:'none',fontFamily:'var(--f-sans)'}}/>
                  <button style={{width:'100%',marginTop:9,padding:'11px',borderRadius:11,border:'none',background:'rgba(90,143,107,.18)',fontSize:13,fontWeight:700,color:'var(--sage-d)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>Guardar nota</button>
                </div>
                <button style={{width:'100%',padding:'14px',borderRadius:17,border:'none',background:'linear-gradient(135deg,var(--sage-d),var(--sage))',fontSize:14,fontWeight:700,color:'white',boxShadow:'0 8px 22px rgba(90,143,107,.4)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>
                  Agendar consulta
                </button>
              </>
            )}
          </div>
          <div className="bnav">
            {[
              {icon:'⌂', label:'Inicio',    href:'/profesional/dashboard', on:false},
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