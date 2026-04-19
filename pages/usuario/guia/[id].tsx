// pages/usuario/guia/[id].tsx — reemplaza el archivo completo
import Head from 'next/head';
import Link from 'next/link';

const GUIA = {
  cat: 'Señales de alarma',
  icon: '🚨',
  title: 'Síntomas que nunca debes ignorar',
  tiempo: '4 min de lectura',
  offline: true,
  sections: [
    {
      heading: '¿Por qué hay síntomas que no pueden esperar?',
      body: 'Algunos síntomas parecen leves al principio pero pueden ser la señal de algo que necesita atención médica urgente. Reconocerlos a tiempo puede marcar una diferencia enorme.\n\nEsta guía no es para asustarte — es para que sepas cuándo actuar rápido.',
    },
    {
      heading: 'Síntomas que requieren ir a emergencias ahora',
      body: null,
      list: [
        'Dolor en el pecho, opresión o presión que no mejora',
        'Dificultad para respirar en reposo',
        'Pérdida repentina de consciencia o desmayo',
        'Parálisis o debilidad súbita en un lado del cuerpo',
        'Confusión mental repentina o dificultad para hablar',
        'Fiebre superior a 40°C que no baja con medicamento',
        'Sangrado abundante que no se detiene',
      ],
    },
    {
      heading: 'Síntomas que deben consultarse en 24-48 horas',
      body: null,
      list: [
        'Fiebre de más de 38.5°C por más de 3 días',
        'Dolor abdominal intenso o persistente',
        'Vómitos o diarrea que duran más de 24 horas',
        'Dolor de cabeza muy fuerte que no mejora',
        'Dificultad para orinar o dolor al hacerlo',
      ],
    },
    {
      heading: '¿Qué hacer mientras llegas a la atención?',
      body: 'Si detectas señales urgentes: mantén a la persona tranquila, no le des nada de comer ni beber, llama al 106 (SAMU) o al 911, y no la muevas si hay posibilidad de lesión en la columna.',
      highlight: true,
    },
    {
      heading: 'Números de emergencia en el Perú',
      body: null,
      list: [
        '📞 106 — SAMU (Servicio de Atención Médica de Urgencia)',
        '📞 911 — Emergencias generales',
        '📞 117 — Seguro Integral de Salud (SIS)',
        '📞 0800-10828 — EsSalud (línea gratuita)',
      ],
    },
  ],
};

export default function GuiaDetalle() {
  return (
    <>
      <Head><title>{GUIA.title} — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{flex:1,overflowY:'auto',padding:'8px 22px 32px'}}>
            <Link href="/usuario/recursos" style={{display:'flex',alignItems:'center',gap:5,fontSize:13,color:'var(--gray)',marginBottom:16,textDecoration:'none'}}>
              ← Recursos
            </Link>

            <div className="au" style={{marginBottom:20}}>
              <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:12}}>
                <span className="badge" style={{background:'var(--terra-g)',color:'var(--terra)'}}>{GUIA.cat}</span>
                {GUIA.offline && <span className="badge" style={{background:'rgba(74,128,184,.12)',color:'var(--blue)'}}>📥 Disponible offline</span>}
              </div>
              <h1 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)',lineHeight:1.25,marginBottom:10}}>
                {GUIA.title}
              </h1>
              <div style={{display:'flex',gap:12,fontSize:12,color:'var(--gray)'}}>
                <span>{GUIA.icon} {GUIA.cat}</span><span>·</span><span>🕐 {GUIA.tiempo}</span>
              </div>
            </div>

            <div style={{height:1,background:'var(--line)',marginBottom:22}}/>

            {GUIA.sections.map((s,i)=>(
              <div key={i} style={{marginBottom:24,animation:`fadeUp .4s ease ${i*.08}s both`}}>
                <h2 style={{fontFamily:'var(--f-serif)',fontSize:17,fontWeight:600,color:'var(--coal)',marginBottom:10,lineHeight:1.3}}>{s.heading}</h2>

                {s.body && !s.highlight && (
                  <p style={{fontSize:14,color:'var(--gray)',lineHeight:1.75,whiteSpace:'pre-line'}}>{s.body}</p>
                )}

                {s.list && (
                  <div style={{display:'flex',flexDirection:'column',gap:8}}>
                    {s.list.map((item,j)=>(
                      <div key={j} style={{display:'flex',gap:10,alignItems:'flex-start'}}>
                        <div style={{width:6,height:6,borderRadius:'50%',background:'var(--terra)',flexShrink:0,marginTop:7}}/>
                        <p style={{fontSize:14,color:'var(--gray)',lineHeight:1.6}}>{item}</p>
                      </div>
                    ))}
                  </div>
                )}

                {s.highlight && s.body && (
                  <div style={{background:'linear-gradient(135deg,var(--terra-g),rgba(245,166,35,.08))',borderRadius:18,padding:'16px 18px',border:'1.5px solid rgba(196,98,58,.18)'}}>
                    <p style={{fontSize:14,color:'var(--coal)',lineHeight:1.75}}>{s.body}</p>
                  </div>
                )}
              </div>
            ))}

            <div style={{height:1,background:'var(--line)',margin:'4px 0 20px'}}/>

            <div style={{background:'var(--sage-g)',borderRadius:16,padding:'14px 16px',marginBottom:20,border:'1px solid rgba(90,143,107,.2)'}}>
              <p style={{fontSize:13,color:'var(--coal)',lineHeight:1.65}}>
                🩺 Si tienes dudas sobre algún síntoma, la IA de AIvora puede orientarte en segundos.
              </p>
              <Link href="/usuario/checkin" style={{display:'inline-flex',alignItems:'center',gap:6,marginTop:10,fontSize:13,fontWeight:700,color:'var(--sage-d)',textDecoration:'none'}}>
                Evaluar síntomas →
              </Link>
            </div>

            <Link href="/usuario/recursos" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,padding:'13px',borderRadius:15,border:'1.5px solid var(--line)',background:'var(--white)',fontSize:13.5,fontWeight:600,color:'var(--gray)',textDecoration:'none'}}>
              ← Volver a recursos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}