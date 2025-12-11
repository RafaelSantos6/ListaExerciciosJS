  var btConverter = document.getElementById("btConverter");

        btConverter.addEventListener("click", function() {
            var inData = document.getElementById("inData");
            var outData = document.getElementById("outData");

            var dataTexto = inData.value;


            var partes = dataTexto.split("/");

            if (partes.length !== 3) {
                alert("Formato inválido! Por favor digite no formato dd/mm/aaaa (ex: 01/01/2000)");
                inData.focus();
                return;
            }

            var dia = partes[0];
            var mes = parseInt(partes[1]); 
            var ano = partes[2];

            if (mes < 1 || mes > 12) {
                alert("Mês inválido! Digite entre 01 e 12.");
                return;
            }

            
            var meses = [
                "janeiro", "fevereiro", "março", "abril", "maio", "junho",
                "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
            ];

            var nomeMes = meses[mes - 1];

            outData.textContent = dia + " de " + nomeMes + " de " + ano;
        });