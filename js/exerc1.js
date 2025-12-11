        var maiorAltura = 0;
        var menorAltura = 0;
        var somaAlturaMulheres = 0;
        var contaMulheres = 0;
        var contaHomens = 0;
        var totalPessoas = 0;

        var btAdicionar = document.getElementById("btAdicionar");
        var btLimpar = document.getElementById("btLimpar");

        btAdicionar.addEventListener("click", function() {
            var inAltura = document.getElementById("inAltura");
            var inSexo = document.getElementById("inSexo");
            
            var altura = Number(inAltura.value);
            var sexo = inSexo.value;

            if (inAltura.value === "" || altura <= 0 || totalPessoas >= 15) {
                alert("Informe uma altura válida ou limite de 15 pessoas atingido!");
                return;
            }


            if (totalPessoas === 0) {
                maiorAltura = altura;
                menorAltura = altura;
            } else {
                if (altura > maiorAltura) {
                    maiorAltura = altura;
                }
                if (altura < menorAltura) {
                    menorAltura = altura;
                }
            }

            if (sexo === "F") {
                somaAlturaMulheres += altura;
                contaMulheres++;
            } else {
                contaHomens++;
            }

            totalPessoas++;

            document.getElementById("outTotal").textContent = totalPessoas;
            document.getElementById("outMaior").textContent = maiorAltura.toFixed(2);
            document.getElementById("outMenor").textContent = menorAltura.toFixed(2);
            document.getElementById("outNumHomens").textContent = contaHomens;

            if (contaMulheres > 0) {
                var media = somaAlturaMulheres / contaMulheres;
                document.getElementById("outMediaMulher").textContent = media.toFixed(2);
            }

            inAltura.value = "";
            inAltura.focus();
        });

        btLimpar.addEventListener("click", function() {
            location.reload(); // Recarrega a página
        });
