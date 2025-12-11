var totalEspectadores = 0;

var somaIdadeOtimo = 0;
var contaOtimo = 0;

var contaRegular = 0;

var contaBom = 0;

var btRegistrar = document.getElementById("btRegistrar");
var btReiniciar = document.getElementById("btReiniciar");

btRegistrar.addEventListener("click", function () {
    var inIdade = document.getElementById("inIdade");
    var inOpiniao = document.getElementById("inOpiniao");

    var idade = Number(inIdade.value);
    var opiniao = Number(inOpiniao.value);


    if (inIdade.value === "" || idade <= 0) {
        alert("Por favor, informe uma idade válida.");
        inIdade.focus();
        return;
    }

    if (totalEspectadores >= 15) {
        alert("Limite de 15 pessoas atingido! Reinicie a pesquisa.");
        return;
    }

    if (opiniao === 3) {
        somaIdadeOtimo += idade;
        contaOtimo++;
    } else if (opiniao === 1) {
        contaRegular++;
    } else if (opiniao === 2) {
        contaBom++;
    }

    totalEspectadores++;


    var mediaOtimo = 0;
    if (contaOtimo > 0) {
        mediaOtimo = somaIdadeOtimo / contaOtimo;
        document.getElementById("outMediaOtimo").textContent = mediaOtimo.toFixed(1) + " anos";
    } else {
        document.getElementById("outMediaOtimo").textContent = "-";
    }

    document.getElementById("outQtdRegular").textContent = contaRegular;

    var porcBom = (contaBom / totalEspectadores) * 100;
    document.getElementById("outPorcBom").textContent = porcBom.toFixed(2);
    document.getElementById("outTotal").textContent = totalEspectadores;

    inIdade.value = "";
    inIdade.focus();

    if (totalEspectadores === 15) {
        btRegistrar.disabled = true;
        btRegistrar.textContent = "Pesquisa Finalizada";
    }
});

btReiniciar.addEventListener("click", function () {
    location.reload();
});
