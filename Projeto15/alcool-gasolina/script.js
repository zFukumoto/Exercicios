function calcularMelhorPreco(){
    let precoAlcool = document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value
    if(precoAlcool != ""){
        if(precoGasolina != ""){
            let resultado = precoAlcool / precoGasolina
            if(resultado >= 0.7){
                alert("Melhor utilizar Gasolina")
            }else {
                alert("Melhor utilizar Álcool")
            }
        }else {
            alert("Preencha o Preço da Gasolina")
        }
    }else {
        alert("Preencha o Preço do Álcool")
    }
}