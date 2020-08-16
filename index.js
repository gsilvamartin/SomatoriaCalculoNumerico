function somaPrincipal(){
    var base = 10;
    var mantissa = 4;
    var constantePrincipal = 10000;

    var valorFloatConstante;
    var valorFloatSomatoria;

    var x = parseFloat(document.getElementById('valor-x').value); 
    var n = parseInt(document.getElementById('valor-n').value);

    var resultadoMultiplicacao = (x * n);
    
    var baseMantissa = 5;
    var baseFinalNumero = 0;
    var baseMultiplicacao = resultadoMultiplicacao.toString().length; 

    if(baseMantissa === baseMultiplicacao){
        //aqui a base maior vai ser 5

        baseFinalNumero = 5;
        valorFloatSomatoria = parseFloat("0." + resultadoMultiplicacao).toFixed(mantissa);
        valorFloatConstante = parseFloat("0." + constantePrincipal).toFixed(mantissa);
    }else if(baseMantissa > baseMultiplicacao){
        //aqui a base maior vai ser 5

        var diferencaBases = baseMantissa - baseMultiplicacao;

        baseFinalNumero = 5;
        valorFloatConstante = parseFloat("0." + constantePrincipal).toFixed(mantissa);
        valorFloatSomatoria = "0.";

        for(var i=0; i<diferencaBases; i++){
            valorFloatSomatoria = valorFloatSomatoria + "0";
        }

        valorFloatSomatoria = valorFloatSomatoria + resultadoMultiplicacao;
    }else if(baseMantissa < baseMultiplicacao){
        //aqui a base maior é indefinida

        baseFinalNumero = baseMultiplicacao;
        var diferencaBases = baseMultiplicacao - baseMantissa;

        valorFloatSomatoria = parseFloat("0." + baseMultiplicacao).toFixed(4);
        valorFloatConstante = "0.";

        for(var i=0; i<diferencaBases; i++){
            valorFloatConstante = valorFloatConstante + "0";
        }

        valorFloatConstante = parseFloat(valorFloatConstante).toFixed(4);
    }

    var resultado = (valorFloatConstante - valorFloatSomatoria) * baseFinalNumero;

    document.getElementById('valor-arredondado').innerHTML = resultado.toFixed(4);
    document.getElementById('valor-truncado').innerHTML = truncar(resultado, 4);
}

function truncar(num, places) {
    return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
}