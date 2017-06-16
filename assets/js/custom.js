function getSchedule() {
    return ["Fermé"/*,
            "10h - 18h",
            "10h - 20h",
            "13h - 18h",
            "10h - 19h",
            "10h - 19h30",
            "13h - 21h"*/];
}

function getOpeningHours() {
    var index = new Date().getDay();
    return getSchedule()[index];
}
