const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    const navbar = document.getElementById('main-aside');
    if (navbar.style.display === "block" || navbar.style.display === "") {
        collapseNavBar();
    } else {
        showNavBar();
    }
});
const collapseNavBar = () => {
    const navbar = document.getElementById('main-aside');
    const top = document.getElementById('top');
    navbar.style.display = "none";
}
const showNavBar = () => {
    const navbar = document.getElementById('main-aside');
    navbar.style.display = "block";
}
function trocaCor(check){
    if(event.type === "mouseover"){check.target.style.border = "2px solid var(--c-secondary)";	
} else if(event.type === "mouseout"){
	check.target.style.border = "2px solid var(--c-primary)";
}
}
const inputs = document.querySelectorAll('.date-input');
inputs.forEach(input => {
  input.addEventListener('mouseover', trocaCor);
  input.addEventListener('mouseout', trocaCor);
});
function openModal(){
  const modal = document.getElementById('modal');
   
    modal.style.display = 'flex'; 

}
function closeModal(){
	const modal = document.getElementById('modal');
   
    modal.style.display = 'none';
	
const div = document.querySelector('.modal'); 

const elements = div.querySelectorAll('input, textarea');

elements.forEach(element => {
  if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
    element.value = '';
  }
});

}	
	
  function submit(){
    const nome = document.getElementById('Nome').value;
	const checkIn = document.getElementById('modal-check-in').value;
	const checkOut = document.getElementById('modal-check-out').value;
	const room = document.getElementById('room-number').value;
    const img = document.createElement('img');
	img.src = "assets/images/nao.png";
	img.width = 20;
	img.height = 20;
	
   	const data = new Date();   
	const datacheckout = new Date(document.getElementById('modal-check-out').value);	
    let ativo = "Não";
		if (data <= datacheckout) {
            ativo = "Sim";			
            } else {
            ativo = "Não"; 
            }

    if(nome && checkIn && checkOut){
		const table = document.getElementById('table');
		let novalinha = table.insertRow();
		
		const celulaNome = novalinha.insertCell(0);
		const celulaCheckin = novalinha.insertCell(1);
		const celulaCheckout = novalinha.insertCell(2);
		const celularoom = novalinha.insertCell(3);
		const celulaAtivo = novalinha.insertCell(4);
		const celulaTool = novalinha.insertCell(5);
		
		celulaNome.textContent = nome;
		celulaCheckin.textContent = checkIn;
		celulaCheckout.textContent = checkOut;
		celularoom.textContent = room;	
        celulaAtivo.textContent = ativo;
        celulaTool.appendChild(img);
		
		function removerLinha(event) {
            let linha = event.target.parentElement.parentElement;
            linha.remove();
        }

        img.addEventListener("click", removerLinha);
		
		modal.style.display = 'none';
		const div = document.querySelector('.modal'); 

        const elements = div.querySelectorAll('input, textarea');
		elements.forEach(element => {
  if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
    element.value = '';
  }
});
	}else{
		alert('Por favor preencha todos os formulários.');
	}	
};


       function filtrarTabela() {
            let inputNome = document.getElementById("filtro-search").value.toLowerCase();
            let checkinValue = document.getElementById("check-in").value;
            let checkoutValue = document.getElementById("check-out").value;

            let checkinDate = checkinValue ? new Date(checkinValue) : null;
            let checkoutDate = checkoutValue ? new Date(checkoutValue) : null;

            let tabela = document.getElementById("table");
            let linhas = tabela.getElementsByTagName("tr");

            for (let i = 1; i < linhas.length; i++) {
                let colunas = linhas[i].getElementsByTagName("td");
                let nome = colunas[0].textContent.toLowerCase();
                let checkin = new Date(colunas[1].textContent);  
                let checkout = new Date(colunas[2].textContent); 

                let exibir = true;

            
                if (inputNome && !nome.includes(inputNome)) {
                    exibir = false;  
                }

                if (checkinDate && checkin < checkinDate) {
                    exibir = false; 
                }

                if (checkoutDate && checkout > checkoutDate) {
                    exibir = false;  
                }

                if (exibir) {
                    linhas[i].style.display = "";  
                } else {
                    linhas[i].style.display = "none";  
                }
            }
        }

        document.getElementById("filtro-search").addEventListener("input", filtrarTabela);
        document.getElementById("check-in").addEventListener("input", filtrarTabela);
        document.getElementById("check-out").addEventListener("input", filtrarTabela);