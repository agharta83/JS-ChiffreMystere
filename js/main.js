/* Définition des variables */

// Elément du DOM
let guess = document.querySelector('.guess');
let guesses = document.querySelector('.guesses');
let result = document.querySelector('.result');
let results = document.querySelector('.results');
let textResult = document.querySelector('.textResult');
let mysteryNumber = document.querySelector('.mysteryNumber');
let lowOrHight = document.querySelector('.lowOrHight');

let submit = document.querySelector('.playerSubmit');
let field = document.querySelector('.playerField');

let form = document.querySelector('.form');
let formVisible = document.querySelector('.form-visible');

let resetButton;


// Script principal - Déroulement d'une partie
// 1.Variables

let replay = false; // Initialiser à false au chargement
let min = 1;
let max = 100;
let nbAnswers = 0; // Nombres d'essai du joueur
let gameResult; // Résultat d'une partie
let gameResults = []; // Tableau contenant les résultats de toutes les parties


/** 2.Fonctions principales **/

// a. On génére un nombre aléatoire
function randomNumber (min, max) {
    var nb = min + Math.floor(Math.random() * Math.floor(max - min));
    return nb;
}

var secret = randomNumber(min, max);

// b. On va écouter la soumission du formulaire
submit.addEventListener('click', checkNumber);

// c. Traitement principal de la partie (effectue les vérifications)
function checkNumber(evt) {
    // Bloque le rechargement de la page
    evt.preventDefault();

    // Récupére la valeur de l'input
    let answer = Number(field.value);

    // On incrémente le nombre de tentative
    nbAnswers++;

    // On vide l'input et on laisse le focus pour plus d'accessibilité
    field.value = '';
    field.focus();

    /* Traitements */
    // 1ER ESSAI
    if(nbAnswers === 1) {
        // Traitement sur les blocs du DOM
        results.classList.remove('hidden');
        guess.classList.remove('hidden');
        guesses.textContent = 'Propositions : ';
    }

    // Ajoute la valeur courante de answer suivi d'un '/'.
    guesses.textContent += answer + ' / ';

    // GAGNE !!
    if (answer == secret) {
        // Traitement sur les blocs du DOM
        guess.classList.toggle('hidden');
        result.classList.toggle('hidden');
        textResult.textContent = `Bravo, ${secret} était le chiffre mystère !`;

        // On enregistre le résultat de la partie dans un objet pour faciliter la mise en place du score board
        gameResult = {
            gameNbAnswers : nbAnswers,
            gameWin : answer == secret,
            gameSecret : secret,
        }
        
        // Retourne une fonction
        return setGame(gameResult);

    // PLUS D'ESSAI
    } else if (nbAnswers === 10) {
        // Traitement sur les blocs du dOM
        guess.classList.toggle('hidden');
        result.classList.toggle('hidden');
        textResult.textContent = '!!! PERDU !!!';
        mysteryNumber.textContent = `Le chiffre à trouver était ${secret}.`;

        // On enregistre le résultat de la partie dans un objet pour faciliter la mise en place du score board
        gameResult = {
            gameNbAnswers : nbAnswers,
            gameWin : answer == secret,
            gameSecret : secret,
        }

        // Retourne une fonction
        return setGame(gameResult);

    // Il reste des tentatives au joueur
    } else {
        // Vérifie si le chiffre saisi est inférieur au chiffre mystere
        if (answer < secret) {
            // Afffiche un '+'
            lowOrHight.textContent = '+';
        // Vérifie si le chiffre saisi est supérieur au chiffre mystere
        } else if (answer > secret) {
            // Affiche un '-'
            lowOrHight.textContent = '-';
        }
    }
    
}

// d. Traitement sur les blocs et permet de rejouer une partie
function setGame(result) {
    // Traitement des blocs du DOM
    resetButton = document.createElement('button');
    resetButton.className = 'restart';
    resetButton.textContent = 'Rejouer';
    formVisible.classList.toggle('form-hidden');
    form.appendChild(resetButton);

    // Garde le résultat de la partie en mémoire
    gameResults.push(result);

    // Ajoute un écouteur d'événement sur le nouveau bouton 'Rejouer' et exécute la fonction resetGame
    resetButton.addEventListener('click', resetGame.bind(result));
}

// e.Réinitialise la partie
function resetGame(evt) {
    evt.preventDefault();

    replay = true;

    // Ajoute le résultat de cette partie au tableau de scores
    addScoreToBoard(this);

    // Remet le compteur à 0.
    nbAnswers = 0;

    // Supprime le block affichant le resultat
    result.classList.toggle('hidden');

    // Supprime le bouton "rejouer"
    resetButton.parentNode.removeChild(resetButton);

    // Remets le formulaire de saisie actif
    formVisible.classList.toggle('form-hidden');

    // Active le focus sur l'input
    field.focus();

    // Génére un nouveau chiffre mystère
    secret = Math.floor(Math.random() * 100) +1;
}

/** 3. Fonctions utilitaires permettant d'ajouter le score sous forme d'un élément dans le DOM */

// On va créer un élément <tr> correspondant à une ligne de résultat dans le scoreBoard
function createScoreTr(result) {
    // Générer un élément type "tr"
    let trElement = document.createElement("tr");

    // Ajouter 1 td avec le nombre de tentatives
    let tdAnswers = document.createElement("td");
    tdAnswers.textContent = result.gameNbAnswers;
    trElement.append(tdAnswers);

    // selon le resultat de la partie
    var tdResult = document.createElement("td");
    if(result.gameWin) {
        // Ajouter un autre "td" affichant "Gagné"
        tdResult.textContent = "Gagné";
    } else {
        // ajouter un autre "td" affichant "Perdu"
        tdResult.textContent = "Perdu";
    }
    trElement.append(tdResult);

    // Ajouter un td qui contient le chiffre mystère
    let tdSecret = document.createElement("td");
    tdSecret.textContent = result.gameSecret;
    // Ajouter au "tr"
    trElement.append(tdSecret);

    return trElement;
}

// Permet d'ajouter un résultat (dont les données sont passées en paramétre) au scoreBoard
function addScoreToBoard(result) {
    // Transformer mon objet result en élément "tr"
    let tr = createScoreTr(result);

    // Récupérer l'élément du DOM auquel je vais ajouter du html
    let scoreBoard = document.getElementById('scores-data');

    // Ajouter le html crée au scoreBoard
    scoreBoard.append(tr);    
}

