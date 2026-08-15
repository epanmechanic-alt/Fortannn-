/* =====================================================
   ELEMENT
===================================================== */

const loadingScreen =
    document.getElementById("loading-screen");

const countdown =
    document.getElementById("countdown");

const loadingText =
    document.getElementById("loading-text");

const startButton =
    document.getElementById("start-button");


/* =====================================================
   COUNTDOWN
===================================================== */

let number = 10;


/* =====================================================
   ANIMASI ANGKA
===================================================== */

function changeNumber(newNumber) {

    countdown.classList.remove("number-enter");

    countdown.classList.add("number-exit");


    setTimeout(() => {

        countdown.textContent = newNumber;

        countdown.classList.remove("number-exit");

        countdown.classList.add("number-enter");

    }, 250);
}


/* =====================================================
   TIMER
===================================================== */

const timer = setInterval(() => {

    number--;

    changeNumber(number);


    /* ==============================================
       SAAT MENCAPAI 0
    ============================================== */

    if (number === 0) {

        clearInterval(timer);

        loadingText.textContent =
            "Sudah siap.";

        startButton.classList.add("show");
    }

}, 1000);


/* =====================================================
   START
===================================================== */

startButton.addEventListener("click", () => {

    loadingScreen.classList.add("hide");

});
