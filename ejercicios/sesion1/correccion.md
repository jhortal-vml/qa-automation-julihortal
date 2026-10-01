# Corrección — Sesión 1: TypeScript sintaxis base

**Archivo corregido:** `ejercicios/sesion1/casos-test.ts`
**Resultado:** ✅ Excelente.

## Verificación

- `npx tsx casos-test.ts` → corre sin errores.
- `npx tsc --noEmit` (con `strict: true`) → sin errores de tipos.

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 1 | Crear `casos-test.ts` en `ejercicios/sesion1` | ✅ | |
| 2 | Array de ≥ 5 casos con `id`, `titulo`, `prioridad`, `ejecutado` | ✅ | 6 casos. Buen tipado + prioridad con unión de literales |
| 3 | `contarPorPrioridad(casos)` | ✅ | Recorre con `for...of` y devuelve `{ alta: 1, media: 3, baja: 1 }`|
| 4 | `listarPendientes(casos)` | ✅ | Excelente uso de condicional, como tip a futuro, te recomiendo investigar el metodo "filter" de los arrays, sirve justamente para eso. |
| 5 | Arrow function `formatearCaso(caso)` | ✅ | Formato idéntico al pedido: `#1 - Login válido (alta) - Pendiente`. |
| 6 | `forEach` imprimiendo los casos formateados | ✅ | |
| 7 | Correr con `npx tsx` sin errores de tipos | ✅ | |
| 8 | Commit + push en rama nueva + PR | ✅ | PR #1 desde `ejercicio-1`, mergeado a `main`. |