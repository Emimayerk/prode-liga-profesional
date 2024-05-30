document.addEventListener('DOMContentLoaded', () => {
  const formDatas = document.querySelectorAll('.form-data');
  const userInputs = document.querySelectorAll('.user-data');

  formDatas.forEach((formData) => {
    const inputs = formData.querySelectorAll('.input-data');

    inputs.forEach((input) => {
      input.addEventListener('click', function () {
        const selectedOption = input.value;

        // Desmarcar todas las opciones en el mismo partido antes de marcar la actual
        inputs.forEach((otherInput) => {
          otherInput.style.backgroundColor = '';
          otherInput.style.color = '';
        });

        // Marcar la opción actual
        input.style.backgroundColor = '#45661a';
        input.style.color = '#f0e7d6';
      });
    });
  });

  const updateForm = document.getElementById('submit-form');

  updateForm.addEventListener('click', function () {
    // Obtener la información de los resultados seleccionados
    const resultados = [];
    formDatas.forEach((formData, index) => {
      const inputs = formData.querySelectorAll('.input-data');
      let resultadoSeleccionado = null;

      inputs.forEach((input) => {
        if (input.style.backgroundColor === 'rgb(69, 102, 26)') {
          resultadoSeleccionado = input.value;
        }
      });

      resultados.push(`Partido ${index + 1} = ${resultadoSeleccionado}`);
    });

    // Obtener la información de los usuarios
    const datosUsuario = obtenerDatosUsuario();

    // Crear el mensaje de WhatsApp con los resultados y los datos del usuario
    const mensajeWhatsApp = 'Mi Prode:\n' + resultados.join('\n') + '\n\nDatos del Usuario:\n' + datosUsuario.join('\n');

    // Número de teléfono al que enviar el mensaje (reemplaza con el número deseado)
    const numeroTelefono = '+5493416725781';

    // Formatear el mensaje para la URL
    const mensajeWhatsAppCodificado = encodeURIComponent(mensajeWhatsApp);

    // Crear el enlace de WhatsApp
    const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeWhatsAppCodificado}`;

    // Abrir la pestaña de WhatsApp en una nueva ventana
    window.open(enlaceWhatsApp, '_blank');
  });

  // Función para obtener los datos del usuario
  function obtenerDatosUsuario() {
    const datosUsuario = [];

    userInputs.forEach((input) => {
      datosUsuario.push(`${input.placeholder}: ${input.value}`);
    });

    return datosUsuario;
  }
});
