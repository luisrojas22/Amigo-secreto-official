let listaGeneral = []
 function agregarAmigo(){
let nuevoNombre = document.getElementById("amigo").value
if (nuevoNombre === "") {
    alert('Por favor ingrese un un valor válido')
    return
} else{
listaGeneral.push(nuevoNombre)
document.getElementById("amigo").value = ""
console.log(listaGeneral)
mostrarLista();
}
 }
 function mostrarLista(){
    let contenedor = document.getElementById("listaAmigos");
    contenedor.innerHTML = ""
    listaGeneral
 }
