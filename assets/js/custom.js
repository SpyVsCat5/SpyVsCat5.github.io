function getSchedule() {
    return ["Fermé",
            "10h - 19h",
            "10h - 20h",
            "Fermé",
            "10h - 19h",
            "13h - 19h",
            "15h - 21h"];
}

function getOpeningHours() {
    var index = new Date().getDay();
    return getSchedule()[index];
}
