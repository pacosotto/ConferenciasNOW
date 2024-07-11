const carrito = document.querySelector(".container");
const btnCarrito = document.querySelector(".container-carrito");
const conferenciasResultado = document.querySelector("#conferencias");
const listaConferencias = document.querySelector("#carrito tbody");
const carritoConferencias = document.querySelector("#carrito");
let conferenciasCarrito = [];

btnCarrito.addEventListener("click", function () {
  if (carrito.classList.contains("container-ver")) {
    carrito.classList.remove("container-ver");
    return;
  }
  carrito.classList.add("container-ver");
});

carritoConferencias.addEventListener("click", eliminarDelCarrito);

document.addEventListener("DOMContentLoaded", () => {
  mostrarConferencias(conferencias);
  eventListeners();
});

function eventListeners() {
  const btnUno = document.querySelector("#uno");
  btnUno.addEventListener("click", (e) => {
    agregarAlCarrito(e.target.id);
  });
  const btnDos = document.querySelector("#dos");
  btnDos.addEventListener("click", (e) => {
    agregarAlCarrito(e.target.id);
  });
  const btnTres = document.querySelector("#tres");
  btnTres.addEventListener("click", (e) => {
    agregarAlCarrito(e.target.id);
  });
  const btnCuatro = document.querySelector("#cuatro");
  btnCuatro.addEventListener("click", (e) => {
    agregarAlCarrito(e.target.id);
  });
  const btnCinco = document.querySelector("#cinco");
  btnCinco.addEventListener("click", (e) => {
    agregarAlCarrito(e.target.id);
  });
  const btnSeis = document.querySelector("#seis");
  btnSeis.addEventListener("click", (e) => {
    agregarAlCarrito(e.target.id);
  });
}

function mostrarConferencias(conferencias) {
  limpiarHTML();

  conferencias.forEach((conferencias) => {
    const contenedorHTML = document.createElement("div");
    const tituloHTML = document.createElement("h4");
    const fechaHTML = document.createElement("p");
    const horaHTML = document.createElement("p");
    const presentadorHTML = document.createElement("p");
    const btnHTML = document.createElement("button");

    const { id, nombre, dia, hora, presentador } = conferencias;
    tituloHTML.textContent = `${nombre}`;
    fechaHTML.textContent = `Fecha: ${dia}`;
    horaHTML.textContent = `Hora: ${hora}`;
    presentadorHTML.textContent = `${presentador}`;
    btnHTML.textContent = "Inscribirse";
    btnHTML.id = id;

    contenedorHTML.appendChild(tituloHTML);
    contenedorHTML.appendChild(horaHTML);
    contenedorHTML.appendChild(fechaHTML);
    contenedorHTML.appendChild(presentadorHTML);
    contenedorHTML.appendChild(btnHTML);

    contenedorHTML.classList.add("container-conferencia");

    conferenciasResultado.appendChild(contenedorHTML);
  });
}

function limpiarHTML() {
  while (listaConferencias.firstChild) {
    listaConferencias.removeChild(listaConferencias.firstChild);
  }
}

function agregarAlCarrito(id) {
  conferencias.forEach((conferencia) => {
    if (conferencia.id === id) {
      conferenciasCarrito.push(conferencia);
      const btnUno = document.querySelector(`#${id}`);
      btnUno.textContent = "Inscrito";
      btnUno.setAttribute("disabled", "");
      mostrarCarrito();
    }
  });

  console.log(conferenciasCarrito);
}

function mostrarCarrito() {
  limpiarHTML();

  conferenciasCarrito.forEach((conferencia) => {
    const { id, nombre, dia, hora, presentador } = conferencia;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${nombre}</td>
      <td>${dia}</td>
      <td>${hora}</td>
      <td>${presentador}</td>
      <td><a href="#" class="borrar-conferencia" data-id="${id}"> X </a></td>
    `;

    listaConferencias.appendChild(row);
  });
}

function eliminarDelCarrito(e) {
  if (e.target.classList.contains("borrar-conferencia")) {
    const conferenciaId = e.target.getAttribute("data-id");

    conferenciasCarrito = conferenciasCarrito.filter(
      (conferencia) => conferencia.id !== conferenciaId
    );

    const btn = document.querySelector(`#${conferenciaId}`);
    btn.textContent = "Inscribirse";
    btn.removeAttribute("disabled");

    mostrarCarrito();
  }
}
