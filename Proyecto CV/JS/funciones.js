document.getElementById('direccion').onmousedown = function () {
    document.getElementById("Dirección").innerHTML = "San Martín 8133 - Mendoza"
}
document.getElementById('direccion').onmouseup = function () {
    document.getElementById("Dirección").innerHTML = ""
}

document.getElementById('telefono').onmousedown = function () {
    document.getElementById("Teléfono").innerHTML = "(011) 831-9922"
}

document.getElementById('telefono').onmouseup = function () {
    document.getElementById("Teléfono").innerHTML = ""
}

document.getElementById('correo').onmousedown = function () {
    document.getElementById("Correo").innerHTML = "zachary.crawford@example.com"
}

document.getElementById('correo').onmouseup = function () {
    document.getElementById("Correo").innerHTML = ""
}