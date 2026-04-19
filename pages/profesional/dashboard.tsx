// pages/profesional/dashboard.tsx — reemplaza el archivo completo
import Head from 'next/head';
import Link from 'next/link';
import { PATIENTS } from '@/lib/data';

export default function ProDashboard() {
  const stats = [
    {label:'Pacientes activos',    val:'18', delta:'+3 esta semana',  color:'var(--sage)'},
    {label:'Casos urgentes',         val:'2',  delta:'Atención hoy',    color:'var(--red)'},
    {label:'Consultas este mes',      val:'47', delta:'+18% vs anterior',color:'var(--blue)'},
    {label:'Calificación promedio',   val:'4.9★',delta:'312 evaluaciones',color:'var(--amber)'},
  ];

  return (
    <>
      <Head><title>Dashboard — AIvora Médico</title></Head>
      <div className="phone-bg">
        <div className="phone phone-sage">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{padding:'4px 22px 14px',position:'relative'}}>
            <div className="blob" style={{width:180,height:180,background:'var(--sage)',top:-50,right:-50}}/>
            <p style={{fontSize:11.5,color:'var(--gray)'}}>Sábado, 5 de abril</p>
            <h2 style={{fontFamily:'var(--f-serif)',fontSize:23,fontWeight:700,color:'var(--coal)'}}>Hola, Dr. Mendoza 👋</h2>
            <span className="badge" style={{background:'rgba(90,143,107,.14)',color:'var(--sage-d)',marginTop:4,display:'inline-flex'}}>MÉDICO VERIFICADO · CMP 58234</span>
          </div>

          <div className="scroll" style={{paddingBottom:80}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:16}}>
              {stats.map((s,i)=>(
                <div key={i} className={`card au${i+1}`} style={{padding:'14px 16px'}}>
                  <div style={{fontSize:10,color:'var(--gray)',fontWeight:700,marginBottom:6}}>{s.label.toUpperCase()}</div>
                  <div style={{fontFamily:'var(--f-serif)',fontSize:26,fontWeight:700,color:s.color}}>{s.val}</div>
                  <div style={{fontSize:10.5,color:i===1?'var(--red)':'var(--gray)',marginTop:3}}>{s.delta}</div>
                </div>
              ))}
            </div>

            {/* Urgentes */}
            <div className="au2" style={{background:'rgba(200,75,75,.08)',borderRadius:18,padding:14,marginBottom:14,border:'1.5px solid rgba(200,75,75,.18)'}}>
              <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:10}}>
                <span style={{fontSize:16}}>🚨</span>
                <h3 style={{fontFamily:'var(--f-serif)',fontSize:15,color:'var(--coal)'}}>Requieren atención urgente</h3>
              </div>
              {PATIENTS.filter(p=>p.nivel==='Urgente').map((p,i)=>(
                <Link key={i} href="/profesional/pacientes/1" style={{display:'flex',gap:11,alignItems:'center',background:'var(--white)',borderRadius:13,padding:'12px 13px',textDecoration:'none',boxShadow:'0 2px 8px rgba(0,0,0,.06)'}}>
                  <div style={{width:38,height:38,borderRadius:12,background:'rgba(200,75,75,.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>{p.emoji}</div>
                  <div style={{flex:1}}>
                    <p style={{fontSize:13,fontWeight:700,color:'var(--coal)'}}>{p.name}</p>
                    <p style={{fontSize:11,color:'var(--gray)'}}>{p.sintoma}</p>
                  </div>
                  <span className="badge" style={{background:'rgba(200,75,75,.12)',color:'var(--red)'}}>URGENTE</span>
                </Link>
              ))}
            </div>

            {/* Nuevas evaluaciones */}
            <h3 style={{fontFamily:'var(--f-serif)',fontSize:16,fontWeight:600,color:'var(--coal)',marginBottom:12}}>Nuevas evaluaciones recibidas</h3>
            {[
              {name:'Pedro V.',  region:'Cajamarca',  time:'hace 22 min', sintoma:'Tos y fiebre leve'},
              {name:'Rosa F.',   region:'Cajamarca',  time:'hace 1h',     sintoma:'Dolor abdominal'},
            ].map((s,i)=>(
              <div key={i} className={`au${i+3}`} style={{background:'var(--white)',borderRadius:15,padding:'12px 14px',marginBottom:8,display:'flex',gap:11,alignItems:'center',boxShadow:'0 2px 8px rgba(0,0,0,.05)'}}>
                <div style={{width:42,height:42,borderRadius:13,background:'linear-gradient(135deg,var(--sage-l),var(--sage))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>👤</div>
                <div style={{flex:1}}>
                  <p style={{fontSize:13,fontWeight:700,color:'var(--coal)'}}>{s.name} · {s.region}</p>
                  <p style={{fontSize:11,color:'var(--gray)'}}>{s.sintoma} · {s.time}</p>
                </div>
                <button style={{padding:'7px 13px',borderRadius:19,border:'none',fontSize:12,fontWeight:700,background:'rgba(90,143,107,.18)',color:'var(--sage-d)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>Revisar</button>
              </div>
            ))}
          </div>

          <div className="bnav">
            {[
              {icon:'⌂', label:'Inicio',    href:'/profesional/dashboard', on:true},
              {icon:'👥',label:'Pacientes', href:'/profesional/pacientes', on:false},
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