const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    const setMenuState = (isOpen) => {
        navLinks.classList.toggle("active", isOpen);
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.classList.toggle("open", isOpen);
    };

    menuBtn.addEventListener("click", () => {
        const isOpen = !navLinks.classList.contains("active");
        setMenuState(isOpen);
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            setMenuState(false);
        });
    });

    document.addEventListener("click", (event) => {
        if (
            !navLinks.contains(event.target) &&
            !menuBtn.contains(event.target) &&
            navLinks.classList.contains("active")
        ) {
            setMenuState(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks.classList.contains("active")) {
            setMenuState(false);
            menuBtn.focus();
        }
    });
}
