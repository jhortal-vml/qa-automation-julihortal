
interface CasoDeTest {
    id: number;
    titulo: string;  
    prioridad: string; 
    ejecutado: boolean; 
}

const casosDeTest: CasoDeTest[] = [
  { id: 1, titulo: "Login válido", prioridad: "alta", ejecutado: true },
  { id: 2, titulo: "Login con clave incorrecta", prioridad: "alta", ejecutado: true },
  { id: 3, titulo: "Registro de usuario nuevo", prioridad: "media", ejecutado: false },
]

function obtenerCasosDeTest(): Promise<CasoDeTest[]>  {   
    return new Promise((resolve) => {     
        setTimeout(() => resolve(casosDeTest), 500);   
    }); 
}

const formatearCaso = (caso: CasoDeTest): string => {
  const estado = caso.ejecutado ? "Ejecutado" : "Pendiente";
  return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${estado}`;
};


async function main(): Promise<void> {
  const casos = await obtenerCasosDeTest();

  casos.forEach((caso) => {
    console.log(formatearCaso(caso));
  });
}

main();