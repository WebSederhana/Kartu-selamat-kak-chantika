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

// =================================
// 🌸 PEONY FALLING FLOWERS
// =================================

const petalContainer =
    document.getElementById("petal-container");


// Membuat satu bunga
function createPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add("petal");


    // Pilihan bunga
    const flowers = [
        "🌸",
        "🌸",
        "🌺",
        "🌷"
    ];

    petal.innerHTML =
        flowers[
            Math.floor(
                Math.random() * flowers.length
            )
        ];


    // Posisi horizontal random
    petal.style.left =
        Math.random() * 100 + "vw";


    // Ukuran random
    const sizes = [
        "small",
        "medium",
        "large"
    ];

    petal.classList.add(
        sizes[
            Math.floor(
                Math.random() * sizes.length
            )
        ]
    );


    // Kecepatan jatuh
    const duration =
        Math.random() * 5 + 6;

    petal.style.animationDuration =
        duration + "s";


    // Delay kecil
    petal.style.animationDelay =
        Math.random() * 2 + "s";


    // Masukkan ke halaman
    petalContainer.appendChild(petal);


    // Hapus setelah selesai
    setTimeout(() => {

        petal.remove();

    }, (duration + 3) * 1000);
}


// =================================
// Membuat banyak bunga saat halaman
// pertama kali dibuka
// =================================

function startPetalEffect() {

    // Gelombang pertama
    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            createPetal();

        }, i * 100);

    }


    // Bunga berikutnya
    setInterval(() => {

        createPetal();

    }, 450);
}


// =================================
// Jalankan ketika website dibuka
// =================================

window.addEventListener(
    "load",
    startPetalEffect
);


// =================================
// 💌 TOMBOL BUKA UCAPAN
// =================================

function openCard() {

    const message =
        document.getElementById(
            "hiddenMessage"
        );

    const button =
        document.querySelector("button");


    message.classList.toggle("active");


    if (
        message.classList.contains("active")
    ) {

        button.innerHTML =
            "Tutup Ucapan 💌";

    } else {

        button.innerHTML =
            "Buka Ucapan 💌";

    }

}