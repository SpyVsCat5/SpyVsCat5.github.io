function getSchedule() {
    return ["Fermé",
            "14h - 18h",
            "Fermé",
            "Fermé",
            "Fermé",
            "Fermé",
            "Fermé"];
}

function getOpeningHours() {
    var index = new Date().getDay();
    return getSchedule()[index];
}
