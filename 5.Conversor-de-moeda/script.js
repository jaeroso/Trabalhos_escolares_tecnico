function converter() {

      let valorDolar = document.getElementById("dolar").value;

      let cotacao = 5.50;

      let valorReal = valorDolar * cotacao;

      document.getElementById("resultado").innerHTML =
        "R$ " + valorReal.toFixed(2);

    }
