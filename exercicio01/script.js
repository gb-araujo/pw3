let nome = prompt("Digite seu nome: ");
function capturaNome (nome) {
    
    let captura = document.getElementById("nome")
    const modNome = nome[0].toUpperCase() + nome.slice(1);
    captura.innerHTML = modNome
};

capturaNome(nome)
