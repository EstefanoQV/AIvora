# AIvora — Salud Mental para el Perú

Prototipo frontend listo para desplegar en Vercel.

## URLs del proyecto

| Ruta | Descripción |
|------|-------------|
| `/` | Landing principal — elige entre usuario o profesional |
| `/usuario` | Home del usuario (check-in, historial, recursos, apoyo) |
| `/usuario/checkin` | Flujo de check-in emocional |
| `/usuario/resultado` | Resultado y recomendaciones |
| `/usuario/historial` | Historial emocional con gráfico |
| `/usuario/recursos` | Plan 7 días + guías descargables |
| `/usuario/profesionales` | Lista de profesionales |
| `/usuario/profesionales/[id]` | Detalle del profesional (todos redirigen al mismo) |
| `/profesional` | Login del profesional |
| `/profesional/dashboard` | Dashboard del profesional |
| `/profesional/pacientes` | Lista de pacientes |
| `/profesional/pacientes/[id]` | Detalle del paciente (todos redirigen al mismo) |
| `/profesional/perfil` | Perfil del profesional |
| `/admin` | Dashboard admin (acceso solo por URL directa) |
| `/admin/usuarios` | Gestión de usuarios |
| `/admin/profesionales` | Gestión de profesionales |
| `/admin/analiticas` | Analíticas nacionales |

## 🖼️ Agregar el logo

1. Copia tu imagen a `/public/logo.png` (también acepta `.svg` o `.jpg`)
2. Busca el comentario `/* Logo placeholder */` en estos archivos:
   - `pages/index.tsx` — landing principal
   - `pages/profesional/index.tsx` — login profesional
   - `pages/admin/index.tsx` — sidebar admin
3. Reemplaza el bloque `<div style={{...}}>🤍</div>` por:

```tsx
<img src="/logo.png" style={{ width: 68, height: 68, objectFit: 'contain' }} alt="AIvora" />
```

Para el sidebar del admin (38×38px):
```tsx
<img src="/logo.png" style={{ width: 38, height: 38, objectFit: 'contain' }} alt="AIvora" />
```

## 🚀 Deploy en Vercel

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en local
npm run dev
# → http://localhost:3000

# 3. Deploy
npx vercel
# o conecta el repositorio desde vercel.com
```

## Estructura de archivos

```
aivora/
├── pages/
│   ├── index.tsx              ← Landing (/)
│   ├── _app.tsx
│   ├── usuario/
│   │   ├── index.tsx          ← /usuario
│   │   ├── checkin.tsx
│   │   ├── resultado.tsx
│   │   ├── historial.tsx
│   │   ├── recursos.tsx
│   │   └── profesionales/
│   │       ├── index.tsx      ← /usuario/profesionales
│   │       └── [id].tsx       ← /usuario/profesionales/:id
│   ├── profesional/
│   │   ├── index.tsx          ← /profesional (login)
│   │   ├── dashboard.tsx
│   │   ├── perfil.tsx
│   │   └── pacientes/
│   │       ├── index.tsx
│   │       └── [id].tsx
│   └── admin/
│       ├── index.tsx          ← /admin (solo por URL directa)
│       ├── usuarios.tsx
│       ├── profesionales.tsx
│       └── analiticas.tsx
├── lib/
│   └── data.ts                ← Todos los datos mock
├── styles/
│   └── globals.css            ← Tokens de diseño + animaciones
└── public/
    └── logo.png               ← ← ← PON TU LOGO AQUÍ
```

## Datos mock

Todos los datos están en `lib/data.ts`. Como es un prototipo:
- Los 5 profesionales en la lista redirigen todos al perfil de **Dra. Carmen Huanca**
- Los 5 pacientes en la lista redirigen todos al detalle de **María G.**
- Los check-ins y resultados son siempre los mismos valores demo

Para conectar a una API real, reemplaza las importaciones de `lib/data.ts` por llamadas a fetch.
