$(function(){
    $('button').bind('click',function(){
        var altura = $('#altura').val();
        var peso = $('#peso').val();

        altura = altura.replace(',','.');
        peso = peso.replace(',','.');

        //IMC = peso + altura²
        var imc = peso / (altura * altura);
        /*
        Baixo peso muito grave = IMC de 16 kg/m²
        Baixo peso grave = IMC entre 16 e 16,99 kg/m²
        Baixo peso = IMC entre 17,00 e 18,49 kg/m²
        Peso normal = IMC entre 18,50 e 24,99 kg/m²
        Sobrepeso = IMC entre 25,00 e 29,99 kg/m²
        Obesidade grau I = IMC entre 30,00 e 34,99 kg/m²
        Obesidade grau II = IMC entre 35,00 e 39,99 kg/m²
        Obesidade grau III = IMC acima de 40 kg/m²
        */

        if(imc < 16){
            var traducao = 'Baixo peso muito grave';
        }else if(imc >= 16 && imc < 16.99){
            var traducao = 'Baixo peso grave';
        }else if(imc >= 17 && imc < 18.49){
            var traducao = 'Baixo peso';
        }else if(imc >= 18.50 && imc < 24.99){
            var traducao = 'Peso normal';
        }else if(imc >= 25 && imc < 29.99){
            var traducao = 'Sobrepeso';
        }else if(imc >= 30 && imc < 34.99){
            var traducao = 'Obesidade grau I';
        }else if(imc >= 35 && imc < 39.99){
            var traducao = 'Obesidade grau II';
        }else if(imc >= 40){
            var traducao = 'Obesidade grau III';
        }
        $('#resultado').html("Seu IMC é: "+imc+" kg/m² e seu status é: "+traducao);
    });
});