// Declaracion de variables generales
let listaGeneral = []
// Funciones
// Función principal
 function agregarAmigo(){
let nuevoNombre = document.getElementById("amigo").value
if (nuevoNombre === "") {
    alert('Por favor ingrese un valor válido')
    return
} else{
listaGeneral.push(nuevoNombre)
document.getElementById("amigo").value = ""
console.log(listaGeneral)
mostrarLista();
}
 }
 // Subfunciones
 // Uso de Html
 function mostrarLista(){
    let contenedor = document.getElementById("listaAmigos");
    contenedor.innerHTML = ""
 listaGeneral.forEach(function(nombre){
    let li = document.createElement("li")
    li.textContent = nombre
    contenedor.appendChild(li)
 })


};
function sortearAmigo() {
if(listaGeneral.length===0){
    alert("No hay amigos para sortear")
}else{
    let indice = Math.floor(Math.random() * listaGeneral.length);
    let elegido = listaGeneral.splice(indice, 1)[0];

//Por si deseamos que reemplaze h2
document.querySelector("h2").innerHTML = `El amigo secreto es: ${elegido}`

// Cuando queremos a la alerta
   // alert(`El amigo secreto es: ${elegido}`);
    mostrarLista();
}
}