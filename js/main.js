const endpoint = "http://192.168.1.50";

function getDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledDapur.style.backgroundColor = "blue"
            ledImageDapur.src = "./assets/led-on.png"
        } else {
            ledDapur.style.backgroundColor = "#579ff"
            ledImageDapur.src = "./assets/led-off.png"
        }
    });
}

function getTamuLed() {
    fetch(endpoint + "/tamu", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledTamu.style.backgroundColor = "blue"
            ledImageTamu.src = "./assets/led-on.png"
        } else {
            ledTamu.style.backgroundColor = "#579ff"
            ledImageTamu.src = "./assets/led-off.png"
        }
    });
}

function getMakanLed() {
    fetch(endpoint + "/makan", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledMakan.style.backgroundColor = "blue"
            ledImageMakan.src = "./assets/led-on.png"
        } else {
            ledMakan.style.backgroundColor = "#579ff"
            ledImageMakan.src = "./assets/led-off.png"
        }
    });
}

function getToiletLed() {
    fetch(endpoint + "/toilet", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledToilet.style.backgroundColor = "blue"
            ledImageToilet.src = "./assets/led-on.png"
        } else {
            ledToilet.style.backgroundColor = "#579ff"
            ledImageToilet.src = "./assets/led-off.png"
        }
    });
}

function setDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}

function setTamuled() {
    fetch(endpoint + "/tamu", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}

function setMakanLed() {
    fetch(endpoint + "/makan", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}

function setToiletLed() {
    fetch(endpoint + "/toilet", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}

getDapurLed();
getTamuLed();
getMakanLed();
getToiletLed();