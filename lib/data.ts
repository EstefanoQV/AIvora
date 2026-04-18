export const PROFESSIONALS = [
  { id:'1', name:'Dra. Carmen Huanca',   spec:'Psicóloga Clínica',      region:'Cajamarca',    rating:4.9, years:12, sessions:312, tags:['Ansiedad','Estrés','Burnout'],     available:true,  avatar:'🌺', colegiatura:'CPS 45823' },
  { id:'2', name:'Lic. Roberto Quispe',  spec:'Psicólogo',              region:'Cajamarca',     rating:4.7, years:8,  sessions:198, tags:['Familia','Duelo','Trauma'],         available:true,  avatar:'🌿', colegiatura:'CPS 38201' },
  { id:'3', name:'Dra. Lucía Torres',    spec:'Psiquiatra',             region:'Cajamarca',     rating:4.8, years:15, sessions:540, tags:['Depresión','Ansiedad'],             available:false, avatar:'🌸', colegiatura:'CMP 65490' },
  { id:'4', name:'Dr. Marcos Condori',  spec:'Doctor Comunitario',  region:'Cajamarca', rating:4.6, years:6,  sessions:145, tags:['Adolescentes','Familia'],           available:true,  avatar:'🌾', colegiatura:'CPS 52340' },
  { id:'5', name:'Dra. Patricia Mamani', spec:'Médico Educativa',    region:'Cajamarca',     rating:4.8, years:10, sessions:267, tags:['Ansiedad','Autoestima'],            available:true,  avatar:'🪷', colegiatura:'CPS 41087' },
];

export const PATIENTS = [
  { id:'1', name:'María G.',  date:'Hoy, 9:41',  nivel:'Moderado',          nivelC:'#E8A020', emoji:'😐', age:27, region:'Cajamarca',    consented:true,  scores:[55,40,72,50,82] },
  { id:'2', name:'Juan P.',   date:'Ayer',        nivel:'Requiere atención', nivelC:'#C84B4B', emoji:'😟', age:34, region:'Cajamarca',    consented:true,  scores:[45,35,30,40,38] },
  { id:'3', name:'Ana R.',    date:'hace 2 días', nivel:'Leve',              nivelC:'#3EA66A', emoji:'😊', age:22, region:'Cajamarca',     consented:false, scores:[78,82,76,85,90] },
  { id:'4', name:'Carlos M.', date:'hace 3 días', nivel:'Moderado',          nivelC:'#E8A020', emoji:'😐', age:41, region:'Cajamarca',     consented:true,  scores:[60,55,62,50,58] },
  { id:'5', name:'Rosa F.',   date:'hace 4 días', nivel:'Leve',              nivelC:'#3EA66A', emoji:'🙂', age:29, region:'Cajamarca', consented:true,  scores:[72,78,80,75,85] },
];

export const ADMIN_USERS = [
  { id:'1', name:'María G.',   region:'Cajamarca',    reg:'01/04/25', checks:7,  nivel:'Moderado',          nivelC:'#E8A020', status:'Activo'   },
  { id:'2', name:'Juan P.',    region:'Cajamarca',    reg:'28/03/25', checks:12, nivel:'Requiere atención', nivelC:'#C84B4B', status:'Activo'   },
  { id:'3', name:'Ana R.',     region:'Cajamarca',     reg:'15/03/25', checks:22, nivel:'Leve',              nivelC:'#3EA66A', status:'Activo'   },
  { id:'4', name:'Carlos M.',  region:'Cajamarca', reg:'10/03/25', checks:8,  nivel:'Moderado',          nivelC:'#E8A020', status:'Inactivo' },
  { id:'5', name:'Rosa F.',    region:'Cajamarca',     reg:'05/03/25', checks:15, nivel:'Leve',              nivelC:'#3EA66A', status:'Activo'   },
  { id:'6', name:'Pedro V.',   region:'Cajamarca',    reg:'01/03/25', checks:3,  nivel:'Moderado',          nivelC:'#E8A020', status:'Activo'   },
  { id:'7', name:'Lucía T.',   region:'Cajamarca',     reg:'20/02/25', checks:31, nivel:'Leve',              nivelC:'#3EA66A', status:'Activo'   },
  { id:'8', name:'Miguel R.',  region:'Cajamarca',    reg:'18/02/25', checks:5,  nivel:'Requiere atención', nivelC:'#C84B4B', status:'Activo'   },
];

export const REGION_DATA = [
  { r:'Cajamarca',        users:4820, activos:312, urgentes:18, pros:42 },
  { r:'Cajamarca',       users:1240, activos:98,  urgentes:7,  pros:14 },
  { r:'Cajamarca',    users:980,  activos:67,  urgentes:4,  pros:11 },
  { r:'Cajamarca',       users:730,  activos:52,  urgentes:5,  pros:8  },
  { r:'La Cajamarca', users:620,  activos:41,  urgentes:3,  pros:7  },
  { r:'Cajamarca',        users:540,  activos:38,  urgentes:6,  pros:5  },
  { r:'Cajamarca',       users:480,  activos:32,  urgentes:2,  pros:6  },
  { r:'Cajamarca',      users:310,  activos:18,  urgentes:4,  pros:3  },
];

export const WEEK_BARS = [
  {d:'L',v:55,e:'😐'},{d:'M',v:40,e:'😟'},{d:'M',v:72,e:'🙂'},
  {d:'J',v:50,e:'😐'},{d:'V',v:82,e:'😊'},{d:'S',v:65,e:'🙂'},{d:'D',v:0,e:''},
];

export const HIST = [
  {fecha:'01/04',score:55,nivel:'Moderado',         emoji:'😐',c:'#E8A020'},
  {fecha:'31/03',score:40,nivel:'Requiere atención',emoji:'😟',c:'#C84B4B'},
  {fecha:'30/03',score:72,nivel:'Leve',             emoji:'🙂',c:'#3EA66A'},
  {fecha:'28/03',score:50,nivel:'Moderado',         emoji:'😐',c:'#E8A020'},
  {fecha:'26/03',score:82,nivel:'Leve',             emoji:'😊',c:'#3EA66A'},
  {fecha:'24/03',score:65,nivel:'Leve',             emoji:'🙂',c:'#3EA66A'},
  {fecha:'22/03',score:35,nivel:'Requiere atención',emoji:'😟',c:'#C84B4B'},
];

export const PLAN7 = [
  {d:1,done:true, today:false,title:'Respiración 4-7-8',                    icon:'🌬️',min:'3 min'},
  {d:2,done:true, today:false,title:'Escribe 3 cosas buenas del día',        icon:'📝',min:'5 min'},
  {d:3,done:false,today:true, title:'Caminata sin celular',                  icon:'🚶',min:'15 min'},
  {d:4,done:false,today:false,title:'Descanso digital de 1 hora',            icon:'📵',min:'60 min'},
  {d:5,done:false,today:false,title:'Llama a alguien que quieras',           icon:'📞',min:'10 min'},
  {d:6,done:false,today:false,title:'Momento de sol y naturaleza',           icon:'🌿',min:'20 min'},
  {d:7,done:false,today:false,title:'Reflexión: ¿Cómo estoy vs hace 7 días?',icon:'🪞',min:'5 min'},
];

export const GUIDES = [
  {cat:'Ansiedad',  icon:'😮‍💨',title:'¿Qué es la ansiedad y cómo reconocerla?',pages:'4 págs',offline:true},
  {cat:'Estrés',    icon:'🧠', title:'El estrés no es tu enemigo',               pages:'6 págs',offline:true},
  {cat:'Sueño',     icon:'🌙', title:'Cómo dormir mejor sin medicamentos',        pages:'5 págs',offline:false},
  {cat:'Relaciones',icon:'❤️',title:'Comunicar lo que sientes sin dañar',        pages:'8 págs',offline:true},
];

export const REGIONS = ['Lima','Cusco','Arequipa','Piura','La Libertad','Junín','Puno','Loreto','Huánuco','Cajamarca','Tacna','Otras'];

export const CHECKIN_QS = [
  {q:'¿Cómo has dormido estas últimas noches?',          opts:['Bien, descansé','Regular, me costó','Mal, casi no dormí']},
  {q:'¿Tienes energía para el día?',                     opts:['Sí, me siento activo/a','Más o menos','No, estoy agotado/a']},
  {q:'¿Has disfrutado cosas que normalmente te gustan?', opts:['Sí, como siempre','Menos que antes','Nada me llama la atención']},
  {q:'¿Has tenido pensamientos que te preocupen?',       opts:['No, estoy tranquilo/a','Algunos, pero manejables','Sí, y me pesan bastante']},
];
