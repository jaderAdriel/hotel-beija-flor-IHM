
        document.addEventListener("DOMContentLoaded", function () {
            const campoHospede = document.querySelector("input[placeholder='Insira o nome do Hóspede']"); // Campo do Hóspede
            const campoCheckin = document.querySelector("#checkin"); // Campo de Data de Check-in
            const campoCheckout = document.querySelector("#checkout"); // Campo de Data de Check-out
            const campoDailyPrice = document.querySelector("#dailyPrice"); // Campo do Preço da Diária
            const campoTotal = document.querySelector("#total"); // Campo do Total
            const campoSubtotal = document.querySelector("#subtotal"); // Campo do Subtotal
    
            // Função para calcular o total baseado nas datas
            function calcularTotal() {
                const checkinDate = new Date(campoCheckin.value);
                const checkoutDate = new Date(campoCheckout.value);
                const timeDifference = checkoutDate - checkinDate;
                const days = timeDifference / (1000 * 3600 * 24); 
    
                // Verifica se a data de Check-out é posterior à de Check-in
                if (days <= 0) {
                    campoTotal.value = "0,00"; 
                    campoSubtotal.value = "0,00"; 
                } else {
                    // Calculando o valor total
                    const dailyPrice = parseFloat(campoDailyPrice.value);
                    const total = dailyPrice * days; 
                    campoTotal.value = total.toFixed(2); 
                    campoSubtotal.value = total.toFixed(2);
                }
            }
    
            // Adicionando eventos para os campos de data
            campoCheckin.addEventListener("change", calcularTotal);
            campoCheckout.addEventListener("change", calcularTotal);
    
            // Validação ao enviar o formulário
            const botaoConfirmar = document.querySelector(".confirm");
    
            botaoConfirmar.addEventListener("click", function (event) {
                // Verifica se o campo Hóspede está vazio=
                if (campoHospede.value.trim() === "") {
                    alert("Por favor, preencha o campo 'Hóspede'.");
                    campoHospede.focus(); 
                    event.preventDefault();
                } 
                // Verifica se o campo Check-in está vazio
                else if (campoCheckin.value.trim() === "") {
                    alert("Por favor, selecione a data de Check-in.");
                    campoCheckin.focus(); 
                    event.preventDefault(); 
                }
                // Verifica se o campo Check-out está vazio
                else if (campoCheckout.value.trim() === "") {
                    alert("Por favor, selecione a data de Check-out.");
                    campoCheckout.focus(); 
                    event.preventDefault(); 
                } 
                // Se todos os campos forem preenchidos corretamente
                else {
                    alert("Enviado com sucesso!");
                }
            });
        });
    