// Inicialización (cuando carga la pagina)
let listaDeTareas = [
  {
    identificador: 1,
    descripcion: "Hacer la cama",
    estaListo: false,
  },
  {
    identificador: 2,
    descripcion: "Desayunar",
    estaListo: false,
  },
  {
    identificador: 3,
    descripcion: "Bañarse",
    estaListo: false,
  },
];
let codigo = 4;
const textoEnInput = document.getElementById("txtNuevaTarea");
const resultadoListadoTareas = document.getElementById(
  "resultadoListadoTareas"
);
const totalTareas = document.getElementById("totalTareas");
const totalRealizada = document.getElementById("totalRealizada");
mostrarTabla();
contarCosas();

function mostrarTabla() {
  let html = "";
  for (let listita of listaDeTareas) {
    html += `
    <tr>
      <td> ${listita.identificador} </td>
      <td> ${listita.descripcion} </td>
      <td><input type="checkbox" id="${
        listita.identificador
      }" onchange= "checkboxChanged(${listita.identificador})" ${
      listita.estaListo ? "checked" : ""
    }/></td>
      <td><button type="button" onclick="borrarTarea(${
        listita.identificador
      })" class="btn-close"></button></td>
    </tr>`;
  }
  resultadoListadoTareas.innerHTML = `<table class="table">${html}</table>`;
}

// Cuando hago click en el botón agregar
function agregar() {
  const tarea = {
    identificador: codigo,
    descripcion: textoEnInput.value,
    estaListo: false,
  };
  listaDeTareas.push(tarea);
  textoEnInput.value = "";
  mostrarTabla();
  contarCosas();
  codigo++;
}

// Click en la "X"
function borrarTarea(identificador) {
  const newArray = listaDeTareas.filter(
    (tarea) => tarea.identificador !== identificador
  );
  listaDeTareas = newArray;
  mostrarTabla();
  contarCosas();
}

// Click en un checkbox
function checkboxChanged(identificador) {
  const index = listaDeTareas.findIndex(
    (tarea) => tarea.identificador === identificador
  );
  listaDeTareas[index].estaListo = !listaDeTareas[index].estaListo;
  contarCosas();
}

// Actualiza los totales
function contarCosas() {
  totalTareas.innerHTML = listaDeTareas.length;
  let almacen = 0;
  for (let listita of listaDeTareas) {
    if (listita.estaListo === true) {
      almacen++;
    }
  }
  totalRealizada.innerHTML = almacen;
}
