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

// Nombre de journées
const journees = 3;

// Fonction pour créer une liste déroulante avec les clubs
function createClubSelect() {
    const select = document.createElement('select');
    clubsLigue1.forEach(club => {
        const option = document.createElement('option');
        option.value = club;
        option.textContent = club;
        select.appendChild(option);
    });
    return select;
}

// Fonction pour générer le tableau
function generateTable() {
    const tbody = document.querySelector('#clubs-table tbody');
    tbody.innerHTML = ''; // Nettoie le tableau

    for (let i = 1; i <= journees; i++) {
        const row = document.createElement('tr');
        const journeeCell = document.createElement('td');
        journeeCell.textContent = `Journée ${i}`;
        row.appendChild(journeeCell);

        // Colonne Théo
        const theoCell = document.createElement('td');
        const theoSelect = createClubSelect();
        theoSelect.id = `theo-j${i}`;
        theoCell.appendChild(theoSelect);
        row.appendChild(theoCell);

        // Colonne François
        const francoisCell = document.createElement('td');
        const francoisSelect = createClubSelect();
        francoisSelect.id = `francois-j${i}`;
        francoisCell.appendChild(francoisSelect);
        row.appendChild(francoisCell);

        tbody.appendChild(row);
    }

    // Charger les données sauvegardées
    loadSavedData();
}

// Fonction pour sauvegarder les choix
function saveChoices(player) {
    const password = prompt(`Entrez le mot de passe pour ${player}`);
    const correctPassword = player === 'Théo' ? '123' : '456';

    if (password !== correctPassword) {
        document.getElementById('message').textContent = "Mot de passe incorrect.";
        document.getElementById('message').style.color = "red";
        return;
    }

    for (let i = 1; i <= journees; i++) {
        const selectId = player === 'Théo' ? `theo-j${i}` : `francois-j${i}`;
        const selectedClub = document.getElementById(selectId).value;
        localStorage.setItem(`${player.toLowerCase()}-j${i}`, selectedClub);
    }

    document.getElementById('message').textContent = `${player} a enregistré ses choix avec succès !`;
    document.getElementById('message').style.color = "green";
}

// Fonction pour charger les données sauvegardées
function loadSavedData() {
    for (let i = 1; i <= journees; i++) {
        const theoSelect = document.getElementById(`theo-j${i}`);
        const francoisSelect = document.getElementById(`francois-j${i}`);

        const savedTheoClub = localStorage.getItem(`theo-j${i}`);
        const savedFrancoisClub = localStorage.getItem(`francois-j${i}`);

        if (savedTheoClub) {
            theoSelect.value = savedTheoClub;
        }
        if (savedFrancoisClub) {
            francoisSelect.value = savedFrancoisClub;
        }
    }
}

// Événements des boutons d'enregistrement
document.getElementById('save-theo-btn').addEventListener('click', function() {
    saveChoices('Théo');
});

document.getElementById('save-francois-btn').addEventListener('click', function() {
    saveChoices('François');
});

// Générer le tableau au chargement de la page
window.onload = generateTable;
