document.addEventListener('DOMContentLoaded', function () {
  const formDatas = document.querySelectorAll('.form-data');

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
        input.style.backgroundColor = '#2e2e2e';
        input.style.color = '#fff';
      });
    });
  });
});

function prepararYEnviarPorWhatsApp() {
  // Obtener la información de los resultados seleccionados
  const resultados = [];
  const formDatas = document.querySelectorAll('.form-data');

  formDatas.forEach((formData, index) => {
    const inputs = formData.querySelectorAll('.input-data');
    let resultadoSeleccionado = null;

    inputs.forEach((input) => {
      if (input.style.backgroundColor === 'rgb(46, 46, 46)') {
        resultadoSeleccionado = input.value;
      }
    });

    resultados.push(`Partido ${index + 1} = ${resultadoSeleccionado}`);
  });

  // Crear el mensaje de WhatsApp con los resultados
  const mensajeWhatsApp = 'Mi Prode:\n' + resultados.join('\n');

  // Número de teléfono al que enviar el mensaje (reemplaza con el número deseado)
  const numeroTelefono = '3465405225';

  // Formatear el mensaje para la URL
  const mensajeWhatsAppCodificado = encodeURIComponent(mensajeWhatsApp);

  // Crear el enlace de WhatsApp
  const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeWhatsAppCodificado}`;

  // Abrir la pestaña de WhatsApp en una nueva ventana
  window.open(enlaceWhatsApp, '_blank');
}

const updateForm = document.getElementById('submit-form');

updateForm.addEventListener('click', () => {
  location.reload();
});
