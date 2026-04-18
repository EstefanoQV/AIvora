import Head from 'next/head';
import Link from 'next/link';

export default function UsuarioPerfil() {
  return (
    <>
      <Head><title>Mi perfil — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{padding:'4px 22px 14px',position:'relative'}}>
            <div className="blob" style={{width:180,height:180,background:'var(--terra)',top:-50,right:-50}} />
            <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)'}}>Mi perfil</h2>
          </div>

          <div className="scroll" style={{paddingBottom:80}}>
            {/* Avatar card */}
            <div className="card au" style={{marginBottom:14,textAlign:'center'}}>
              <div style={{width:80,height:80,borderRadius:24,background:'linear-gradient(135deg,var(--terra),var(--amber))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:36,margin:'0 auto 12px',boxShadow:'0 10px 24px rgba(196,98,58,.45)',fontWeight:700,color:'white'}}>M</div>
              <h2 style={{fontFamily:'var(--f-serif)',fontSize:20,fontWeight:700,color:'var(--coal)'}}>María García</h2>
              <p style={{fontSize:13,color:'var(--gray)',marginBottom:10}}>Cajamarca · 27 años</p>
              <div style={{display:'flex',gap:6,justifyContent:'center',flexWrap:'wrap'}}>
                <span className="badge" style={{background:'var(--terra-g)',color:'var(--terra)'}}>21 check-ins</span>
                <span className="badge" style={{background:'rgba(74,128,184,.12)',color:'var(--blue)'}}>Desde marzo 2025</span>
              </div>
            </div>

            {/* Datos */}
            <div className="card au1" style={{marginBottom:14}}>
              <h3 style={{fontFamily:'var(--f-serif)',fontSize:16,fontWeight:600,color:'var(--coal)',marginBottom:12}}>Mis datos</h3>
              {[
                ['Nombre','María García'],
                ['Celular','+51 987 654 321'],
                ['Región','Cajamarca'],
                ['Edad','27 años'],
              ].map(([l,v])=>(
                <div key={l} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'9px 0',borderBottom:'1px solid var(--line)'}}>
                  <span style={{fontSize:12,color:'var(--gray)',fontWeight:600}}>{l}</span>
                  <span style={{fontSize:13,color:'var(--coal)',fontWeight:500}}>{v}</span>
                </div>
              ))}
            </div>

            {/* Privacidad */}
            <div className="card au2" style={{marginBottom:14}}>
              <h3 style={{fontFamily:'var(--f-serif)',fontSize:16,fontWeight:600,color:'var(--coal)',marginBottom:12}}>Privacidad</h3>
              {[
                ['Compartir datos con profesionales','Solo con mi consentimiento'],
                ['Foto base','Se elimina al instante'],
                ['Historial emocional','Solo yo lo veo'],
              ].map(([l,v])=>(
                <div key={l} style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',padding:'9px 0',borderBottom:'1px solid var(--line)',gap:12}}>
                  <span style={{fontSize:12,color:'var(--gray)',fontWeight:600,lineHeight:1.4}}>{l}</span>
                  <span style={{fontSize:11,color:'var(--sage-d)',fontWeight:700,background:'var(--sage-g)',borderRadius:7,padding:'3px 8px',flexShrink:0}}>{v}</span>
                </div>
              ))}
            </div>

            {/* Notificaciones */}
            <div className="card au3" style={{marginBottom:14}}>
              <h3 style={{fontFamily:'var(--f-serif)',fontSize:16,fontWeight:600,color:'var(--coal)',marginBottom:12}}>Notificaciones</h3>
              {['Recordatorio diario de check-in','Mensajes de profesionales'].map((l,i)=>(
                <div key={l} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'9px 0',borderBottom:i<2?'1px solid var(--line)':'none'}}>
                  <span style={{fontSize:13,color:'var(--coal)'}}>{l}</span>
                  <div className="toggle"><div className="toggle-k"/></div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="au4" style={{display:'flex',flexDirection:'column',gap:10}}>
              <button style={{width:'100%',padding:'13px',border:'1.5px solid var(--line)',borderRadius:15,background:'var(--white)',fontSize:13.5,fontWeight:600,color:'var(--coal)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>
                Editar mis datos
              </button>
              <Link href="/" style={{display:'block',width:'100%',padding:'13px',border:'1.5px solid rgba(200,75,75,.3)',borderRadius:15,background:'var(--white)',fontSize:13.5,fontWeight:600,color:'var(--red)',textAlign:'center',textDecoration:'none',fontFamily:'var(--f-sans)'}}>
                Cerrar sesión
              </Link>
            </div>
          </div>

          <div className="bnav">
            {[
              {icon:'⌂',label:'Inicio',    href:'/usuario',               on:false},
              {icon:'◉',label:'Check-in',  href:'/usuario/checkin',       on:false},
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