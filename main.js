let candles = document.querySelectorAll(".candle");

candles.forEach((candle) => {
    let bi = candle.querySelector(".bi-arrow-up-right");

    candle.addEventListener('click', (event) => {
        event.preventDefault(); // evita que el <a> navegue enseguida

        bi.classList.add("active");

        setTimeout(() => {
            let link = candle.closest("a"); // el <a> que envuelve la card
            if (link) {
                window.location.href = link.href;
            }
        }, 500); // mismo tiempo que tu animación
    });
});

let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
let navAll = document.querySelectorAll("header nav ul li a");

hamburger.addEventListener('click', () => {
    nav.classList.toggle("active");

    navAll.forEach((a) => {
        a.addEventListener('click', () => {
            nav.classList.remove("active");
        });
    });

});