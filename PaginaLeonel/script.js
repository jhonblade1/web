// Cambio de imagen del banner al pasar el ratón
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("banner");

    banner.addEventListener("mouseover", () => {
        banner.src = "banner2.jpg"; // Cambia la imagen cuando el ratón pasa
    });

    banner.addEventListener("mouseout", () => {
        banner.src = "banner1.jpg"; // Restaura la imagen cuando el ratón sale
    });

    const audio = document.getElementById("myAudio");
    if (audio) {
        audio.volume = 0.1; // Establece el volumen al 10%
        audio.muted = false; // Desmutea el audio para que suene
    }
});


