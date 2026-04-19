// lib/data.ts — reemplaza el archivo completo

export const PROFESSIONALS = [
  { id:'1', name:'Dr. Carlos Mendoza',   spec:'Médico General',        region:'Jaén',     rating:4.9, years:14, sessions:890, tags:['Medicina general','Urgencias','Pediatría'],     available:true,  avatar:'👨‍⚕️', colegiatura:'CMP 58234' },
  { id:'2', name:'Dra. Rosa Quispe',     spec:'Cardióloga',            region:'Cajamarca',    rating:4.8, years:12, sessions:640, tags:['Corazón','Hipertensión','Prevención'],        available:true,  avatar:'👩‍⚕️', colegiatura:'CMP 44102' },
  { id:'3', name:'Dr. Luis Huanca',      spec:'Internista',            region:'Cajamarca', rating:4.7, years:18, sessions:1200,tags:['Medicina interna','Diabetes','Tiroides'],     available:false, avatar:'👨‍⚕️', colegiatura:'CMP 31087' },
  { id:'4', name:'Dra. Ana Torres',      spec:'Dermatóloga',           region:'Cutervo',     rating:4.6, years:8,  sessions:420, tags:['Piel','Alergias','Cabello'],               available:true,  avatar:'👩‍⚕️', colegiatura:'CMP 67340' },
  { id:'5', name:'Dr. Jorge Mamani',    spec:'Neumólogo',             region:'San Ignacio',    rating:4.8, years:11, sessions:510, tags:['Pulmones','Asma','Respiración'],          available:true,  avatar:'👨‍⚕️', colegiatura:'CMP 52890' },
];

export const PATIENTS = [
  { id:'1', name:'María G.',  date:'Hoy, 9:41',  nivel:'Consulta pronto', nivelC:'#E8A020', emoji:'🤒', age:27, region:'Cajamarca',     consented:true,  sintoma:'Dolor de cabeza intenso y fiebre',    scores:[55,40,72,50,82] },
  { id:'2', name:'Juan P.',   date:'Ayer',        nivel:'Urgente',         nivelC:'#C84B4B', emoji:'🚨', age:34, region:'Cajamarca',    consented:true,  sintoma:'Dolor en el pecho y dificultad para respirar', scores:[45,35,30,40,38] },
  { id:'3', name:'Ana R.',    date:'hace 2 días', nivel:'Sin urgencia',    nivelC:'#3EA66A', emoji:'😷', age:22, region:'Chota',     consented:false, sintoma:'Resfriado leve y congestion nasal',    scores:[78,82,76,85,90] },
  { id:'4', name:'Carlos M.', date:'hace 3 días', nivel:'Consulta pronto', nivelC:'#E8A020', emoji:'🤢', age:41, region:'Cajamarca',     consented:true,  sintoma:'Náuseas y dolor abdominal persistente', scores:[60,55,62,50,58] },
  { id:'5', name:'Rosa F.',   date:'hace 4 días', nivel:'Sin urgencia',    nivelC:'#3EA66A', emoji:'🤧', age:29, region:'Jaén', consented:true,  sintoma:'Alergia estacional y picazón ocular', scores:[72,78,80,75,85] },
];

export const ADMIN_USERS = [
  { id:'1', name:'María G.',   region:'Cajamarca',     reg:'01/04/25', checks:7,  nivel:'Consulta pronto', nivelC:'#E8A020', status:'Activo'   },
  { id:'2', name:'Juan P.',    region:'Cajamarca',    reg:'28/03/25', checks:12, nivel:'Urgente',         nivelC:'#C84B4B', status:'Activo'   },
  { id:'3', name:'Ana R.',     region:'Celendin',     reg:'15/03/25', checks:22, nivel:'Sin urgencia',    nivelC:'#3EA66A', status:'Activo'   },
  { id:'4', name:'Carlos M.',  region:'Cajamarca', reg:'10/03/25', checks:8,  nivel:'Consulta pronto', nivelC:'#E8A020', status:'Inactivo' },
  { id:'5', name:'Rosa F.',    region:'Cajamarca',     reg:'05/03/25', checks:15, nivel:'Sin urgencia',    nivelC:'#3EA66A', status:'Activo'   },
  { id:'6', name:'Pedro V.',   region:'Cutervo',    reg:'01/03/25', checks:3,  nivel:'Consulta pronto', nivelC:'#E8A020', status:'Activo'   },
  { id:'7', name:'Lucía T.',   region:'Cajamarca',     reg:'20/02/25', checks:31, nivel:'Sin urgencia',    nivelC:'#3EA66A', status:'Activo'   },
  { id:'8', name:'Miguel R.',  region:'Chota',    reg:'18/02/25', checks:5,  nivel:'Urgente',         nivelC:'#C84B4B', status:'Activo'   },
];

export const REGION_DATA = [
  { r:'Cajamarca',        users:4820, activos:312, urgentes:18, pros:42 },
  { r:'Jaén',       users:1240, activos:98,  urgentes:7,  pros:14 },
  { r:'San Ignacio',    users:980,  activos:67,  urgentes:4,  pros:11 },
  { r:'Chota',       users:730,  activos:52,  urgentes:5,  pros:8  },
  { r:'Cutervo', users:620,  activos:41,  urgentes:3,  pros:7  },
  { r:'Cajabamba',        users:540,  activos:38,  urgentes:6,  pros:5  },
  { r:'Celendín',       users:480,  activos:32,  urgentes:2,  pros:6  },
  { r:'Contumazá',      users:310,  activos:18,  urgentes:4,  pros:3  },
];

export const WEEK_BARS = [
  {d:'L',v:1,e:'🤒'},{d:'M',v:0,e:''},{d:'M',v:1,e:'🤧'},
  {d:'J',v:0,e:''},{d:'V',v:2,e:'🤢'},{d:'S',v:1,e:'😷'},{d:'D',v:null,e:''},
];

export const HIST = [
  {fecha:'01/04', nivel:'Consulta pronto', emoji:'🤒', c:'#E8A020', sintoma:'Fiebre y dolor de cabeza'},
  {fecha:'28/03', nivel:'Sin urgencia',    emoji:'🤧', c:'#3EA66A', sintoma:'Resfriado leve'},
  {fecha:'20/03', nivel:'Urgente',         emoji:'🚨', c:'#C84B4B', sintoma:'Dolor en el pecho'},
  {fecha:'15/03', nivel:'Consulta pronto', emoji:'🤢', c:'#E8A020', sintoma:'Náuseas y mareos'},
  {fecha:'08/03', nivel:'Sin urgencia',    emoji:'😷', c:'#3EA66A', sintoma:'Alergia estacional'},
];

export const PLAN7 = [
  {d:1, done:true,  today:false, title:'Tomar temperatura cada 8 horas',        icon:'🌡️', min:'2 min'},
  {d:2, done:true,  today:false, title:'Hidratación: 2 litros de agua',           icon:'💧', min:'Todo el día'},
  {d:3, done:false, today:true,  title:'Tomar el medicamento indicado',           icon:'💊', min:'Con desayuno'},
  {d:4, done:false, today:false, title:'Reposo y evitar esfuerzo físico',          icon:'🛏️', min:'Todo el día'},
  {d:5, done:false, today:false, title:'Registrar síntomas en el historial',       icon:'📋', min:'5 min'},
  {d:6, done:false, today:false, title:'Consulta de seguimiento con tu médico',   icon:'📞', min:'15 min'},
  {d:7, done:false, today:false, title:'Evaluar si los síntomas mejoraron',        icon:'✅', min:'5 min'},
];

export const GUIDES = [
  {cat:'Primeros auxilios', icon:'🩹', title:'Qué hacer ante una emergencia en casa',      pages:'6 págs', offline:true},
  {cat:'Señales de alarma',   icon:'🚨', title:'Síntomas que nunca debes ignorar',          pages:'4 págs', offline:true},
  {cat:'Medicamentos',        icon:'💊', title:'Uso seguro de medicamentos sin receta',     pages:'5 págs', offline:false},
  {cat:'Prevención',          icon:'🛡️', title:'Chequeos preventivos según tu edad',       pages:'7 págs', offline:true},
];

export const REGIONS = ['Lima','Cusco','Arequipa','Piura','La Libertad','Junín','Puno','Loreto','Huánuco','Cajamarca','Tacna','Otras'];

export const CHECKIN_QS = [
  {
    q: '¿Cuál es tu síntoma principal?',
    opts: ['Dolor de cabeza o fiebre', 'Tos o dificultad para respirar', 'Dolor abdominal o náuseas', 'Dolor en el pecho']
  },
  {
    q: '¿Hace cuánto tiempo tienes estos síntomas?',
    opts: ['Menos de 24 horas', 'Entre 2 y 3 días', 'Más de una semana']
  },
  {
    q: '¿Cómo describes la intensidad del malestar?',
    opts: ['Leve, puedo seguir mis actividades', 'Moderado, me cuesta hacer cosas normales', 'Intenso, me impide hacer cualquier cosa']
  },
  {
    q: '¿Tienes alguno de estos síntomas adicionales?',
    opts: ['Fiebre alta (más de 38.5°C)', 'Dificultad para respirar en reposo', 'Ninguno de los anteriores']
  },
];  