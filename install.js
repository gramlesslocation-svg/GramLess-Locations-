document.addEventListener("DOMContentLoaded", () => {

    let installPrompt;

    const banner = document.getElementById("installBanner");
    const installBtn = document.getElementById("installBtn");
    const closeBtn = document.getElementById("closeInstall");

    // Hide banner if something is missing
    if (!banner || !installBtn || !closeBtn) {
        return;
    }

    // Android install detection
    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        installPrompt = event;
    });

    // Install button
    installBtn.addEventListener("click", async () => {

        if (installPrompt) {
            installPrompt.prompt();

            await installPrompt.userChoice;

            installPrompt = null;
        }

        else if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
            alert(
                "To install GramLess:\n\n" +
                "1. Tap the Share button ⬆️\n" +
                "2. Tap 'Add to Home Screen'\n" +
                "3. Tap Add"
            );
        }

        else {
            alert("Open your browser menu and choose 'Add to Home Screen'");
        }

    });

    // Close button
    closeBtn.addEventListener("click", () => {
        banner.style.display = "none";
    });

});