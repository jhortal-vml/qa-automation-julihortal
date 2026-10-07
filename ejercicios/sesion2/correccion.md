# Corrección — Sesión 2

**Archivo corregido:** `ejercicios/sesion2/tareaSesion2.ts`

¡Muy buen trabajo! Se nota el avance respecto de la sesión 1: acá todo está tipado con la interface y ya no aparece ningún `any`.

## Verificación

- `npx tsx tareaSesion2.ts` → corre sin errores y, después de los 500ms, imprime los 3 casos formateados.
- `npx tsc --noEmit` (con `strict: true`) → sin errores de tipos.

## Lo que está bien

- La interface `CasoDeTest` tiene las cuatro propiedades con los tipos pedidos.
- El array está tipado con la interface y tiene 3 casos.
- `obtenerCasosDeTest()` devuelve `Promise<CasoDeTest[]>` y resuelve a los 500ms con `setTimeout`, tal como pedía la consigna.
- `main()` es `async`, hace `await` y recorre con `forEach` usando `formatearCaso`.
- `formatearCaso` quedó más corta que en la sesión 1 gracias al operador ternario.
