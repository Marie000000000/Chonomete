// Récupération des éléments HTML
const inputMinutes = document.getElementById("minutes");
const startButton = document.getElementById("startButton");
const countdownDisplay = document.getElementById("countdown");

let countdownInterval; // Variable pour stocker le compte à rebours

// Fonction qui démarre le compte à rebours
function startCountdown() {
    let timeRemaining = parseInt(inputMinutes.value) * 60; // Convertit minutes en secondes

    // Vérifie si la valeur est correcte
    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert("Veuillez entrer un nombre valide de minutes.");
        return;
    }

    // Met à jour l'affichage immédiatement
    updateDisplay(timeRemaining);

    // Arrête tout ancien compte à rebours en cours
    clearInterval(countdownInterval);

    // Démarre un nouvel intervalle qui s'exécute chaque seconde
    countdownInterval = setInterval(() => {
        timeRemaining--;

        // Met à jour l'affichage
        updateDisplay(timeRemaining);

        // Si le temps est écoulé
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "⏳ Temps écoulé !";
        }
    }, 1000);
}

// Fonction pour mettre à jour l'affichage du temps restant
function updateDisplay(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Formate les secondes et minutes (ex: 02:05 au lieu de 2:5)
    countdownDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Ajout de l'événement sur le bouton "Démarrer"
startButton.addEventListener("click", startCountdown);
