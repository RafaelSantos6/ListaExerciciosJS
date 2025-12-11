 var btCalcular = document.getElementById("btCalcular");

        btCalcular.addEventListener("click", function() {
            var inSalario = document.getElementById("inSalario");
            var outResultado = document.getElementById("resultado");

            var salarioAtual = Number(inSalario.value);

            if (inSalario.value === "" || salarioAtual < 0) {
                alert("Por favor, informe um salário válido.");
                inSalario.focus();
                return;
            }

            var percentual = 0;

            if (salarioAtual <= 280) {
                percentual = 20;
            } else if (salarioAtual <= 700) {
                percentual = 15;
            } else if (salarioAtual <= 1500) {
                percentual = 10;
            } else {
                percentual = 5;
            }

            
            var valorAumento = salarioAtual * (percentual / 100);
            var novoSalario = salarioAtual + valorAumento;

            outResultado.innerHTML = 
                "Salário antes do reajuste: <span>R$ " + salarioAtual.toFixed(2) + "</span><br>" +
                "Percentual de aumento aplicado: <span>" + percentual + "%</span><br>" +
                "Valor do aumento: <span>R$ " + valorAumento.toFixed(2) + "</span><br>" +
                "Novo salário: <span>R$ " + novoSalario.toFixed(2) + "</span>";
        });