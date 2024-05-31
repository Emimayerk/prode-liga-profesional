document.addEventListener('DOMContentLoaded', function () {
  // Selecciona todos los inputs de clase "input-test"
  const inputs = document.querySelectorAll('.input-test');

  // Añade un evento de click a cada input
  inputs.forEach((input) => {
    input.addEventListener('click', function () {
      const parentDiv = this.parentElement.parentElement;
      // Remueve la clase "selected" de todos los inputs del mismo partido
      parentDiv.querySelectorAll('.input-test').forEach((item) => {
        item.classList.remove('selected');
        item.style.backgroundColor = ''; // Remueve el color de fondo
        item.style.color = ''; // Remueve el color del texto
        item.style.textDecoration = 'none';
      });

      // Añade la clase "selected" al input clicado
      this.classList.add('selected');
      this.style.backgroundColor = '#fff'; // Color de fondo blanco
      this.style.color = '#45661a'; // Color de texto verde
      this.style.textDecoration = 'underline'; // Color de texto verde
    });
  });

  // Añade evento al botón de enviar
  const submitButton = document.getElementById('submit-form');
  submitButton.addEventListener('click', function () {
    const selectedInputs = document.querySelectorAll('.input-test.selected');
    let message = 'Mi apuesta:\n';

    // Recopila todos los resultados seleccionados
    selectedInputs.forEach((input) => {
      const partido = input.closest('.form-test-data').querySelector('.group-number').innerText;
      message += `${partido}: ${input.value}\n`;
    });

    // Añade datos del usuario si existen
    const userName = document.getElementById('user-name').value;
    const userApellido = document.getElementById('user-apellido').value;
    const userCel = document.getElementById('user-cel').value;
    const userEmail = document.getElementById('user-email').value;
    if (userName) message += `Nombre: ${userName}\n`;
    if (userApellido) message += `Apellido: ${userApellido}\n`;
    if (userCel) message += `Celular: ${userCel}\n`;
    if (userEmail) message += `Email: ${userEmail}\n`;

    // Codifica el mensaje para la URL de WhatsApp
    const whatsappMessage = encodeURIComponent(message);
    const whatsappNumber = '5493416725781'; // Número de WhatsApp destinatario (reemplazar con el número correcto)

    // Abre WhatsApp con el mensaje
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  });
});
