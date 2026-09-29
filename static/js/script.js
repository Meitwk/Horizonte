console.log("Conexión exitosa...");


function login() {
    let ingresar =
        document.querySelector(".ingresar").value;
    if (ingresar === "") {
        alert("Ingresa tu correo")
    } else {
        alert("Bienvenido")
    }
}

const boton = document.querySelector(".agregar");
const contador = document.querySelector(".contador");
let carrito = 0;
boton.onclick = () => {
    carrito++;
    contador.innerText = `${carrito}`;
}

const imagen = document.querySelector(".imagen");

const imagenOriginal = "static/images/comida-mexicana.jpg";

const imagenNueva = "static/images/comida-mexicana2.jpg";

imagen.addEventListener('mouseover', () => {
    imagen.src = imagenNueva;
});

imagen.addEventListener('mouseout', () => {
    imagen.src = imagenOriginal;
});