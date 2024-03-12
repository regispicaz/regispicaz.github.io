// Function Preload

var loader = document.getElementById("preload");
window.addEventListener("load", function () {
    loader.style.display = "none";
});

// Verificação de servicework

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("assets/js/sw.js")
            .then((registration) => {
                console.log("SW registered: ", registration);
            })
            .catch((registrationError) => {
                console.log("SW registration failed: ", registrationError);
            });
    });
}
