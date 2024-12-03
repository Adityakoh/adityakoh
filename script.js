<script src="script.js" defer></script>
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#nav-links li a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
// Ambil elemen tombol untuk mengganti tema
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Cek tema yang aktif dan toggle antara light/dark mode
themeToggleBtn.addEventListener("click", () => {
    const body = document.body;
    
    // Periksa apakah saat ini sedang menggunakan light mode atau dark mode
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeToggleBtn.classList.remove("light-mode");
        themeToggleBtn.classList.add("dark-mode");
        themeToggleBtn.textContent = "Switch to Light Mode";
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeToggleBtn.classList.remove("dark-mode");
        themeToggleBtn.classList.add("light-mode");
        themeToggleBtn.textContent = "Switch to Dark Mode";
    }
});
