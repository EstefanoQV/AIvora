import Head from 'next/head';
import Link from 'next/link';
import { HIST } from '../../lib/data';

export default function Historial() {
  const chartData = [35,65,82,50,72,40,55];
  const labels = ['22/3','24/3','26/3','28/3','30/3','31/3','01/4'];
  const maxV = 100;

  return (
    <>
      <Head><title>Historial — AIvora</title></Head>
      <div className="phone-bg">
        <div className="phone">
          <div className="sbar"><span className="sbar-t">9:41</span><span className="sbar-i">●●● WiFi 🔋</span></div>

          <div style={{padding:'4px 22px 14px',position:'relative'}}>
            <div className="blob" style={{width:180,height:180,background:'var(--blue)',top:-50,right:-50}} />
            <p style={{fontSize:11.5,color:'var(--gray)'}}>Últimas 4 semanas</p>
            <h2 style={{fontFamily:'var(--f-serif)',fontSize:24,fontWeight:700,color:'var(--coal)'}}>Tu historial emocional</h2>
          </div>

          <div className="scroll" style={{paddingBottom:80}}>
            {/* Chart card — SVG bars */}
            <div className="card au" style={{marginBottom:16,padding:'18px 16px 14px'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:4}}>
                <h3 style={{fontFamily:'var(--f-serif)',fontSize:16,fontWeight:600,color:'var(--coal)'}}>Tendencia de bienestar</h3>
                <span className="badge" style={{background:'rgba(62,166,106,.14)',color:'var(--green)'}}>↗ Mejorando</span>
              </div>
              <div style={{display:'flex',gap:10,fontSize:11,color:'var(--gray)',marginBottom:12}}>
                <span style={{color:'var(--green)'}}>● Leve</span>
                <span style={{color:'var(--yellow)'}}>● Moderado</span>
                <span style={{color:'var(--red)'}}>● Alerta</span>
              </div>
              {/* SVG area chart */}
              <svg viewBox="0 0 320 110" style={{width:'100%',height:110,overflow:'visible'}}>
                <defs>
                  <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C4623A" stopOpacity=".25"/>
                    <stop offset="100%" stopColor="#C4623A" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {/* Grid */}
                {[25,50,75].map(y=><line key={y} x1="0" y1={110-y*1.1} x2="320" y2={110-y*1.1} stroke="#E8DDD8" strokeWidth="1"/>)}
                {/* Area */}
                <path
                  d={`M ${chartData.map((v,i)=>`${i*(320/6)},${110-v*1.1}`).join(' L ')} L ${(chartData.length-1)*(320/6)},110 L 0,110 Z`}
                  fill="url(#hg)"
                />
                {/* Line */}
                <polyline
                  points={chartData.map((v,i)=>`${i*(320/6)},${110-v*1.1}`).join(' ')}
                  fill="none" stroke="#C4623A" strokeWidth="2.5" strokeLinejoin="round"
                />
                {/* Dots */}
                {chartData.map((v,i)=>(
                  <circle key={i} cx={i*(320/6)} cy={110-v*1.1} r="3.5" fill="#C4623A"/>
                ))}
                {/* Labels */}
                {labels.map((l,i)=>(
                  <text key={i} x={i*(320/6)} y="108" textAnchor="middle" fontSize="9" fill="#7A6A63" dominantBaseline="auto"
                    style={{transform:'translateY(14px)'}}>{l}</text>
                ))}
              </svg>
              <div style={{display:'flex',gap:14,marginTop:12}}>
                {[['PROMEDIO','62/100','var(--yellow)'],['MEJOR DÍA','82/100','var(--green)'],['TENDENCIA','↗ Subiendo','var(--sage)']].map(([l,v,c])=>(
                  <div key={l} style={{flex:1,textAlign:'center'}}>
                    <p style={{fontSize:9.5,color:'var(--gray)',fontWeight:700,marginBottom:2}}>{l}</p>
                    <p style={{fontSize:13,fontWeight:700,color:c}}>{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{fontFamily:'var(--f-serif)',fontSize:17,fontWeight:600,color:'var(--coal)',marginBottom:12}}>Registros anteriores</h3>

            {HIST.map((e,i)=>(
              <div key={i} className={`au${Math.min(i+1,4)}`} style={{background:'var(--white)',borderRadius:18,padding:'13px 14px',marginBottom:8,display:'flex',gap:12,alignItems:'center',boxShadow:'0 2px 8px rgba(0,0,0,.05)'}}>
                <div style={{width:44,height:44,borderRadius:13,background:`${e.c}18`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,flexShrink:0}}>{e.emoji}</div>
                <div style={{flex:1}}>
                  <p style={{fontSize:13.5,fontWeight:700,color:'var(--coal)'}}>{e.nivel}</p>
                  <p style={{fontSize:11.5,color:'var(--gray)'}}>{e.fecha} · Puntuación: {e.score}/100</p>
                </div>
                <div style={{width:34,height:34,borderRadius:'50%',background:'var(--cream-d)',overflow:'hidden',position:'relative'}}>
                  <div style={{position:'absolute',bottom:0,left:0,right:0,height:`${e.score}%`,background:e.c,opacity:.75,borderRadius:'50%'}} />
                </div>
              </div>
            ))}
          </div>

          <div className="bnav">
            {[
              {icon:'⌂',label:'Inicio',    href:'/usuario',               on:false},
              {icon:'◉',label:'Check-in',  href:'/usuario/checkin',       on:false},
              {icon:'≋',label:'Historial', href:'/usuario/historial',     on:true},
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
