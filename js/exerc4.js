 var btGerar = document.getElementById("btGerar");

        btGerar.addEventListener("click", function() {
            // 1. Obter os valores e o container
            var inNum1 = document.getElementById("inNum1");
            var inNum2 = document.getElementById("inNum2");
            var container = document.getElementById("containerTabela");

            var n1 = Number(inNum1.value);
            var n2 = Number(inNum2.value);

            // Validação simples
            if (inNum1.value === "" || inNum2.value === "") {
                alert("Por favor, preencha os dois números.");
                return;
            }

            // 2. Limpar conteúdo anterior (caso já exista uma tabela)
            container.innerHTML = "";

            // 3. Criar o elemento TABLE e o corpo da tabela
            var tabela = document.createElement("table");
            
            // --- Cabeçalho da Tabela ---
            var thead = document.createElement("thead");
            var trHead = document.createElement("tr");
            
            var thOperacao = document.createElement("th");
            thOperacao.textContent = "Operação";
            
            var thResultado = document.createElement("th");
            thResultado.textContent = "Resultado";

            // Monta o cabeçalho
            trHead.appendChild(thOperacao);
            trHead.appendChild(thResultado);
            thead.appendChild(trHead);
            tabela.appendChild(thead);

            // --- Corpo da Tabela (Cálculos) ---
            var tbody = document.createElement("tbody");

            // Vamos criar uma lista de objetos para facilitar o loop
            // Isso evita repetir código para cada operação
            var operacoes = [
                { nome: "Soma (+)", valor: n1 + n2 },
                { nome: "Produto (*)", valor: n1 * n2 },
                { nome: "Divisão (/)", valor: (n2 !== 0) ? (n1 / n2).toFixed(2) : "Erro (divisão por 0)" },
                { nome: "Resto (%)", valor: (n2 !== 0) ? (n1 % n2) : "Erro" }
            ];

            // Loop para criar as linhas (TR) e células (TD)
            operacoes.forEach(function(op) {
                var tr = document.createElement("tr");

                var tdNome = document.createElement("td");
                tdNome.textContent = op.nome;

                var tdValor = document.createElement("td");
                tdValor.textContent = op.valor;
                // Deixa em negrito o resultado
                tdValor.style.fontWeight = "bold"; 

                tr.appendChild(tdNome);
                tr.appendChild(tdValor);
                tbody.appendChild(tr);
            });

            tabela.appendChild(tbody);

            // 4. Finalmente, adiciona a tabela completa ao container na página
            container.appendChild(tabela);
        });