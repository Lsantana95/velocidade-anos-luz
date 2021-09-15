function ConverterLuz() {

    var valorElemento = document.querySelector("#inputForm");
    var valor = valorElemento.value;
    var valorDistanciaKm = Number(valor);

    var valorAnosLuz = Number(valorDistanciaKm * 0.0000000000001057);
    var elementoValorConvertido = document.querySelector(".resultado");
    var valorConvertido = "Ops! Vai demorar para chegar até lá" + valorAnosLuz + " Anos-Luz, para você chegar até essa estrela";
    elementoValorConvertido.innerHTML = valorConvertido;
}