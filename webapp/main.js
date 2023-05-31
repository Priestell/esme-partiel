let bouton_increase = document.getElementById("Increase")
let bouton_decrease = document.getElementById("Decrease")
let bouton_reset = document.getElementById("Reset")
let compteur = document.getElementById("compteur")


bouton_increase.addEventListener("click", function () {
    let valeur_compteur = parseInt(compteur.textContent);
    valeur_compteur ++;
    compteur.textContent = valeur_compteur;
})

bouton_decrease.addEventListener("click", function ()
{
    let valeur_compteur = parseInt(compteur.textContent);
    valeur_compteur --;
    compteur.textContent = valeur_compteur;
})

bouton_reset.addEventListener("click", function () {
    compteur.textContent = 0;
})