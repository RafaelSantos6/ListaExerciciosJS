        var contadorGeral = 0;
        
        var totalHomens = 0;
        var somaIdadeHomens = 0;

        var totalMulheres = 0;
        var somaPesoMulheres = 0;

        var btRegistrar = document.getElementById("btRegistrar");
        var btReiniciar = document.getElementById("btReiniciar");

        btRegistrar.addEventListener("click", function() {
            var inIdade = document.getElementById("inIdade");
            var inPeso = document.getElementById("inPeso");
            var inSexo = document.getElementById("inSexo");

            var idade = Number(inIdade.value);
            var peso = Number(inPeso.value);
            var sexo = inSexo.value;

            if (inIdade.value === "" || inPeso.value === "" || idade <= 0 || peso <= 0) {
                alert("Por favor, preencha idade e peso com valores válidos.");
                inIdade.focus();
                return;
            }

            if (sexo === "M") {
                totalHomens++;             // Conta o homem
                somaIdadeHomens += idade;  // Acumula a idade dele
            } else {
                totalMulheres++;           // Conta a mulher
                somaPesoMulheres += peso;  // Acumula o peso dela
            }

            contadorGeral++; // Conta a pessoa independente do sexo

            
            document.getElementById("outContador").textContent = contadorGeral;
            document.getElementById("outTotalHomens").textContent = totalHomens;
            document.getElementById("outTotalMulheres").textContent = totalMulheres;

            if (totalHomens > 0) {
                var mediaIdade = somaIdadeHomens / totalHomens;
                document.getElementById("outMediaIdadeH").textContent = mediaIdade.toFixed(1) + " anos";
            }

            if (totalMulheres > 0) {
                var mediaPeso = somaPesoMulheres / totalMulheres;
                document.getElementById("outMediaPesoM").textContent = mediaPeso.toFixed(2) + " kg";
            }

            inIdade.value = "";
            inPeso.value = "";
            inIdade.focus(); 

            if (contadorGeral === 10) {
                btRegistrar.disabled = true;
                btRegistrar.textContent = "Dados Completos";
                alert("Fim da coleta de dados! Confira os resultados.");
            }
        });

        btReiniciar.addEventListener("click", function() {
            location.reload();
        });
