function tellhim() {
    document.getElementById('imcvalue').innerHTML = "";
    document.getElementById('imctext').innerHTML = "";
    var weigth = parseInt(document.getElementById('input_weight').value);
    var height = parseInt(document.getElementById('input_height').value) * .01;
    var result = weigth / (height * height);
    result = parseFloat(result.toFixed(2));

    document.getElementById('imcvalue').innerHTML = "<b>" + result + "</b>";

    if (result < 18.5) {
        document.getElementById('imctext').innerHTML = "<b>Baixo Peso</b>";
    } else if (result >= 18.5 && result <= 24.9) {
        document.getElementById('imctext').innerHTML = "<b>Peso Ideal</b>";
    } else if (result >= 25 && result <= 29.9) {
        document.getElementById('imctext').innerHTML = "<b>Sobrepeso</b>";
    } else if (result >= 30 && result <= 34.9) {
        document.getElementById('imctext').innerHTML = "<b>Obesidade I</b>";
    } else if (result >= 35 && result <= 39.9) {
        document.getElementById('imctext').innerHTML = "<b>Obesidade II</b>";
    } else if (result >= 40) {
        document.getElementById('imctext').innerHTML = "<b>Baixo Peso</b>";
    } else {
        console.log("ERROR IMC NOT CALCULATED!");
    }
}