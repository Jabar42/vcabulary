document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault();
    var userNumber = document.getElementById('inputNumber').value;
    var baseUrl = "https://wa.me/";
    var text = "?text=Hola%2C%20%C2%BFc%C3%B3mo%20est%C3%A1s%3F";
    var finalUrl = baseUrl + userNumber + text;
    window.location.href = finalUrl;
});
