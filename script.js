function openCard() {
    const message = document.getElementById("hiddenMessage");

    message.classList.toggle("active");

    const button = document.querySelector("button");

    if (message.classList.contains("active")) {
        button.innerHTML = "Tutup Ucapan 💌";
    } else {
        button.innerHTML = "Buka Ucapan 💌";
    }
}