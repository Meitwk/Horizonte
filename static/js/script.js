console.log("Conexión exitosa...");


function login() {
    let ingresar =
        document.querySelector(".ingresar").value;
    if (ingresar === "") {
        alert("Ingresa tu correo")
    } else {
        alert(`Bienvenido ${ingresar}`)
    }
}

const botones = document.querySelectorAll(".agregar, .agregar2, .agregar3");
const contador = document.querySelector(".contador");

let carrito = 0;

botones.forEach((boton) => {
    boton.onclick = () => {
        carrito++;
        contador.innerText = `${carrito}`;
    };
});

const video = document.querySelector(".videoCambio");

const videoOriginal = "static/video/laBiblioteca.mp4";
const videoNuevo = "static/video/bibliotecaNacional.mp4";

video.addEventListener('mouseover', () => {
    video.src = videoNuevo;
    video.load(); 
    video.play();
});

video.addEventListener('mouseout', () => {
    video.src = videoOriginal;
    video.load();
    video.play();
});