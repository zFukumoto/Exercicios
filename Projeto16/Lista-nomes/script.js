let nomes = ["gabriel", "maria", "joão", "ana", "pedro", "lucas", "mariana", "carlos", "juliana", "fernando", "carla", "ricardo", "sandra", "roberto", "paula", "andré", "marcos", "adriana", "bruno", "ricardo"];
function carregarNomes(){
    let itensLista = '';
    for(indice in nomes){
        let nome = nomes[indice];
        itensLista += `<li class="list-group-item">${nome}</li>`;
    }
    document.getElementById('lista').innerHTML = itensLista;
};