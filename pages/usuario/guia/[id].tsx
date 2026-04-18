import Head from 'next/head';
import Link from 'next/link';

// Todos los IDs muestran la misma guía de ejemplo
const GUIA = {
  cat: 'Ansiedad',
  icon: '😮‍💨',
  title: '¿Qué es la ansiedad y cómo reconocerla?',
  tiempo: '5 min de lectura',
  offline: true,
  sections: [
    {
      heading: '¿Qué es la ansiedad?',
      body: 'La ansiedad es una respuesta natural de nuestro cuerpo ante situaciones que percibimos como amenazantes o inciertas. No es una señal de debilidad ni de locura — es la forma en que tu cuerpo intenta protegerte.\n\nTodos sentimos ansiedad en algún momento: antes de una presentación importante, cuando esperamos una noticia, o en situaciones nuevas. El problema aparece cuando esa respuesta se vuelve desproporcionada o constante.',
    },
    {
      heading: 'Señales físicas que puede que reconozcas',
      body: null,
      list: [
        'Corazón que late rápido o fuerte',
        'Tensión en el pecho o dificultad para respirar',
        'Manos sudorosas o frías',
        'Músculos tensos, especialmente en el cuello y hombros',
        'Dificultad para dormir o descansar',
        'Dolor de estómago o náuseas sin causa aparente',
      ],
    },
    {
      heading: 'Señales emocionales y mentales',
      body: 'Además del cuerpo, la ansiedad también se siente en cómo piensas y te sientes. Puedes notar que tu mente va muy rápido, que te cuesta concentrarte, que anticipas lo peor antes de que pase algo, o que sientes una inquietud difícil de explicar.',
    },
    {
      heading: '¿Cuándo preocuparse?',
      body: 'La ansiedad se convierte en algo que merece atención cuando:\n\n— Aparece con mucha frecuencia, sin una razón clara\n— Te impide hacer cosas que antes hacías normal\n— Sientes que no puedes controlarla aunque quieras\n— Ha durado más de dos semanas seguidas\n\nEsto no significa que estés mal ni que sea permanente. Significa que merece atención, igual que cualquier otra señal del cuerpo.',
    },
    {
      heading: 'Una cosa pequeña que puedes hacer hoy',
      body: 'Cuando sientas que la ansiedad aparece, prueba esto: inhala lento contando hasta 4, sostén el aire contando hasta 7, y suéltalo lentamente contando hasta 8. Repítelo 3 veces.\n\nEsta técnica (4-7-8) activa el sistema nervioso parasimpático — el que le dice a tu cuerpo que ya está a salvo.',
      highlight: true,
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
            {/* Back */}
            <Link href="/usuario/recursos" style={{display:'flex',alignItems:'center',gap:5,fontSize:13,color:'var(--gray)',marginBottom:16,textDecoration:'none'}}>
              ← Recursos
            </Link>

            {/* Header */}
            <div className="au" style={{marginBottom:20}}>
              <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:12}}>
                <span className="badge" style={{background:'var(--terra-g)',color:'var(--terra)'}}>{GUIA.cat}</span>
                {GUIA.offline && <span className="badge" style={{background:'rgba(74,128,184,.12)',color:'var(--blue)'}}>📥 Disponible offline</span>}
              </div>
              <h1 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)',lineHeight:1.25,marginBottom:10}}>
                {GUIA.title}
              </h1>
              <div style={{display:'flex',gap:12,alignItems:'center',fontSize:12,color:'var(--gray)'}}>
                <span>{GUIA.icon} {GUIA.cat}</span>
                <span>·</span>
                <span>🕐 {GUIA.tiempo}</span>
              </div>
            </div>

            {/* Divider */}
            <div style={{height:1,background:'var(--line)',marginBottom:22}} />

            {/* Content sections */}
            {GUIA.sections.map((s,i)=>(
              <div key={i} style={{marginBottom:24,animation:`fadeUp .4s ease ${i*.08}s both`}}>
                <h2 style={{fontFamily:'var(--f-serif)',fontSize:17,fontWeight:600,color:'var(--coal)',marginBottom:10,lineHeight:1.3}}>
                  {s.heading}
                </h2>

                {s.body && !s.highlight && (
                  <p style={{fontSize:14,color:'var(--gray)',lineHeight:1.75,whiteSpace:'pre-line'}}>
                    {s.body}
                  </p>
                )}

                {s.list && (
                  <div style={{display:'flex',flexDirection:'column',gap:8}}>
                    {s.list.map((item,j)=>(
                      <div key={j} style={{display:'flex',gap:10,alignItems:'flex-start'}}>
                        <div style={{width:6,height:6,borderRadius:'50%',background:'var(--terra)',flexShrink:0,marginTop:7}} />
                        <p style={{fontSize:14,color:'var(--gray)',lineHeight:1.6}}>{item}</p>
                      </div>
                    ))}
                  </div>
                )}

                {s.highlight && s.body && (
                  <div style={{background:'linear-gradient(135deg,var(--terra-g),rgba(245,166,35,.08))',borderRadius:18,padding:'16px 18px',border:'1.5px solid rgba(196,98,58,.18)'}}>
                    <p style={{fontSize:14,color:'var(--coal)',lineHeight:1.75,whiteSpace:'pre-line'}}>
                      {s.body}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Divider */}
            <div style={{height:1,background:'var(--line)',margin:'4px 0 20px'}} />

            {/* Footer */}
            <div style={{background:'var(--sage-g)',borderRadius:16,padding:'14px 16px',marginBottom:20,border:'1px solid rgba(90,143,107,.2)'}}>
              <p style={{fontSize:13,color:'var(--coal)',lineHeight:1.65}}>
                💚 Si lo que leíste te resuena y sientes que necesitas hablar con alguien, en AIvora hay profesionales disponibles en tu región.
              </p>
              <Link href="/usuario/profesionales" style={{display:'inline-flex',alignItems:'center',gap:6,marginTop:10,fontSize:13,fontWeight:700,color:'var(--sage-d)',textDecoration:'none'}}>
                Ver profesionales →
              </Link>
            </div>

            {/* Back to resources */}
            <Link href="/usuario/recursos" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,padding:'13px',borderRadius:15,border:'1.5px solid var(--line)',background:'var(--white)',fontSize:13.5,fontWeight:600,color:'var(--gray)',textDecoration:'none'}}>
              ← Volver a recursos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}