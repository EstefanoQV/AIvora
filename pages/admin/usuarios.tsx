'use client';
import Head from 'next/head';
import { useState } from 'react';
import { ADMIN_USERS } from '../../lib/data';
import { Sidebar } from './index';

export default function AdminUsuarios() {
  const [search, setSearch] = useState('');
  const [regionF, setRegionF] = useState('');
  const [nivelF, setNivelF] = useState('');
  const [modal, setModal] = useState<{title:string;body:string;danger:boolean}|null>(null);
  const [toast, setToast] = useState('');

  const filtered = ADMIN_USERS.filter(u =>
    (!search || u.name.toLowerCase().includes(search.toLowerCase()) || u.region.toLowerCase().includes(search.toLowerCase())) &&
    (!regionF || u.region === regionF) &&
    (!nivelF || u.nivel === nivelF)
  );

  function doAction(reason?: string) {
    setModal(null);
    setToast('✓ Acción completada. Registro guardado en auditoría.');
    setTimeout(()=>setToast(''),3000);
  }

  return (
    <>
      <Head><title>Usuarios — AIvora Admin</title></Head>
      <div className="admin-wrap">
        <Sidebar active="usuarios" />
        <main className="admin-main">
          <div className="ah1">Gestión de usuarios</div>
          <div className="ah1-sub">9,720 usuarios totales · 358 activos hoy</div>

          {/* Filters */}
          <div style={{display:'flex',gap:12,marginBottom:18,flexWrap:'wrap'}}>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Buscar por nombre..."
              style={{flex:1,padding:'11px 14px',borderRadius:13,border:'1.5px solid var(--line)',fontSize:13,background:'var(--white)',color:'var(--coal)',fontFamily:'var(--f-sans)',outline:'none',minWidth:180}} />
            <select value={nivelF} onChange={e=>setNivelF(e.target.value)}
              style={{padding:'11px 14px',borderRadius:13,border:'1.5px solid var(--line)',fontSize:13,background:'var(--white)',color:'var(--coal)',fontFamily:'var(--f-sans)',cursor:'pointer'}}>
              <option value="">Todos los niveles</option>
              <option>Leve</option><option>Moderado</option><option>Requiere atención</option>
            </select>
          </div>

          <div className="tw">
            <table className="at">
              <thead>
                <tr><th>Usuario</th><th>Región</th><th>Registro</th><th>Check-ins</th><th>Nivel</th><th>Estado</th><th>Acciones</th></tr>
              </thead>
              <tbody>
                {filtered.map(u=>(
                  <tr key={u.id}>
                    <td>
                      <div style={{display:'flex',alignItems:'center',gap:9}}>
                        <div style={{width:34,height:34,borderRadius:10,background:'rgba(196,98,58,.1)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:700,color:'var(--terra)',flexShrink:0}}>
                          {u.name.charAt(0)}
                        </div>
                        <span style={{fontWeight:600}}>{u.name}</span>
                      </div>
                    </td>
                    <td style={{color:'var(--gray)'}}>{u.region}</td>
                    <td style={{color:'var(--gray)'}}>{u.reg}</td>
                    <td style={{fontWeight:700}}>{u.checks}</td>
                    <td><span className="badge" style={{background:`${u.nivelC}18`,color:u.nivelC}}>{u.nivel}</span></td>
                    <td>
                      <div style={{display:'flex',alignItems:'center',gap:5}}>
                        <div style={{width:7,height:7,borderRadius:'50%',background:u.status==='Activo'?'var(--green)':'var(--gray)'}} />
                        <span style={{fontSize:12,fontWeight:600,color:u.status==='Activo'?'var(--green)':'var(--gray)'}}>{u.status}</span>
                      </div>
                    </td>
                    <td>
                      <div style={{display:'flex',gap:6}}>
                        <button style={{padding:'5px 11px',borderRadius:9,border:'none',fontSize:11.5,fontWeight:700,background:'rgba(74,128,184,.12)',color:'var(--blue)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>Ver</button>
                        <button onClick={()=>setModal({title:`¿Bloquear a ${u.name}?`,body:`Su cuenta quedará desactivada temporalmente. Debes registrar el motivo de esta acción.`,danger:true})}
                          style={{padding:'5px 11px',borderRadius:9,border:'none',fontSize:11.5,fontWeight:700,background:'rgba(200,75,75,.1)',color:'var(--red)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>Bloquear</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="tfoot">
              <span style={{fontSize:12.5,color:'var(--gray)'}}>Mostrando {filtered.length} de 9,720 usuarios</span>
              <div style={{display:'flex',gap:5}}>
                {[1,2,3,'...',97].map((p,i)=><button key={i} className={`pgbtn ${p===1?'on':''}`}>{p}</button>)}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {modal && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.5)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={()=>setModal(null)}>
          <div style={{background:'var(--white)',borderRadius:24,padding:28,width:440,maxWidth:'90%',animation:'fadeUp .3s ease'}} onClick={e=>e.stopPropagation()}>
            <h3 style={{fontFamily:'var(--f-serif)',fontSize:20,color:'var(--coal)',marginBottom:8}}>{modal.title}</h3>
            <p style={{fontSize:13.5,color:'var(--gray)',lineHeight:1.65,marginBottom:16}}>{modal.body}</p>
            <textarea placeholder="Motivo de la acción (requerido para auditoría)" style={{width:'100%',height:80,padding:'11px 13px',borderRadius:12,border:'1.5px solid var(--line)',fontSize:13,color:'var(--coal)',background:'var(--cream-d)',resize:'none',fontFamily:'var(--f-sans)',marginBottom:16}} />
            <div style={{display:'flex',gap:10}}>
              <button onClick={()=>setModal(null)} className="mbtn mbtn-cancel">Cancelar</button>
              <button onClick={()=>doAction()} className={`mbtn ${modal.danger?'mbtn-red':'mbtn-ok'}`}>Confirmar</button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div style={{position:'fixed',bottom:28,right:28,zIndex:9998,background:'var(--coal)',borderRadius:14,padding:'13px 18px',color:'var(--cream)',fontSize:13,animation:'toastIn .3s ease',boxShadow:'0 8px 24px rgba(0,0,0,.3)'}}>
          {toast}
        </div>
      )}
    </>
  );
}
