'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ProLogin() {
  const router = useRouter();
  return (
    <>
      <Head><title>Ingreso profesional — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone phone-sage">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',padding:'20px 26px 28px',position:'relative',overflow:'hidden'}}>
            <div className="blob" style={{width:220,height:220,background:'var(--sage)',top:-60,right:-50}} />

            <div className="au" style={{textAlign:'center',position:'relative',zIndex:1}}>
              {/* Logo placeholder */}
              <div style={{width:72,height:72,borderRadius:20,background:'linear-gradient(135deg,var(--sage-d),var(--sage))',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px',fontSize:30,boxShadow:'0 12px 28px rgba(90,143,107,.5)'}}><img src="/logo.png" width={80} height={80} alt="AIvora" /></div>
              <h1 style={{fontFamily:'var(--f-serif)',fontSize:26,fontWeight:700,color:'var(--coal)',letterSpacing:'-.02em'}}>AIvora</h1>
              <p style={{fontSize:12.5,color:'black',marginTop:4}}>Panel Profesional</p>
            </div>

            <div className="card au1" style={{width:'100%'}}>
              <div className="field"><label>CORREO PROFESIONAL</label><input type="email" placeholder="tu@colegio.pe" /></div>
              <div className="field"><label>CONTRASEÑA</label><input type="password" placeholder="••••••••" /></div>
              <button onClick={()=>router.push('/profesional/dashboard')} style={{width:'100%',padding:'15px',background:'linear-gradient(135deg,var(--sage-d),var(--sage))',border:'none',borderRadius:16,fontSize:15,fontWeight:700,color:'white',boxShadow:'0 8px 22px rgba(90,143,107,.45)',cursor:'pointer',fontFamily:'var(--f-sans)',marginTop:4}}>
                Ingresar al panel →
              </button>
            </div>

            <div className="au2">
              <p style={{fontSize:11.5,color:'var(--gray)',textAlign:'center',lineHeight:1.6}}>
                ¿Aún no estás registrado? Solicita acceso en<br/><strong style={{color:'var(--sage-d)'}}>aivora.pe/profesionales</strong>
              </p>
              <div style={{textAlign:'center',marginTop:14}}>
                <Link href="/" style={{fontSize:12,color:'var(--gray)',textDecoration:'none'}}>← Volver al inicio</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
