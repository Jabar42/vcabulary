document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener el número de usuario y el texto del formulario
    var userNumber = document.getElementById('inputNumber').value;
    var userText = document.getElementById('miTexto').value;

    // Base del enlace de WhatsApp y codificación del texto para URL
    var whatsappBase = "https://wa.me/";
    var encodedText = encodeURIComponent(userText);

    // Construir el enlace final
    var finalUrl = whatsappBase + userNumber + "?text=" + encodedText;

    // Redirigir al usuario a WhatsApp
    window.open(finalUrl, '_blank');
});
