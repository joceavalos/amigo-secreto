// Lista donde se almacenarán los nombres de los participantes
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios al inicio y final

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function shuffleArray(array) {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para el sorteo.");
        return;
    }

    let shuffled = shuffleArray([...amigos]);
    let asignaciones = {};

    for (let i = 0; i < amigos.length; i++) {
        let giver = amigos[i];
        let receiver = shuffled[i];

        if (giver === receiver) {
            sortearAmigo(); 
            return;
        
        }

        asignaciones[giver] = receiver;
    }

    mostrarResultados(asignaciones);
}

function mostrarResultados(asignaciones) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar resultados anteriores

    for (let persona in asignaciones) {
        let li = document.createElement("li");
        li.textContent = `${persona} regala a ${asignaciones[persona]}`;
        resultadoLista.appendChild(li);
    }
}
function reiniciarLista() {
    amigos = []; // Vaciar la lista de participantes
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
}
