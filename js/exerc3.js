 var contagem = 0;
        var somaPares = 0;
        var somaPrimos = 0;
        var historicoNumeros = ""; 

        var btAdicionar = document.getElementById("btAdicionar");
        var btReiniciar = document.getElementById("btReiniciar");

        function verificarPrimo(num) {
            if (num < 2) return false;
            
         
            for (var i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false; 
                }
            }
            return true;
        }

        btAdicionar.addEventListener("click", function() {
            var inNumero = document.getElementById("inNumero");
            var num = Number(inNumero.value);

            if (inNumero.value === "") {
                alert("Digite um número válido!");
                inNumero.focus();
                return;
            }

            if (num % 2 === 0) {
                somaPares += num;
            }

            if (verificarPrimo(num)) {
                somaPrimos += num;
            }

            contagem++;
            if (historicoNumeros === "") {
                historicoNumeros += num;
            } else {
                historicoNumeros += ", " + num;
            }

            document.getElementById("outContagem").textContent = contagem;
            document.getElementById("outHistorico").textContent = "Números digitados: " + historicoNumeros;
            document.getElementById("outSomaPares").textContent = somaPares;
            document.getElementById("outSomaPrimos").textContent = somaPrimos;

            inNumero.value = "";
            inNumero.focus();

            if (contagem === 10) {
                btAdicionar.disabled = true;
                btAdicionar.textContent = "Finalizado";
                alert("Você digitou 10 números. Veja os resultados!");
            }
        });

        btReiniciar.addEventListener("click", function() {
            location.reload();
        });