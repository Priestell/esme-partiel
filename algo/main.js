function twoSum(array, target) {
    // Déclaration de la variable indices qui stockera les indices des éléments du tableau qui ont une somme égale à la cible
    const indices = [];
    // Parcours de chaque élément du tableau
    for (let i = 0; i < array.length; i++) {
        // Calcul du complément de l'élément actuel par rapport à la cible
        const complement = target - array[i];
        // Recherche de l'indice du complément dans le tableau
        const complementIndex = array.indexOf(complement);
        // Si le complément est présent dans le tableau et qu'il ne s'agit pas de l'élément actuel
        if (complementIndex !== -1 && complementIndex !== i) {
            // Ajout des indices de l'élément actuel et du complément dans le tableau indices
            indices.push(i, complementIndex);
            // Sortie de la boucle for
            break;
        }
    }
    // Affichage des indices des éléments ayant une somme égale à la cible
    console.log(indices);
}
let tableau_a_tester = [2,7,11,15];
let target = 9
twoSum(tableau_a_tester,target)