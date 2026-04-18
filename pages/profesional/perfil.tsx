import Head from 'next/head';
import Link from 'next/link';

export default function ProPerfil() {
  return (
    <>
      <Head><title>Mi perfil — AIvora Pro</title></Head>
      <div className="phone-bg">
        <div className="phone phone-sage">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{padding:'4px 22px 14px',position:'relative'}}>
            <div className="blob" style={{width:180,height:180,background:'var(--sage)',top:-50,right:-50}} />
            <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)'}}>Mi perfil</h2>
          </div>

          <div className="scroll" style={{paddingBottom:80}}>
            {/* Profile card */}
            <div className="card au" style={{marginBottom:14,textAlign:'center'}}>
              <div style={{width:80,height:80,borderRadius:24,background:'linear-gradient(135deg,var(--sage-d),var(--sage))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:36,margin:'0 auto 12px',boxShadow:'0 10px 24px rgba(90,143,107,.45)'}}>🌺</div>
              <h2 style={{fontFamily:'var(--f-serif)',fontSize:20,fontWeight:700,color:'var(--coal)'}}>Dra. Carmen Huanca</h2>
              <p style={{fontSize:13,color:'var(--gray)',marginBottom:10}}>Psicóloga clínica · CPS 45823</p>
              <div style={{display:'flex',gap:6,justifyContent:'center',flexWrap:'wrap'}}>
                <span className="badge" style={{background:'rgba(90,143,107,.14)',color:'var(--sage-d)'}}>VERIFICADA ✓</span>
                <span className="badge" style={{background:'rgba(74,128,184,.14)',color:'var(--blue)'}}>Cajamarca</span>
                <span className="badge" style={{background:'rgba(245,166,35,.14)',color:'var(--yellow)'}}>12 años exp.</span>
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="card au1" style={{marginBottom:14}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
                <h3 style={{fontFamily:'var(--f-serif)',fontSize:16,fontWeight:600,color:'var(--coal)'}}>Disponibilidad</h3>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <div className="toggle"><div className="toggle-k" /></div>
                  <span style={{fontSize:12,fontWeight:700,color:'var(--sage)'}}>Activa</span>
                </div>
              </div>
              {[['Lunes - Viernes','9:00 - 18:00'],['Sábados','9:00 - 13:00']].map(([d,h],i)=>(
                <div key={d} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:i===0?'1px solid var(--line)':'none'}}>
                  <span style={{fontSize:13,color:'var(--coal)'}}>{d}</span>
                  <span style={{fontSize:13,color:'var(--gray)'}}>{h}</span>
                </div>
              ))}
            </div>

            {/* Notificaciones */}
            <div className="card au2" style={{marginBottom:14}}>
              <h3 style={{fontFamily:'var(--f-serif)',fontSize:16,fontWeight:600,color:'var(--coal)',marginBottom:12}}>Notificaciones</h3>
              {['Nuevas solicitudes','Pacientes urgentes','Recordatorio de sesiones'].map((l,i)=>(
                <div key={l} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'9px 0',borderBottom:i<2?'1px solid var(--line)':'none'}}>
                  <span style={{fontSize:13,color:'var(--coal)'}}>{l}</span>
                  <div className="toggle"><div className="toggle-k" /></div>
                </div>
              ))}
            </div>

            <div className="au3" style={{display:'flex',gap:10}}>
              <button style={{flex:1,padding:'13px',border:'1.5px solid var(--line)',borderRadius:15,background:'var(--white)',fontSize:13.5,fontWeight:600,color:'var(--gray)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>
                Editar perfil
              </button>
              <Link href="/" style={{flex:1,padding:'13px',border:'1.5px solid var(--line)',borderRadius:15,background:'var(--white)',fontSize:13.5,fontWeight:600,color:'var(--red)',cursor:'pointer',fontFamily:'var(--f-sans)',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none'}}>
                Cerrar sesión
              </Link>
            </div>
          </div>

          <div className="bnav">
            {[
              {icon:'⌂',label:'Inicio',    href:'/profesional/dashboard', on:false},
              {icon:'👥',label:'Pacientes', href:'/profesional/pacientes', on:false},
              {icon:'👤',label:'Perfil',    href:'/profesional/perfil',    on:true},
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
