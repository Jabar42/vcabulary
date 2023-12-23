document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault();
    var userNumber = document.getElementById('inputNumber').value;
    var baseUrl = "https://tusitio.com/pagina?parametro=";
    var finalUrl = baseUrl + userNumber;
    window.location.href = finalUrl;
});
