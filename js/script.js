"use strict"; // va permettre de révéler les fautes en erreurs afin de les corriger et d'éviter des bugs

function action(valeur) {
    var saisie = valeur;
    // injecter saisie dans l'input OUT
    document.getElementById('out').value += saisie;
}

function calcul() {
    console.log(document.getElementById('out').value);
    var result = eval(document.getElementById('out').value);
    console.log(result);
    document.getElementById('out').value = result;
}