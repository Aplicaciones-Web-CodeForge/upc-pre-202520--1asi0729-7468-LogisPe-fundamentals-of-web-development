const boton = document.getElementById('boton');
const titulo = document.getElementById('titulo');

boton.addEventListener('click', () => {
    titulo.textContent = '¡Gracias por hacer clic!';
    alert('Interacción con JavaScript');
});
