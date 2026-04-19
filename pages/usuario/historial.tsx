// pages/usuario/historial.tsx — reemplaza el archivo completo
import Head from 'next/head';
import Link from 'next/link';
import { HIST } from '@/lib/data';

export default function Historial() {
  return (
    <>
      <Head><title>Historial — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{padding:'4px 22px 14px',position:'relative'}}>
            <div className="blob" style={{width:180,height:180,background:'var(--blue)',top:-50,right:-50}}/>
            <p style={{fontSize:11.5,color:'var(--gray)'}}>Tus consultas recientes</p>
            <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)'}}>Historial médico</h2>
          </div>

          <div className="scroll" style={{paddingBottom:80}}>

            {/* Stats summary */}
            <div className="card au" style={{marginBottom:16,display:'flex',gap:0}}>
              {[
                {label:'Total consultas', val:'7', c:'var(--navy)'},
                {label:'Sin urgencia',    val:'4', c:'var(--green)'},
                {label:'Urgentes',        val:'1', c:'var(--red)'},
              ].map((s,i)=>(
                <div key={i} style={{flex:1,textAlign:'center',borderRight:i<2?'1px solid var(--line)':'none'}}>
                  <p style={{fontFamily:'var(--f-serif)',fontSize:26,fontWeight:700,color:s.c}}>{s.val}</p>
                  <p style={{fontSize:10,color:'var(--gray)',fontWeight:600,marginTop:2}}>{s.label}</p>
                </div>
              ))}
            </div>

            <h3 style={{fontFamily:'var(--f-serif)',fontSize:17,fontWeight:600,color:'var(--coal)',marginBottom:12}}>Consultas anteriores</h3>

            {HIST.map((e,i)=>(
              <div key={i} className={`au${Math.min(i+1,4)}`} style={{background:'var(--white)',borderRadius:18,padding:'14px 15px',marginBottom:9,display:'flex',gap:12,alignItems:'flex-start',boxShadow:'0 2px 8px rgba(0,0,0,.05)',borderLeft:`4px solid ${e.c}`}}>
                <div style={{width:44,height:44,borderRadius:13,background:`${e.c}18`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,flexShrink:0}}>{e.emoji}</div>
                <div style={{flex:1}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:4}}>
                    <p style={{fontSize:13.5,fontWeight:700,color:'var(--coal)'}}>{e.sintoma}</p>
                    <span style={{fontSize:11,color:'var(--gray)',flexShrink:0,marginLeft:8}}>{e.fecha}</span>
                  </div>
                  <span className="badge" style={{background:`${e.c}18`,color:e.c}}>{e.nivel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bnav">
            {[
              {icon:'⌂', label:'Inicio',    href:'/usuario',               on:false},
              {icon:'🩺',label:'Evaluar',   href:'/usuario/checkin',       on:false},
              {icon:'≋', label:'Historial', href:'/usuario/historial',     on:true},
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