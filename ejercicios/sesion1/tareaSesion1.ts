/* 2.	Declarar un array de al menos 5 objetos, cada uno representando un caso de prueba con: id (number), titulo (string), prioridad (string: "alta" | "media" | "baja") y 
ejecutado (boolean).*/

const casosDePrueba : { id: number; titulo: string;  prioridad: "alta" | "media" | "baja"; ejecutado: boolean;}[]=[
  {
    id: 1,
    titulo: "Login con credenciales válidas",
    prioridad: "alta",
    ejecutado: true
  },
  {
    id: 2,
    titulo: "Login con contraseña incorrecta",
    prioridad: "alta",
    ejecutado: true
  },
  {
    id: 3,
    titulo: "Cerrar sesión correctamente",
    prioridad: "alta",
    ejecutado: false
  },
  {
    id: 4,
    titulo: "Recuperar contraseña",
    prioridad: "media",
    ejecutado: false
  },
  {
    id: 5,
    titulo: "Editar nombre del perfil",
    prioridad: "media",
    ejecutado: true
  } /*
  {
    id: 6,
    titulo: "Cambiar foto de perfil",
    prioridad: "baja",
    ejecutado: false
  },
  {
    id: 7,
    titulo: "Actualizar dirección de email",
    prioridad: "alta",
    ejecutado: true
  },
  {
    id: 8,
    titulo: "Buscar un usuario existente",
    prioridad: "media",
    ejecutado: true
  },
  {
    id: 9,
    titulo: "Buscar un usuario inexistente",
    prioridad: "baja",
    ejecutado: false
  },
  {
    id: 10,
    titulo: "Enviar formulario con campos completos",
    prioridad: "alta",
    ejecutado: true
  },
  {
    id: 11,
    titulo: "Enviar formulario con campos obligatorios vacíos",
    prioridad: "alta",
    ejecutado: true
  },
  {
    id: 12,
    titulo: "Validar formato incorrecto de email",
    prioridad: "media",
    ejecutado: false
  },
  {
    id: 13,
    titulo: "Subir un archivo válido",
    prioridad: "media",
    ejecutado: true
  },
  {
    id: 14,
    titulo: "Subir un archivo con formato no permitido",
    prioridad: "media",
    ejecutado: false
  },
  {
    id: 15,
    titulo: "Eliminar un elemento de una lista",
    prioridad: "alta",
    ejecutado: true
  },
  {
    id: 16,
    titulo: "Cancelar la eliminación de un elemento",
    prioridad: "baja",
    ejecutado: false
  },
  {
    id: 17,
    titulo: "Acceder a una página sin permisos",
    prioridad: "alta",
    ejecutado: true
  },
  {
    id: 18,
    titulo: "Filtrar resultados por categoría",
    prioridad: "media",
    ejecutado: false
  },
  {
    id: 19,
    titulo: "Ordenar resultados alfabéticamente",
    prioridad: "baja",
    ejecutado: true
  },
  {
    id: 20,
    titulo: "Navegar a la página anterior",
    prioridad: "baja",
    ejecutado: false
  }*/
];

/* 3.	Escribir una función contarPorPrioridad(casos) que recorra el array y devuelva cuántos casos hay de cada prioridad. */

const contarPorPrioridad = () => {
  const resultado = {
    alta: 0,
    media: 0,
    baja: 0
  };

  for (const caso of casosDePrueba) {
    resultado[caso.prioridad]++;
  }

  return resultado;
};
console.log(contarPorPrioridad());


/* 4.	Escribir una función listarPendientes(casos) que devuelva solo los casos donde ejecutado sea false.*/

const listarPendientes = () => {
  const pendientes = [];

  for (const caso of casosDePrueba) {
    if (caso.ejecutado === false) {
      pendientes.push(caso);
    }
  }

  return pendientes;
};
console.log(listarPendientes());

/* 5.	Escribir una arrow function formatearCaso(caso) que reciba un objeto caso y devuelva un string legible, por ejemplo: "#1 - Login válido (alta) - Pendiente".*/


const formatearCaso = (caso: any) => {
let estado;
  if (caso.ejecutado === true) {
    estado = "Ejecutado";
  } else {
    estado = "Pendiente";
  }

  return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${estado}`;
};

/*console.log(formatearCaso(casosDePrueba[4]));*/

/*6.	Al final del archivo, usar forEach para imprimir por consola todos los casos formateados con formatearCaso.*/

casosDePrueba.forEach((caso) => {
  console.log(formatearCaso(caso));
});

/*9.	Bonus: crear una clase GestorDeCasos con un array de casos como propiedad, un método agregarCaso(caso) y 
un método listarPendientes() que reemplace a la función homónima del punto 4.*/

class GestorDeCasos {
  casos: any[] = [];

  agregarCaso(caso: any) {
    this.casos.push(caso);
  }

  listarPendientes() {
    const pendientes = [];

    for (const caso of this.casos) {
      if (caso.ejecutado === false) {
        pendientes.push(caso);
      }
    }

    return pendientes;
  }
}

const gestor = new GestorDeCasos();

casosDePrueba.forEach((caso) => {
  gestor.agregarCaso(caso);
});

console.log(gestor.listarPendientes());