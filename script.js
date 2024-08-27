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

// Fonction pour vérifier si le club est valide
function isClubValid(club) {
    return clubsLigue1.includes(club);
}

// Gestionnaire de l'événement click sur le bouton Enregistrer
document.getElementById('save-btn').addEventListener('click', function() {
    const clubInput = document.getElementById('club-input').value;
    const password = prompt("Entrez le mot de passe");

    if (password !== "Apéro") {
        document.getElementById('message').textContent = "Mot de passe incorrect.";
        return;
    }

    if (isClubValid(clubInput)) {
        document.getElementById('message').textContent = `Club "${clubInput}" enregistré avec succès !`;
        document.getElementById('message').style.color = "green";
        // Ici vous pouvez ajouter le code pour sauvegarder le club (par exemple, en utilisant localStorage ou en l'envoyant à un serveur)
    } else {
        document.getElementById('message').textContent = "Nom de club invalide.";
        document.getElementById('message').style.color = "red";
    }
});
