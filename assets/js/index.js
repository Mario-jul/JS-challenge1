const precio = 400000
debugger
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const parrafo = document.querySelector('#cantidad');
let cuenta = Number(parrafo.innerHTML)

const btnAdd = document.querySelector('#btnAdd');
btnAdd.onclick = function() {
cuenta = cuenta + 1;
parrafo.innerHTML = cuenta;
actualizarTotal();
};

const btnLess = document.querySelector('#btnLess');
btnLess.onclick = function() {
cuenta = cuenta - 1;
parrafo.innerHTML = cuenta;
actualizarTotal();
};

const totalSpan = document.querySelector(".valor-total");

function actualizarTotal() {
totalSpan.innerHTML = precio * cuenta;
}
actualizarTotal();