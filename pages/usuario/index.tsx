// pages/usuario/index.tsx — reemplaza el archivo completo
import Head from 'next/head';
import Link from 'next/link';
import { WEEK_BARS } from '@/lib/data';

const TIPS = [
  {icon:'💧', label:'Hidratación: 8 vasos de agua hoy',    min:'Todo el día'},
  {icon:'🌡️', label:'Registra tu temperatura si tienes fiebre', min:'2 min'},
  {icon:'😴', label:'7-9 horas de sueño para recuperarte',  min:'Consejo'},
];

export default function UsuarioHome() {
  return (
    <>
      <Head><title>Inicio — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{padding:'4px 22px 14px',position:'relative'}}>
            <div className="blob" style={{width:180,height:180,background:'var(--terra)',top:-40,right:-50}}/>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <p style={{fontSize:11.5,color:'var(--gray)'}}>Sábado, 5 de abril ☀️</p>
                <h2 style={{fontFamily:'var(--f-serif)',fontSize:26,fontWeight:700,color:'var(--coal)',lineHeight:1.2}}>
                  Hola, María 👋
                </h2>
              </div>
              <Link href="/usuario/perfil" style={{position:'relative',textDecoration:'none'}}>
                <div style={{width:44,height:44,borderRadius:14,background:'linear-gradient(135deg,var(--terra),var(--amber))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:700,color:'white',boxShadow:'0 4px 12px rgba(196,98,58,.4)'}}>M</div>
              </Link>
            </div>
          </div>

          <div className="scroll" style={{paddingBottom:80}}>
            {/* CTA principal */}
            <Link href="/usuario/checkin" className="au" style={{
              display:'block',background:'linear-gradient(135deg,var(--terra),var(--terra-l))',
              borderRadius:24,padding:'20px 22px',marginBottom:16,
              position:'relative',overflow:'hidden',
              boxShadow:'0 12px 32px rgba(196,98,58,.4)',textDecoration:'none',
            }}>
              <div className="blob" style={{width:180,height:180,background:'white',top:-50,right:-50,opacity:.06}}/>
              <p style={{fontSize:11,color:'rgba(255,255,255,.7)',fontWeight:700,letterSpacing:'.06em',marginBottom:5}}>
                EVALUACIÓN CON IA
              </p>
              <h3 style={{fontFamily:'var(--f-serif)',fontSize:21,fontWeight:700,color:'white',lineHeight:1.2,marginBottom:4}}>
                ¿Qué síntomas tienes hoy?
              </h3>
              <p style={{fontSize:12.5,color:'rgba(255,255,255,.75)',marginBottom:14}}>
                La IA analiza tus síntomas y te orienta en minutos.
              </p>
              <div style={{display:'inline-flex',alignItems:'center',gap:7,background:'rgba(255,255,255,.2)',borderRadius:20,padding:'8px 16px'}}>
                <span>🩺</span><span style={{fontSize:13,fontWeight:700,color:'white'}}>Evaluar síntomas</span>
              </div>
            </Link>

            {/* Aviso IA */}
            <div className="au1" style={{background:'var(--amber-g)',borderRadius:14,padding:'10px 14px',border:'1px solid rgba(245,166,35,.3)',display:'flex',gap:10,alignItems:'center',marginBottom:16}}>
              <span style={{fontSize:16}}>⚠️</span>
              <p style={{fontSize:11.5,color:'var(--coal)',lineHeight:1.5}}>
                AIvora<strong> orienta, no diagnostica.</strong> Ante emergencias llama al <strong>106</strong> (SAMU).
              </p>
            </div>

            {/* Historial semana */}
            <div className="card au2" style={{marginBottom:16}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:13}}>
                <h3 style={{fontFamily:'var(--f-serif)',fontSize:17,fontWeight:600,color:'var(--coal)'}}>Consultas esta semana</h3>
                <Link href="/usuario/historial" style={{fontSize:11,color:'var(--terra)',fontWeight:700}}>Ver historial →</Link>
              </div>
              <div style={{display:'flex',gap:6,alignItems:'flex-end',height:72}}>
                {WEEK_BARS.map((b,i)=>(
                  <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:3}}>
                    <span style={{fontSize:13}}>{b.e}</span>
                    <div style={{width:'100%',height:56,borderRadius:8,background:'var(--cream-d)',overflow:'hidden',position:'relative'}}>
                      {b.v ? <div style={{position:'absolute',bottom:0,left:0,right:0,
                        height:`${b.v > 1 ? 80 : 45}%`,borderRadius:8,
                        background:b.v > 1 ? 'var(--terra)' : 'var(--amber)'}}/> :
                        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,color:'var(--gray)',fontWeight:600}}>{b.v===null?'HOY':''}</div>}
                    </div>
                    <span style={{fontSize:9.5,color:'var(--gray)',fontWeight:700}}>{b.d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan activo */}
            <Link href="/usuario/recursos" className="au3" style={{display:'flex',background:'rgba(90,143,107,.12)',borderRadius:20,padding:'15px 17px',marginBottom:16,cursor:'pointer',border:'1.5px solid rgba(90,143,107,.28)',gap:13,alignItems:'center',textDecoration:'none'}}>
              <div style={{width:48,height:48,borderRadius:15,background:'rgba(90,143,107,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,flexShrink:0}}>📋</div>
              <div style={{flex:1}}>
                <p style={{fontSize:11,fontWeight:700,color:'var(--sage-d)',letterSpacing:'.05em'}}>PLAN ACTIVO · DÍA 3/7</p>
                <p style={{fontSize:14,fontWeight:600,color:'var(--coal)'}}>Plan de seguimiento médico</p>
              </div>
              <span style={{fontSize:16,color:'var(--gray)'}}>→</span>
            </Link>

            {/* Tips */}
            <h3 className="au4" style={{fontFamily:'var(--f-serif)',fontSize:17,fontWeight:600,color:'var(--coal)',marginBottom:12}}>
              Para tu salud hoy 🌿
            </h3>
            {TIPS.map((t,i)=>(
              <div key={i} className={`au${i+1}`} style={{background:'var(--white)',borderRadius:16,padding:'12px 14px',marginBottom:8,display:'flex',gap:11,alignItems:'center',boxShadow:'0 2px 8px rgba(0,0,0,.04)'}}>
                <div style={{width:42,height:42,borderRadius:13,background:'var(--cream-d)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>{t.icon}</div>
                <span style={{flex:1,fontSize:13.5,fontWeight:600,color:'var(--coal)'}}>{t.label}</span>
                <span className="badge" style={{background:'var(--terra-g)',color:'var(--terra)'}}>{t.min}</span>
              </div>
            ))}
          </div>

          <div className="bnav">
            {[
              {icon:'⌂',label:'Inicio',    href:'/usuario',               on:true},
              {icon:'🩺',label:'Evaluar',   href:'/usuario/checkin',       on:false},
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