import Head from 'next/head';
import Link from 'next/link';
import { REGION_DATA, ADMIN_USERS } from '../../lib/data';

const DAILY = [180,210,195,240,285,260,312,290,330,358];
const DAILY_LABELS = ['26/3','27/3','28/3','29/3','30/3','31/3','01/4','02/4','03/4','04/4'];
const maxD = Math.max(...DAILY);
const SEV = [{l:'Leve',v:58,c:'#3EA66A'},{l:'Moderado',v:31,c:'#E8A020'},{l:'Requiere atención',v:11,c:'#C84B4B'}];

export default function AdminDashboard() {
  return (
    <>
      <Head><title>Dashboard — AIvora Admin</title></Head>
      <div className="admin-wrap">
        <Sidebar active="dashboard" />
        <main className="admin-main">
          <div className="ah1">Panel de control</div>
          <div className="ah1-sub">Sábado, 5 de abril 2025 · Actualizado hace 3 min</div>

          {/* KPIs */}
          <div className="kpi-grid">
            <div className="kpi"><div className="kpi-lbl">USUARIOS REGISTRADOS</div><div className="kpi-val" style={{color:'var(--navy)'}}>9,720</div><div className="kpi-delta" style={{color:'var(--green)'}}>+4.2% esta semana</div></div>
            <div className="kpi"><div className="kpi-lbl">CHECK-INS HOY</div><div className="kpi-val" style={{color:'var(--terra)'}}>358</div><div className="kpi-delta" style={{color:'var(--green)'}}>+12% vs ayer</div><div className="kpi-note">Pico: 9–10 AM</div></div>
            <div className="kpi"><div className="kpi-lbl">CASOS URGENTES HOY</div><div className="kpi-val" style={{color:'var(--red)'}}>38</div><div className="kpi-delta" style={{color:'var(--red)'}}>+3 vs ayer</div><div className="kpi-note">11% del total</div></div>
            <div className="kpi"><div className="kpi-lbl">PROFESIONALES ACTIVOS</div><div className="kpi-val" style={{color:'var(--sage)'}}>96</div><div className="kpi-delta" style={{color:'var(--green)'}}>+8 verificados</div></div>
          </div>

          <div style={{display:'flex',gap:16,marginBottom:18,flexWrap:'wrap'}}>
            {/* Daily chart */}
            <div className="cc" style={{flex:2,minWidth:300}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
                <h3 style={{margin:0}}>Check-ins diarios (últimos 10 días)</h3>
                <span className="badge" style={{background:'rgba(62,166,106,.14)',color:'var(--green)'}}>↗ EN CRECIMIENTO</span>
              </div>
              <svg viewBox="0 0 500 140" style={{width:'100%',height:140,overflow:'visible'}}>
                <defs>
                  <linearGradient id="dg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C4623A" stopOpacity=".22"/>
                    <stop offset="100%" stopColor="#C4623A" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {[25,50,75,100].map(pct=>(
                  <line key={pct} x1="0" y1={130-(pct/100)*115} x2="500" y2={130-(pct/100)*115} stroke="#F2E8DA" strokeWidth="1"/>
                ))}
                <path d={`M ${DAILY.map((v,i)=>`${i*(500/9)},${130-(v/maxD)*115}`).join(' L ')} L ${9*(500/9)},130 L 0,130 Z`} fill="url(#dg)"/>
                <polyline points={DAILY.map((v,i)=>`${i*(500/9)},${130-(v/maxD)*115}`).join(' ')} fill="none" stroke="#C4623A" strokeWidth="2.5" strokeLinejoin="round"/>
                {DAILY.map((v,i)=><circle key={i} cx={i*(500/9)} cy={130-(v/maxD)*115} r="3.5" fill="#C4623A"/>)}
                {DAILY_LABELS.map((l,i)=><text key={i} x={i*(500/9)} y="145" textAnchor="middle" fontSize="9" fill="#7A6A63">{l}</text>)}
              </svg>
            </div>
            {/* Severidad */}
            <div className="cc" style={{flex:1,minWidth:200}}>
              <h3>Distribución de severidad</h3>
              <svg viewBox="0 0 200 130" style={{width:'100%',height:130}}>
                {(() => {
                  let cumAngle = -90;
                  const cx=100,cy=70,r=52,ri=32;
                  return SEV.map((s,i)=>{
                    const pct = s.v/100;
                    const startAngle = cumAngle*(Math.PI/180);
                    cumAngle += pct*360;
                    const endAngle = cumAngle*(Math.PI/180);
                    const x1=cx+r*Math.cos(startAngle),y1=cy+r*Math.sin(startAngle);
                    const x2=cx+r*Math.cos(endAngle),y2=cy+r*Math.sin(endAngle);
                    const xi1=cx+ri*Math.cos(startAngle),yi1=cy+ri*Math.sin(startAngle);
                    const xi2=cx+ri*Math.cos(endAngle),yi2=cy+ri*Math.sin(endAngle);
                    const large = pct>0.5?1:0;
                    return (
                      <path key={i} d={`M ${xi1} ${yi1} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} L ${xi2} ${yi2} A ${ri} ${ri} 0 ${large} 0 ${xi1} ${yi1} Z`}
                        fill={s.c} strokeWidth="2" stroke="white"/>
                    );
                  });
                })()}
                <text x="100" y="70" textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="700" fill="#2D2320">Hoy</text>
              </svg>
              <div style={{display:'flex',flexDirection:'column',gap:5}}>
                {SEV.map(s=>(
                  <div key={s.l} style={{display:'flex',alignItems:'center',gap:7}}>
                    <div style={{width:10,height:10,borderRadius:3,background:s.c,flexShrink:0}} />
                    <span style={{fontSize:11,color:'var(--gray)',flex:1}}>{s.l}</span>
                    <span style={{fontSize:11,fontWeight:700,color:s.c}}>{s.v}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export function Sidebar({ active }: { active: string }) {
  const items = [
    {id:'dashboard',icon:'📊',label:'Dashboard',  href:'/admin'},
    {id:'usuarios', icon:'👥',label:'Usuarios',   href:'/admin/usuarios'},
    {id:'pros',     icon:'🩺',label:'Profesionales',href:'/admin/profesionales'},
  ];
  return (
    <div className="admin-side">
      <div className="aside-logo">
        {/* Logo: reemplaza por <img src="/logo.png" width={38} height={38} /> */}
        <img src="/logo1.png" width={80} height={80} />
        <text style={{fontSize:80,fontWeight:'bold',color:'var(--navy)'}}> </text>
        <div className="aside-name">AIvora</div>
        <div className="aside-sub">PANEL ADMIN</div>
      </div>
      {items.map(item=>(
        <Link key={item.id} href={item.href} className={`aside-btn ${active===item.id?'on':''}`}>
          <span style={{fontSize:16}}>{item.icon}</span>
          <span className="aside-lbl">{item.label}</span>
        </Link>
      ))}
      <div style={{flex:1}} />
      <div className="aside-foot">
        <p>Admin Principal<br/><strong style={{color:'rgba(255,255,255,.7)'}}>MINSA / AIvora</strong></p>
      </div>
    </div>
  );
}
