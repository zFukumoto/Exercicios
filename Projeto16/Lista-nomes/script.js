let nomes = ["gabriel", "maria", "joão", "ana", "pedro", "lucas", "mariana", "carlos", "juliana", "fernando", "carla", "ricardo", "sandra", "roberto", "paula", "andré", "marcos", "adriana", "bruno", "ricardo"];
function pesquisarNome(){
    let nomePesquisa = document.getElementById('campoNome').value
    let itensLista = ''
    for(indice in nomes){
        let nome = nomes[indice]
        if(nomePesquisa == nome){
        itensLista += `<li class="list-group-item">${nome}</li>`;
        }
    }
    document.getElementById('lista').innerHTML = itensLista;
}
function carregarNomes(){
    let itensLista = ''
    for(indice in nomes){
        let nome = nomes[indice]
        itensLista += `<li class="list-group-item">${nome}</li>`;
    }
    document.getElementById('lista').innerHTML = itensLista
}