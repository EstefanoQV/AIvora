'use client';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head><title>AIvora — Tu médico inteligente</title></Head>
      <main style={{
        minHeight:'100vh',
        background:'linear-gradient(135deg,#1a1210 0%,#2d1f1a 45%,#1a2015 100%)',
        display:'flex',flexDirection:'column',alignItems:'center',
        justifyContent:'center',padding:'40px 20px',
        position:'relative',overflow:'hidden',fontFamily:'var(--f-sans)',
      }}>
        {/* Blobs de fondo */}
        <div className="blob" style={{width:400,height:400,background:'#C4623A',top:-100,right:-80}}/>
        <div className="blob" style={{width:500,height:500,background:'#5A8F6B',bottom:-150,left:-120,animationDelay:'3s'}}/>
        <div className="blob" style={{width:280,height:280,background:'#F5A623',top:'40%',left:-60,animationDelay:'6s'}}/>

        {/* Logo + Brand */}
        <div className="au" style={{textAlign:'center',marginBottom:44,position:'relative',zIndex:1}}>═══════════
          <div style={{
            width:80,height:80,borderRadius:26,
            background:'white',
            display:'flex',alignItems:'center',justifyContent:'center',
            margin:'0 auto 16px',fontSize:38,
            boxShadow:'0 16px 40px rgba(196,98,58,.5)',
          }}><img src="/logo.png" width={96} height={96} alt="AIvora" /></div>
          <h1 style={{fontFamily:'var(--f-serif)',fontSize:48,fontWeight:700,color:'#FFF8F0',letterSpacing:'-.02em',lineHeight:1}}>
            AIvora
          </h1>
          <p style={{fontSize:13,color:'rgba(255,255,255,.4)',marginTop:8,letterSpacing:'.08em'}}>
            Tu médico inteligente · Perú
          </p>
        </div>

        {/* Cards */}
        <div className="au1" style={{display:'flex',gap:16,flexWrap:'wrap',justifyContent:'center',position:'relative',zIndex:1}}>

          {/* USUARIO */}
          <div style={{
            width:230,borderRadius:24,overflow:'hidden',
            boxShadow:'0 20px 48px rgba(0,0,0,.45)',
            border:'1.5px solid rgba(255,255,255,.08)',
          }}>
            <div style={{background:'linear-gradient(135deg,#C4623A,#E8855E)',padding:'26px 22px 20px'}}>
              <div style={{fontSize:40,marginBottom:10}}>🙋</div>
              <div style={{fontFamily:'var(--f-serif)',fontSize:21,fontWeight:700,color:'white',lineHeight:1.2,marginBottom:5}}>
                Soy paciente
              </div>
              <p style={{fontSize:12,color:'rgba(255,255,255,.75)',lineHeight:1.5}}>
                Evalúa tus síntomas y recibe orientación médica con IA.
              </p>
            </div>
            <div style={{background:'white',padding:'16px 22px 20px',display:'flex',flexDirection:'column',gap:9}}>
              <Link href="/usuario" style={{
                display:'block',padding:'11px',textAlign:'center',
                background:'linear-gradient(135deg,#C4623A,#E8855E)',
                borderRadius:14,fontSize:14,fontWeight:700,color:'white',
                textDecoration:'none',boxShadow:'0 6px 18px rgba(196,98,58,.4)',
              }}>Ingresar</Link>
              <Link href="/usuario/registro" style={{
                display:'block',padding:'11px',textAlign:'center',
                background:'transparent',
                border:'1.5px solid #E8DDD8',
                borderRadius:14,fontSize:14,fontWeight:600,color:'#7A6A63',
                textDecoration:'none',
              }}>Registrarse</Link>
            </div>
          </div>

          {/* PROFESIONAL */}
          <div style={{
            width:230,borderRadius:24,overflow:'hidden',
            boxShadow:'0 20px 48px rgba(0,0,0,.45)',
            border:'1.5px solid rgba(255,255,255,.08)',
          }}>
            <div style={{background:'linear-gradient(135deg,#3A6B4A,#5A8F6B)',padding:'26px 22px 20px'}}>
              <div style={{fontSize:40,marginBottom:10}}>🩺</div>
              <div style={{fontFamily:'var(--f-serif)',fontSize:21,fontWeight:700,color:'white',lineHeight:1.2,marginBottom:5}}>
                Soy médico
              </div>
              <p style={{fontSize:12,color:'rgba(255,255,255,.75)',lineHeight:1.5}}>
                Gestiona tus pacientes y sus evaluaciones con IA.
              </p>
            </div>
            <div style={{background:'white',padding:'16px 22px 20px',display:'flex',flexDirection:'column',gap:9}}>
              <Link href="/profesional" style={{
                display:'block',padding:'11px',textAlign:'center',
                background:'linear-gradient(135deg,#3A6B4A,#5A8F6B)',
                borderRadius:14,fontSize:14,fontWeight:700,color:'white',
                textDecoration:'none',boxShadow:'0 6px 18px rgba(90,143,107,.4)',
              }}>Ingresar</Link>
              <Link href="/profesional/registro" style={{
                display:'block',padding:'11px',textAlign:'center',
                background:'transparent',
                border:'1.5px solid #E8DDD8',
                borderRadius:14,fontSize:14,fontWeight:600,color:'#7A6A63',
                textDecoration:'none',
              }}>Registrarse</Link>
            </div>
          </div>

          {/* ADMIN */}
          <div style={{
            width:230,borderRadius:24,overflow:'hidden',
            boxShadow:'0 20px 48px rgba(0,0,0,.45)',
            border:'1.5px solid rgba(255,255,255,.08)',
          }}>
            <div style={{background:'linear-gradient(135deg,#1E2B3C,#2D3E54)',padding:'26px 22px 20px'}}>
              <div style={{fontSize:40,marginBottom:10}}>📊</div>
              <div style={{fontFamily:'var(--f-serif)',fontSize:21,fontWeight:700,color:'white',lineHeight:1.2,marginBottom:5}}>
                Administrador
              </div>
              <p style={{fontSize:12,color:'rgba(255,255,255,.75)',lineHeight:1.5}}>
                Panel de gestión nacional. Solo acceso autorizado.
              </p>
            </div>
            <div style={{background:'white',padding:'16px 22px 20px'}}>
              <Link href="/admin" style={{
                display:'block',padding:'11px',textAlign:'center',
                background:'linear-gradient(135deg,#1E2B3C,#2D3E54)',
                borderRadius:14,fontSize:14,fontWeight:700,color:'white',
                textDecoration:'none',boxShadow:'0 6px 18px rgba(30,43,60,.5)',
              }}>Ingresar al panel</Link>
              <p style={{fontSize:11,color:'#7A6A63',marginTop:10,textAlign:'center',lineHeight:1.5}}>
                Acceso restringido · Solo administradores autorizados
              </p>
            </div>
          </div>

        </div>

        <p className="au2" style={{fontSize:11,color:'rgba(255,255,255,.2)',marginTop:36,textAlign:'center',position:'relative',zIndex:1}}>
          Gratuito · Privado · Cumple Ley N°29733
        </p>
      </main>
    </>
  );
}