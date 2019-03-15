/* 1.Définition des variables */

// Génére le chiffre mystère.
let randomNumber = Math.floor(Math.random() * 100) +1;

// Stocke les références au paragraphes de résultats dans le HTML.
// On va les utiliser pour insérer des valeurs dans le HTML.
let guess = document.querySelector('.guess');
let guesses = document.querySelector('.guesses');
let result = document.querySelector('.result');
let textResult = document.querySelector('.textResult');
let mysteryNumber = document.querySelector('.mysteryNumber');
let lowOrHight = document.querySelector('.lowOrHight');

// Stocke les références de l'input et du bouton "Submit"
let playerSubmit = document.querySelector('.playerSubmit');
let playerField = document.querySelector('.playerField');
// Active le focus sur l'input au chargement de la page
playerField.focus();

// Stocke le nombre de suppositions que le joueur a saisi.
let playerCount = 1;

// Stocke une référence à un bouton de réinitialisation que n'existe pas dans le HTML.
let resetButton;

// Enregistre le formumaire de saisie dans une variable
let form = document.querySelector('.form');
let formVisible = document.querySelector('.form-visible');

/* 2. Fonctions */

// Vérifie si le chiffre saisit par le joueur est correcte ou non
// Renvoi une réponse appropriée
function checkNumber(evt) {
    // Bloque le rechargement de la page lors du clic ou du keypress 'Entrer'
    evt.preventDefault();

    console.log(randomNumber);
    
    // Récupére la valeur de l'input et vérifie que c'est bien un nombre.
    let userNumber = Number(playerField.value);

    // Vérifie si c'est la 1ère supposition du joueur
    if(playerCount === 1) {
        // Supprime la classe hidden au block 'guess'
        guess.classList.toggle('hidden');

        // Ajoute le texte dans le DOM
        guesses.textContent = 'Propositions précédentes : ';
    }

    // Ajoute la valeur courante de userNumber suivi d'un '/'.
    guesses.textContent += userNumber + ' / ';

    // Vérifie si le chiffre saisi est égal au chiffre aléatoire
    if (userNumber === randomNumber) {
        // Supprime le block des suppositions
        guess.classList.toggle('hidden');

        // Affiche le block contenant le résultat
        result.classList.toggle('hidden');
        // Le joueur a gagné le jeu
        textResult.textContent = `Bravo, ${randomNumber} était le chiffre mystère !`;

        setGameOver();
    
    // Vérifie si le joueur a épuisé toute les tentatives possibles
    } else if (playerCount === 10) {
        // Supprime le block des propositions de nombre
        guess.classList.toggle('hidden');

        // Affiche le block de resultat
        result.classList.toggle('hidden');
        // Affiche un message de fin de partie
        textResult.textContent = '!!! PERDU !!!';
        // Révéle le chiffre mystere
        mysteryNumber.textContent = `Le chiffre à trouver était ${randomNumber}.`;

        setGameOver();

    // Il reste des tentatives au joueur
    } else {
        // Affiche que la supposition est mauvaise
        // textResult.textContent = 'Faux !';

        // Vérifie si le chiffre saisi est inférieur au chiffre mystere
        if (userNumber < randomNumber) {
            // Afffiche un '+'
            lowOrHight.textContent = '+';
        // Vérifie si le chiffre saisi est supérieur au chiffre mystere
        } else if (userNumber > randomNumber) {
            // Affiche un '-'
            lowOrHight.textContent = '-';
        }
    }

    // Préparation d'une nouvelle tentative
    // On incrémente le nombre de tentative
    playerCount++;
    // On vide l'input
    playerField.value = '';
    // On donne le focus à l'input pour faciliter la saisie d'un nouveau chiffre
    playerField.focus();
}

// Ajoute un écouteur d'événement sur le bouton 'submit' et exécute la fonction checkNumber lors de cet événement.
playerSubmit.addEventListener('click', checkNumber);

// A exécuter une fois le jeu terminé
function setGameOver() {
    // Génére un nouveau bouton 'Rejouer' dans le HTML
    resetButton = document.createElement('button');
    resetButton.className = 'restart';
    resetButton.textContent = 'Rejouer';
    
    // Supprime les éléments du formulaire
    formVisible.classList.toggle('form-hidden');
    // Pour remplacer le contenu du formulaire par le bouton "Rejouer".
    form.appendChild(resetButton);

    // Ajoute un écouteur d'événement sur le nouveau bouton et exécute la fonction resetGame
    resetButton.addEventListener('click', resetGame);
}

// Permet de réinitialiser le jeu
function resetGame() {
    // Remet le compteur à 0.
    playerCount = 1;

    // Efface toutes les informations de la partie précédente
    let resetParas = document.querySelectorAll('.results p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    // Supprime le block affichant le resultat
    result.classList.toggle('hidden');

    // Supprime le bouton de réinitialisation 
    resetButton.parentNode.removeChild(resetButton);

    // Remets le formulaire de saisie actif
    formVisible.classList.toggle('form-hidden');

    // Active le focus sur l'input
    playerField.focus();

    // Génére un nouveau chiffre mystère
    randomNumber = Math.floor(Math.random() * 100) +1;
}