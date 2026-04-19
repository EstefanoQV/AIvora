'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { REGIONS } from '@/lib/data';

export default function UsuarioRegistro() {
  const router = useRouter();
  const [step, setStep] = useState<1|2>(1);
  const [region, setRegion] = useState('');
  const [sexo, setSexo] = useState('');

  return (
    <>
      <Head><title>Crear cuenta — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{flex:1,display:'flex',flexDirection:'column',padding:'12px 22px 22px',overflow:'hidden',position:'relative'}}>
            <div className="blob" style={{width:180,height:180,background:'var(--terra)',top:-50,right:-50}}/>

            {/* Header */}
            <div style={{marginBottom:20}}>
              <Link href="/" style={{fontSize:13,color:'var(--gray)',textDecoration:'none',display:'inline-block',marginBottom:12}}>← Volver</Link>
              {/* Step indicator */}
              <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:14}}>
                {[1,2].map(n=>(
                  <div key={n} style={{display:'flex',alignItems:'center',gap:6}}>
                    <div style={{width:24,height:24,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,
                      background:n<=step?'var(--terra)':'var(--line)',
                      color:n<=step?'white':'var(--gray)'}}>{n<step?'✓':n}</div>
                    <span style={{fontSize:11,fontWeight:600,color:n===step?'var(--terra)':'var(--gray)'}}>
                      {n===1?'Tus datos':'Tu salud'}
                    </span>
                    {n<2 && <div style={{width:24,height:1,background:'var(--line)'}}/>}
                  </div>
                ))}
              </div>
              <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)',lineHeight:1.2}}>
                {step===1?'Crea tu cuenta':'Un poco más de ti'}
              </h2>
              <p style={{fontSize:12.5,color:'var(--gray)',marginTop:4}}>
                {step===1?'Solo lo esencial para empezar.':'Esto nos ayuda a darte mejores orientaciones.'}
              </p>
            </div>

            {/* STEP 1 */}
            {step===1 && (
              <div style={{flex:1,overflowY:'auto',animation:'fadeUp .4s ease'}}>
                <div className="field"><label>NOMBRE COMPLETO</label><input type="text" placeholder="Tu nombre"/></div>
                <div className="field"><label>NÚMERO DE CELULAR</label><input type="tel" placeholder="+51 999 999 999"/></div>
                <div className="field"><label>CORREO ELECTRÓNICO</label><input type="email" placeholder="tu@correo.com"/></div>
                <div className="field"><label>CONTRASEÑA</label><input type="password" placeholder="Mínimo 8 caracteres"/></div>
                <div style={{background:'var(--terra-g)',borderRadius:13,padding:'11px 13px',border:'1px solid rgba(196,98,58,.2)',marginBottom:4}}>
                  <p style={{fontSize:11.5,color:'var(--coal)',lineHeight:1.6}}>
                    Al registrarte aceptas nuestros <strong>Términos de uso</strong> y la <strong>Política de privacidad</strong>. Cumplimos la Ley N°29733.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step===2 && (
              <div style={{flex:1,overflowY:'auto',animation:'slideR .35s ease'}}>
                <div className="field"><label>FECHA DE NACIMIENTO</label><input type="date"/></div>

                <div className="field">
                  <label>SEXO BIOLÓGICO</label>
                  <div style={{display:'flex',gap:9,marginTop:2}}>
                    {['Masculino','Femenino','Prefiero no decir'].map(s=>(
                      <button key={s} onClick={()=>setSexo(s)} style={{
                        flex:1,padding:'10px 4px',borderRadius:12,border:'none',fontSize:12,fontWeight:600,cursor:'pointer',
                        fontFamily:'var(--f-sans)',transition:'all .2s',
                        background:sexo===s?'var(--terra)':'var(--cream-d)',
                        color:sexo===s?'white':'var(--coal)',
                      }}>{s}</button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>REGIÓN</label>
                  <div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:2}}>
                    {REGIONS.map(r=>(
                      <button key={r} onClick={()=>setRegion(r)} style={{
                        padding:'7px 12px',borderRadius:20,border:'none',fontSize:12,fontWeight:600,cursor:'pointer',
                        fontFamily:'var(--f-sans)',transition:'all .2s',
                        background:region===r?'var(--terra)':'var(--cream-d)',
                        color:region===r?'white':'var(--coal)',
                      }}>{r}</button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>¿TIENES ALGUNA CONDICIÓN DE SALUD CONOCIDA?</label>
                  <div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:2}}>
                    {['Ninguna','Diabetes','Hipertensión','Asma','Cardiopatía','Otra'].map(c=>(
                      <button key={c} style={{padding:'7px 12px',borderRadius:20,border:'none',fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'var(--f-sans)',background:'var(--cream-d)',color:'var(--coal)'}}>{c}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div style={{marginTop:16,display:'flex',flexDirection:'column',gap:10}}>
              <button
                onClick={()=> step===1 ? setStep(2) : router.push('/usuario')}
                style={{width:'100%',padding:'15px',background:'linear-gradient(135deg,var(--terra),var(--terra-l))',border:'none',borderRadius:18,fontSize:15,fontWeight:700,color:'white',boxShadow:'0 8px 24px rgba(196,98,58,.4)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>
                {step===1 ? 'Continuar →' : 'Crear mi cuenta →'}
              </button>
              <p style={{fontSize:12,color:'var(--gray)',textAlign:'center'}}>
                ¿Ya tienes cuenta?{' '}
                <Link href="/usuario" style={{color:'var(--terra)',fontWeight:700,textDecoration:'none'}}>Ingresar</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
