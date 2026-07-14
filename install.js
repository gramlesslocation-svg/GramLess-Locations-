let installPrompt;

const banner = document.getElementById("installBanner");
const installBtn = document.getElementById("installBtn");
const closeBtn = document.getElementById("closeInstall");

// Android install detection
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
});

// Install button
installBtn.addEventListener("click", async () => {

    // Android
    if (installPrompt) {
        installPrompt.prompt();

        await installPrompt.userChoice;

        installPrompt = null;
    }

    // iPhone / iPad
    else if (/iphone|ipad|ipod/i.test(window.navigator.userAgent)) {
        alert(
            "To install GramLess:\n\n" +
            "1. Tap the Share button ⬆️\n" +
            "2. Tap 'Add to Home Screen'\n" +
            "3. Tap Add"
        );
    }

    // Other devices
    else {
        alert(
            "Open your browser menu and choose 'Add to Home Screen' to install GramLess."
        );
    }
});

// Close banner
closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
});