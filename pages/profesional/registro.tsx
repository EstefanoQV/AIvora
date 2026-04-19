'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { REGIONS } from '@/lib/data';

const SPECS = ['Médico General','Cardiología','Pediatría','Dermatología','Neumología','Medicina Interna','Neurología','Otra'];

export default function ProRegistro() {
  const router = useRouter();
  const [step, setStep] = useState<1|2>(1);
  const [spec, setSpec] = useState('');
  const [region, setRegion] = useState('');

  return (
    <>
      <Head><title>Registro médico — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone phone-sage">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{flex:1,display:'flex',flexDirection:'column',padding:'12px 22px 22px',overflow:'hidden',position:'relative'}}>
            <div className="blob" style={{width:180,height:180,background:'var(--sage)',top:-50,right:-50}}/>

            <div style={{marginBottom:20}}>
              <Link href="/" style={{fontSize:13,color:'var(--gray)',textDecoration:'none',display:'inline-block',marginBottom:12}}>← Volver</Link>
              <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:14}}>
                {[1,2].map(n=>(
                  <div key={n} style={{display:'flex',alignItems:'center',gap:6}}>
                    <div style={{width:24,height:24,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,
                      background:n<=step?'var(--sage)':'var(--line)',
                      color:n<=step?'white':'var(--gray)'}}>{n<step?'✓':n}</div>
                    <span style={{fontSize:11,fontWeight:600,color:n===step?'var(--sage-d)':'var(--gray)'}}>
                      {n===1?'Datos personales':'Datos profesionales'}
                    </span>
                    {n<2 && <div style={{width:24,height:1,background:'var(--line)'}}/>}
                  </div>
                ))}
              </div>
              <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)',lineHeight:1.2}}>
                {step===1?'Solicitar acceso médico':'Tu perfil profesional'}
              </h2>
              <p style={{fontSize:12.5,color:'var(--gray)',marginTop:4}}>
                {step===1?'Verificamos tu colegiatura antes de activar tu cuenta.':'Esta información aparecerá en tu perfil visible a pacientes.'}
              </p>
            </div>

            {step===1 && (
              <div style={{flex:1,overflowY:'auto',animation:'fadeUp .4s ease'}}>
                <div className="field"><label>NOMBRE COMPLETO</label><input type="text" placeholder="Dr. / Dra. Tu nombre"/></div>
                <div className="field"><label>CORREO PROFESIONAL</label><input type="email" placeholder="tu@hospital.pe"/></div>
                <div className="field"><label>CELULAR</label><input type="tel" placeholder="+51 999 999 999"/></div>
                <div className="field"><label>CONTRASEÑA</label><input type="password" placeholder="Mínimo 8 caracteres"/></div>
                <div style={{background:'var(--sage-g)',borderRadius:13,padding:'11px 13px',border:'1px solid rgba(90,143,107,.2)'}}>
                  <p style={{fontSize:11.5,color:'var(--coal)',lineHeight:1.6}}>
                    🩺 Verificaremos tu número de colegiatura con el CMP/CPP. Este proceso toma 24-48 horas.
                  </p>
                </div>
              </div>
            )}

            {step===2 && (
              <div style={{flex:1,overflowY:'auto',animation:'slideR .35s ease'}}>
                <div className="field"><label>NÚMERO DE COLEGIATURA (CMP/CPP)</label><input type="text" placeholder="Ej. CMP 58234"/></div>
                <div className="field">
                  <label>ESPECIALIDAD</label>
                  <div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:2}}>
                    {SPECS.map(s=>(
                      <button key={s} onClick={()=>setSpec(s)} style={{padding:'7px 12px',borderRadius:20,border:'none',fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'var(--f-sans)',transition:'all .2s',background:spec===s?'var(--sage)':'var(--cream-d)',color:spec===s?'white':'var(--coal)'}}>{s}</button>
                    ))}
                  </div>
                </div>
                <div className="field">
                  <label>REGIÓN DE ATENCIÓN</label>
                  <div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:2}}>
                    {REGIONS.slice(0,8).map(r=>(
                      <button key={r} onClick={()=>setRegion(r)} style={{padding:'7px 12px',borderRadius:20,border:'none',fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'var(--f-sans)',transition:'all .2s',background:region===r?'var(--sage)':'var(--cream-d)',color:region===r?'white':'var(--coal)'}}>{r}</button>
                    ))}
                  </div>
                </div>
                <div className="field"><label>AÑOS DE EXPERIENCIA</label><input type="number" placeholder="Ej. 8"/></div>
              </div>
            )}

            <div style={{marginTop:16,display:'flex',flexDirection:'column',gap:10}}>
              <button
                onClick={()=> step===1 ? setStep(2) : router.push('/profesional')}
                style={{width:'100%',padding:'15px',background:'linear-gradient(135deg,var(--sage-d),var(--sage))',border:'none',borderRadius:18,fontSize:15,fontWeight:700,color:'white',boxShadow:'0 8px 24px rgba(90,143,107,.4)',cursor:'pointer',fontFamily:'var(--f-sans)'}}>
                {step===1 ? 'Continuar →' : 'Enviar solicitud →'}
              </button>
              <p style={{fontSize:12,color:'var(--gray)',textAlign:'center'}}>
                ¿Ya tienes cuenta?{' '}
                <Link href="/profesional" style={{color:'var(--sage-d)',fontWeight:700,textDecoration:'none'}}>Ingresar</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}