type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//APARTADO 1

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pediatria: Pacientes[] = [];
  
    for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
        pediatria.push(pacientes[i]);
    }
};
return pediatria;
};


const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
): Pacientes[] => {
    const pediatriaYMenorDeDiez: Pacientes[] = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
            pediatriaYMenorDeDiez.push(pacientes[i]);
        }
    }
    return pediatriaYMenorDeDiez;
};


//APARTADO 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].temperatura > 39 && pacientes[i].frecuenciaCardiaca > 100) {
            activarProctolo = true;
            break;
        }
    }

  return activarProctolo;
};


//APARTADO 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
    const reasignados: Pacientes[] = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            reasignados.push({...pacientes[i], especialidad: "Medico de familia" });
        }else{
          reasignados.push(pacientes[i]);
        }
    }
    return reasignados;
};  


//APARTADO 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientes = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      hayPacientes = true;
      break;
    }
  }

  return hayPacientes;
};




//APARTADO 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const numeroTotal: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0
  };

  for (let i = 0; i < pacientes.length; i++) {
    switch (pacientes[i].especialidad) {
      case "Medico de familia":
        numeroTotal.medicoDeFamilia++;
        break;
      case "Pediatra":
        numeroTotal.pediatria++;
        break;
      case "Cardiólogo":
        numeroTotal.cardiologia++;
        break;
    }
  }

  return numeroTotal;
};





console.log(obtenPacientesAsignadosAPediatria(pacientes));
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));
console.log(activarProtocoloUrgencia(pacientes));
console.log(reasignaPacientesAMedicoFamilia(pacientes));
console.log(HayPacientesDePediatria(pacientes));
console.log(cuentaPacientesPorEspecialidad(pacientes));