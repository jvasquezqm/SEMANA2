function mostrarDetalles(id) {
  var detalles = document.getElementById(id);
  if (detalles.style.display === "none") {
    detalles.style.display = "table-row";
  } else {
    detalles.style.display = "none";
  }
}
