function gerarFrase() {
    const frases = ["Acredite em si mesmo e você será imparável.", "Cada dia é uma nova oportunidade para brilhar.", "Se você pode sonhar, pode realizar.", "A persistência realiza o impossível.", "A jornada mais longa começa com um único passo.", "Grandes coisas nunca vêm da zona de conforto.", "Mude seus pensamentos e você mudará seu mundo.", "Não desista, supere.", "Tudo parece impossível até que seja feito.", "A força está dentro de você, apenas a liberte."];
    const item = lista[Math.floor(Math.random() * frases.length)];
    document.getElementById("fraseMotivacional").innerHTML = item;
}