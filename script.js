// Liste des clubs de Ligue 1
const clubsLigue1 = [
    "Paris Saint-Germain",
    "Olympique de Marseille",
    "Olympique Lyonnais",
    "AS Monaco",
    "Lille OSC",
    "Stade Rennais",
    "OGC Nice",
    "Montpellier HSC",
    "RC Strasbourg",
    "FC Nantes",
    "Stade de Reims",
    "FC Lorient",
    "Angers SCO",
    "Toulouse FC",
    "Clermont Foot",
    "RC Lens",
    "Stade Brestois",
    "AC Ajaccio",
    "ES Troyes AC",
    "AJ Auxerre"
];

// Remplir la liste déroulante avec les clubs
const clubSelect = document.getElementById('club-select');
clubsLigue1.forEach(club => {
    const option = document.createElement('option');
    option.value = club;
    option.textContent = club;
    clubSelect.appendChild(option);
});

// Fonction pour vérifier si le club est valide
function isClubValid(club) {
    return clubsLigue1.includes(club);
}

// Gestionnaire de l'événement click sur le bouton Enregistrer
document.getElementById('save-btn').addEventListener('click', function() {
    const password = prompt("Entrez le mot de passe");

    if (password !== "Apéro") {
        document.getElementById('message').textContent = "Mot de passe incorrect.";
        return;
    }

    let validationSuccess = true;
    let message = "";

    // Valider les clubs sélectionnés pour Théo
    document.querySelectorAll('.input-theo').forEach((input, index) => {
        if (!isClubValid(input.value)) {
            validationSuccess = false;
            message += `Journée ${index + 1} - Théo : Club invalide.\n`;
        }
    });

    // Valider les clubs sélectionnés pour François
    document.querySelectorAll('.input-francois').forEach((input, index) => {
        if (!isClubValid(input.value)) {
            validationSuccess = false;
            message += `Journée ${index + 1} - François : Club invalide.\n`;
        }
    });

    if (validationSuccess) {
        document.getElementById('message').textContent = "Les clubs ont été enregistrés avec succès !";
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').textContent = message;
        document.getElementById('message').style.color = "red";
    }
});

// Écouter la sélection de club dans la liste déroulante
clubSelect.addEventListener('change', function() {
    const selectedClub = this.value;
    document.querySelectorAll('.input-theo, .input-francois').forEach(input => {
        if (input.value === "") {
            input.value = selectedClub;
        }
    });
});
