'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head><title>AIvora — Salud Mental para el Perú</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',padding:'24px 28px 36px',position:'relative',overflow:'hidden'}}>
            {/* Blobs */}
            <div className="blob" style={{width:220,height:220,background:'#C4623A',top:-60,right:-60}} />
            <div className="blob" style={{width:260,height:260,background:'#F5A623',bottom:80,left:-80,animationDelay:'3s'}} />
            <div className="blob" style={{width:180,height:180,background:'#5A8F6B',top:'45%',left:-40,animationDelay:'6s'}} />

            {/* Logo + brand */}
            <div className="au" style={{textAlign:'center',position:'relative',zIndex:1,marginTop:12}}>
              <div style={{
                width:88,height:88,borderRadius:28,
                background:'white',
                display:'flex',alignItems:'center',justifyContent:'center',
                margin:'0 auto 18px',fontSize:42,
                boxShadow:'0 18px 44px rgba(180, 149, 136, 0.5)',
              }}><img src="/logo.png" width={96} height={96} alt="AIvora" /></div>

              <h1 style={{fontFamily:'var(--f-serif)',fontSize:42,fontWeight:700,color:'var(--coal)',letterSpacing:'-.02em',lineHeight:1}}>
                AIvora
              </h1>
              <p style={{fontSize:13,color:'var(--gray)',marginTop:6,lineHeight:1.55}}>
                Salud para el Perú
              </p>
            </div>

            {/* Tagline card */}
            <div className="card au1" style={{width:'100%',textAlign:'center',padding:'22px 24px'}}>
              <p style={{fontFamily:'var(--f-serif)',fontSize:19,fontWeight:600,color:'var(--coal)',lineHeight:1.4,marginBottom:8}}>
                ¿Cómo estás hoy, de verdad?
              </p>
              <p style={{fontSize:13,color:'var(--gray)',lineHeight:1.6}}>
                Un espacio tuyo para conocer tu estado emocional, sin juicios y completamente gratis.
              </p>
            </div>

            {/* Actions */}
            <div className="au2" style={{width:'100%',display:'flex',flexDirection:'column',gap:12,position:'relative',zIndex:1}}>
              {/* Primary CTA — usuario */}
              <button
                onClick={()=>router.push('/usuario')}
                style={{
                  width:'100%',padding:'17px',
                  background:'linear-gradient(135deg,var(--terra),var(--terra-l))',
                  border:'none',borderRadius:18,
                  fontSize:16,fontWeight:700,color:'white',
                  boxShadow:'0 10px 28px rgba(196,98,58,.45)',
                  cursor:'pointer',fontFamily:'var(--f-sans)',
                  transition:'transform .15s',
                }}
                onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.02)')}
                onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}
              >
                Ingresar
              </button>

              {/* Secondary — profesional */}
              <Link href="/profesional" style={{
                display:'block',width:'100%',padding:'14px',
                background:'transparent',
                border:'1.5px solid var(--line)',
                borderRadius:18,
                fontSize:14,fontWeight:600,
                color:'var(--gray)',
                textAlign:'center',
                textDecoration:'none',
                fontFamily:'var(--f-sans)',
                transition:'all .2s',
              }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--sage)';e.currentTarget.style.color='var(--sage-d)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--line)';e.currentTarget.style.color='var(--gray)'}}>
                Ingresar como profesional
              </Link>

              <p style={{fontSize:11,color:'var(--gray)',textAlign:'center',marginTop:4,opacity:.7}}>
                Gratuito · Privado · Ley N°29733
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
