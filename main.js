const form = document.getElementById('form-contato');
const atividades = [];
const notas = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    if(atividades.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} com o número: ${inputTelContato.value} já foi inserido`);
    } else {
        atividades.push(inputNomeContato.value);
        notas.push(parseFloat(inputTelContato.value)); 
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


