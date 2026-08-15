// =========================================
// COUNTDOWN
// =========================================

const countdown = document.getElementById("countdown");
const loadingText = document.getElementById("loading-text");
const startButton = document.getElementById("start-button");

let number = 10;


// =========================================
// JALANKAN COUNTDOWN
// =========================================

const timer = setInterval(() => {

    number--;

    countdown.textContent = number;


    // ==============================
    // SAAT MENCAPAI 0
    // ==============================

    if (number === 0) {

        clearInterval(timer);

        loadingText.textContent = "Semuanya sudah siap.";

        startButton.style.display = "block";
    }

}, 1000);
