// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*
let h1 = document.querySelector('h1')
// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
h1.addEventListener("dblclick", function () {
    h1.style.cssText = "background-color: red; color: white"
})
// ### 2. Au hover du h3, son texte rétrécit d'un caractère 
let h3 = document.querySelector('h3')
h3.addEventListener("mouseover", (e) => {
    h3.innerHTML = h3.innerHTML.substr(0, h3.innerHTML.length -1)
    console.log(h3.innerHTML)
})
// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir
let p = document.querySelector('p');
document.addEventListener('click', function() {
    p.classList.toggle('exo')
})