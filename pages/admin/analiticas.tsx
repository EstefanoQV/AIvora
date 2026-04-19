import Head from 'next/head';
import { REGION_DATA } from '@/lib/data';
import { Sidebar } from './index';

const MONTHLY = [{m:'Enero',u:2100,c:4200},{m:'Febrero',u:3400,c:7100},{m:'Marzo',u:6200,c:13000},{m:'Abril',u:9720,c:18500}];
const maxU = Math.max(...MONTHLY.map(m=>m.c));
const HEAT_VALS = [3,5,8,22,38,42,28,18,14,12,16,24];
const maxH = Math.max(...HEAT_VALS);
const INSIGHTS = [
  {icon:'🏆',label:'Región más activa',val:'Cajamarca',   note:'4,820 usuarios · 312 hoy',   c:'var(--terra)'},
  {icon:'⚠️',label:'Mayor % urgentes', val:'Chota', note:'13% del total regional',     c:'var(--red)'},
  {icon:'📱',label:'Hora pico de uso', val:'9–10 AM',note:'35% de check-ins diarios',   c:'var(--blue)'},
  {icon:'🔄',label:'Tasa de retorno',  val:'68%',    note:'≥3 check-ins por semana',    c:'var(--sage)'},
];

export default function AdminAnaliticas() {
  return (
    <>
      <Head><title>Analíticas — AIvora Admin</title></Head>
      <div className="admin-wrap">
        <Sidebar active="analytics" />
        <main className="admin-main">
          <div className="ah1">Analíticas nacionales</div>
          <div className="ah1-sub">Crecimiento histórico · Distribución regional · Patrones de uso</div>

          {/* Growth chart */}
          <div className="cc">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
              <div>
                <h3 style={{margin:0}}>Crecimiento de la plataforma</h3>
                <p style={{fontSize:12,color:'var(--gray)',marginTop:3}}>Usuarios y check-ins por mes</p>
              </div>
              <span className="badge" style={{background:'rgba(62,166,106,.14)',color:'var(--green)'}}>↗ +363% desde enero</span>
            </div>
            {/* Bar chart SVG */}
            <svg viewBox="0 0 500 160" style={{width:'100%',height:160,overflow:'visible'}}>
              {MONTHLY.map((d,i)=>{
                const groupW = 500/MONTHLY.length;
                const barW = groupW*0.3;
                const gap = 4;
                const x1 = i*groupW + groupW*0.12;
                const x2 = x1 + barW + gap;
                const h1 = (d.u/maxU)*130;
                const h2 = (d.c/maxU)*130;
                return (
                  <g key={i}>
                    <rect x={x1} y={140-h1} width={barW} height={h1} rx="5" fill="#C4623A"/>
                    <rect x={x2} y={140-h2} width={barW} height={h2} rx="5" fill="#FFC85C"/>
                    <text x={i*groupW+groupW/2} y="155" textAnchor="middle" fontSize="11" fill="#7A6A63">{d.m}</text>
                  </g>
                );
              })}
              {[25,50,75,100].map(pct=>(
                <line key={pct} x1="0" y1={140-(pct/100)*130} x2="500" y2={140-(pct/100)*130} stroke="#F2E8DA" strokeWidth="1"/>
              ))}
            </svg>
            <div style={{display:'flex',gap:16,justifyContent:'flex-end',marginTop:8}}>
              <div style={{display:'flex',gap:6,alignItems:'center'}}><div style={{width:10,height:10,borderRadius:3,background:'var(--terra)'}} /><span style={{fontSize:11,color:'var(--gray)'}}>Usuarios</span></div>
              <div style={{display:'flex',gap:6,alignItems:'center'}}><div style={{width:10,height:10,borderRadius:3,background:'var(--amber-l)'}} /><span style={{fontSize:11,color:'var(--gray)'}}>Check-ins</span></div>
            </div>
          </div>

          <div style={{display:'flex',gap:16,marginBottom:18,flexWrap:'wrap'}}>
            {/* Full region table */}
            <div className="cc" style={{flex:2,minWidth:300}}>
              <h3>Distribución regional completa</h3>
              <table className="at" style={{marginTop:4}}>
                <thead><tr><th>Región</th><th>Usuarios</th><th>Urgentes</th><th>Profesionales</th></tr></thead>
                <tbody>
                  {REGION_DATA.map(r=>(
                    <tr key={r.r}>
                      <td style={{fontWeight:700}}>{r.r}</td>
                      <td>
                        <div style={{display:'flex',alignItems:'center',gap:7}}>
                          <div style={{flex:1,height:5,background:'var(--cream-d)',borderRadius:99,maxWidth:90}}>
                            <div style={{height:'100%',borderRadius:99,background:'var(--terra)',width:`${Math.round((r.users/4820)*100)}%`}} />
                          </div>
                          <span style={{fontSize:12,color:'var(--gray)',minWidth:38}}>{r.users.toLocaleString()}</span>
                        </div>
                      </td>
                      <td><span className="badge" style={{background:r.urgentes>5?'rgba(200,75,75,.12)':'rgba(232,160,32,.12)',color:r.urgentes>5?'var(--red)':'var(--yellow)'}}>{r.urgentes}</span></td>
                      <td>{r.pros}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Insights */}
            <div style={{flex:1,minWidth:220,display:'flex',flexDirection:'column',gap:10}}>
              {INSIGHTS.map(k=>(
                <div key={k.label} style={{background:'var(--white)',borderRadius:16,padding:'13px 15px',display:'flex',gap:11,alignItems:'center',boxShadow:'0 3px 10px rgba(0,0,0,.07)'}}>
                  <div style={{width:40,height:40,borderRadius:12,background:`${k.c}15`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,flexShrink:0}}>{k.icon}</div>
                  <div>
                    <p style={{fontSize:10,color:'var(--gray)',fontWeight:700,marginBottom:2} as any}>{k.label}</p>
                    <p style={{fontFamily:'var(--f-serif)',fontSize:16,fontWeight:700,color:k.c}}>{k.val}</p>
                    <p style={{fontSize:10.5,color:'var(--gray)'}}>{k.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap */}
          <div className="cc">
            <h3>Actividad por hora del día</h3>
            <p style={{fontSize:12,color:'var(--gray)',marginBottom:14}}>Distribución de check-ins (toda la plataforma)</p>
            <div style={{display:'flex',gap:4,alignItems:'flex-end',height:90}}>
              {HEAT_VALS.map((v,i)=>(
                <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                  <div style={{width:'100%',height:80,background:'var(--cream-d)',borderRadius:'6px 6px 0 0',overflow:'hidden',position:'relative'}}>
                    <div style={{position:'absolute',bottom:0,left:0,right:0,height:`${Math.round((v/maxH)*100)}%`,background:'linear-gradient(var(--terra),var(--amber-l))',borderRadius:'6px 6px 0 0'}} />
                  </div>
                  <span style={{fontSize:9,color:'var(--gray)',fontWeight:600}}>{i*2}h</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
