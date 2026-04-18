'use client';
import Head from 'next/head';
import { useState } from 'react';
import { Sidebar } from './index';

const PENDING = [
  {name:'Lic. Marcos Condori', spec:'Psicólogo',  region:'Cajamarca', colegiatura:'CPS 52340'},
  {name:'Dr. Felipe Salas',    spec:'Psiquiatra', region:'Cajamarca',    colegiatura:'CMP 71203'},
];
const VERIFIED = [
  {name:'Dra. Carmen Huanca',  spec:'Psicóloga',  region:'Cajamarca',    colegiatura:'CPS 45823', pacientes:12, rating:4.9, activo:true},
  {name:'Lic. Roberto Quispe', spec:'Psicólogo',  region:'Cajamarca',     colegiatura:'CPS 38201', pacientes:8,  rating:4.7, activo:true},
  {name:'Dra. Lucía Torres',   spec:'Psiquiatra', region:'Cajamarca',     colegiatura:'CMP 65490', pacientes:21, rating:4.8, activo:false},
  {name:'Dra. Patricia Mamani',spec:'Psicóloga',  region:'Cajamarca',     colegiatura:'CPS 41087', pacientes:9,  rating:4.8, activo:true},
];

export default function AdminProfesionales() {
  const [modal, setModal] = useState<{title:string;body:string;type:'ok'|'red'}|null>(null);
  const [toast, setToast] = useState('');

  function confirm() {
    setModal(null);
    setToast('✓ Acción completada. Profesional notificado por correo.');
    setTimeout(()=>setToast(''),3000);
  }

  return (
    <>
      <Head><title>Profesionales — AIvora Admin</title></Head>
      <div className="admin-wrap">
        <Sidebar active="pros" />
        <main className="admin-main">
          <div className="ah1">Profesionales de salud</div>
          <div className="ah1-sub">96 verificados · {PENDING.length} pendientes de revisión</div>

          {/* Pending */}
          <div style={{background:'rgba(245,166,35,.1)',borderRadius:18,padding:16,marginBottom:24,border:'1.5px solid rgba(245,166,35,.28)'}}>
            <h3 style={{fontFamily:'var(--f-serif)',fontSize:17,fontWeight:600,color:'var(--coal)',marginBottom:14}}>⏳ Pendientes de verificación</h3>
            {PENDING.map((p,i)=>(
              <div key={i} style={{background:'var(--white)',borderRadius:13,padding:'12px 15px',marginBottom:i<PENDING.length-1?9:0,display:'flex',gap:12,alignItems:'center',boxShadow:'0 2px 8px rgba(0,0,0,.06)'}}>
                <div style={{width:44,height:44,borderRadius:13,background:'rgba(245,166,35,.18)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22}}>🩺</div>
                <div style={{flex:1}}>
                  <p style={{fontSize:14,fontWeight:700,color:'var(--coal)'}}>{p.name}</p>
                  <p style={{fontSize:12,color:'var(--gray)'}}>{p.spec} · {p.region} · {p.colegiatura}</p>
                </div>
                <div style={{display:'flex',gap:7}}>
                  <button onClick={()=>setModal({title:`Aprobar a ${p.name}`,body:`Confirmas que revisaste la colegiatura ${p.colegiatura} y los documentos adjuntos. El profesional recibirá acceso al panel.`,type:'ok'})}
                    style={{padding:'7px 13px',borderRadius:11,border:'none',fontSize:12,fontWeight:700,background:'rgba(90,143,107,.18)',color:'var(--sage-d)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>
                    Aprobar ✓
                  </button>
                  <button onClick={()=>setModal({title:'Rechazar solicitud',body:`Rechazarás la solicitud de ${p.name}. Se le notificará con el motivo del rechazo.`,type:'red'})}
                    style={{padding:'7px 13px',borderRadius:11,border:'none',fontSize:12,fontWeight:700,background:'rgba(200,75,75,.12)',color:'var(--red)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>
                    Rechazar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Verified table */}
          <div className="tw">
            <table className="at">
              <thead><tr><th>Profesional</th><th>Colegiatura</th><th>Región</th><th>Pacientes</th><th>Rating</th><th>Estado</th><th>Acciones</th></tr></thead>
              <tbody>
                {VERIFIED.map((p,i)=>(
                  <tr key={i}>
                    <td>
                      <div style={{display:'flex',alignItems:'center',gap:9}}>
                        <div style={{width:34,height:34,borderRadius:10,background:'rgba(90,143,107,.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:700,color:'var(--sage-d)',flexShrink:0}}>
                          {p.name.charAt(0)}
                        </div>
                        <div>
                          <p style={{fontWeight:700,fontSize:13}}>{p.name}</p>
                          <p style={{fontSize:11,color:'var(--gray)'}}>{p.spec}</p>
                        </div>
                      </div>
                    </td>
                    <td style={{color:'var(--gray)'}}>{p.colegiatura}</td>
                    <td>{p.region}</td>
                    <td style={{fontWeight:700}}>{p.pacientes}</td>
                    <td style={{color:'var(--amber)',fontWeight:700}}>★ {p.rating}</td>
                    <td>
                      <div style={{display:'flex',alignItems:'center',gap:5}}>
                        <div style={{width:7,height:7,borderRadius:'50%',background:p.activo?'var(--green)':'var(--gray)'}} />
                        <span style={{fontSize:12,fontWeight:600,color:p.activo?'var(--green)':'var(--gray)'}}>{p.activo?'Activo':'Inactivo'}</span>
                      </div>
                    </td>
                    <td>
                      <div style={{display:'flex',gap:6}}>
                        <button style={{padding:'5px 11px',borderRadius:9,border:'none',fontSize:11.5,fontWeight:700,background:'rgba(74,128,184,.12)',color:'var(--blue)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>Ver</button>
                        <button onClick={()=>setModal({title:`Suspender a ${p.name}`,body:'Esta acción suspenderá temporalmente el acceso al panel. No recibirá nuevas solicitudes.',type:'red'})}
                          style={{padding:'5px 11px',borderRadius:9,border:'none',fontSize:11.5,fontWeight:700,background:'rgba(232,160,32,.14)',color:'var(--yellow)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>Suspender</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {modal && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.5)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={()=>setModal(null)}>
          <div style={{background:'var(--white)',borderRadius:24,padding:28,width:440,maxWidth:'90%',animation:'fadeUp .3s ease'}} onClick={e=>e.stopPropagation()}>
            <h3 style={{fontFamily:'var(--f-serif)',fontSize:20,color:'var(--coal)',marginBottom:8}}>{modal.title}</h3>
            <p style={{fontSize:13.5,color:'var(--gray)',lineHeight:1.65,marginBottom:20}}>{modal.body}</p>
            <div style={{display:'flex',gap:10}}>
              <button onClick={()=>setModal(null)} className="mbtn mbtn-cancel">Cancelar</button>
              <button onClick={confirm} className={`mbtn ${modal.type==='ok'?'mbtn-sage':'mbtn-red'}`}>
                {modal.type==='ok'?'Aprobar y notificar':'Confirmar'}
              </button>
            </div>
          </div>
        </div>
      )}
      {toast && <div style={{position:'fixed',bottom:28,right:28,zIndex:9998,background:'var(--coal)',borderRadius:14,padding:'13px 18px',color:'var(--cream)',fontSize:13,animation:'toastIn .3s ease',boxShadow:'0 8px 24px rgba(0,0,0,.3)'}}>{toast}</div>}
    </>
  );
}
