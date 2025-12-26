let type = "";

function setType(selected) {
    type = selected;

    document.querySelector(".question").style.display = "none";
    document.getElementById("typeButtons").style.display = "none";

    document.getElementById("actionArea").innerHTML =
        `<p class="loading">⏳ Bahane üretiliyor...</p>`;

    // 5 saniye bekleme
    setTimeout(generate, 5000);
}

function generate() {
    document.body.classList.add("ready");

    const excuses = {
        Is: [
            "Sistem beni attı.",
            "Toplantılar çakıştı.",
            "Bilgisayar update aldı.",
            "VPN error verdi, bağlanamadım.",
            "CC'ye beni eklememişsiniz.",
            "Mail box full, görmedim.",
            "Aramışsınız, duymadım.",
            "Aradıysanız telefonum bozuk, teknikle görüşeyim.",
            "İK eğitimimi bitirmek için Şeker Bayramı tatilini 9 güne tamamlamak istiyorum.",
            "Geldim ama odanızda yoktunuz.",
            "Güneş çevresinde yaşanan patlama sebebiyle bilgisayarım hasar görmüş olabilir, bugün çalışamayacağım.",
            "Burcum gereği ben toplantı notu tutamıyorum."
        ],
        Okul: [
            "Alarm çalmadı.",
            "Servis gelmedi.",
            "Ben bu soruyu çözmüştüm.",
            "Bu konuya daha gelmedik.",
            "Orayı daha işlemedik.",
            "Babam bunu bilmesen de olur dedi."
        ]
    };

    const random =
        excuses[type][Math.floor(Math.random() * excuses[type].length)];

    document.getElementById("actionArea").innerHTML = `
        <h2>✅ Bahane Üretildi</h2>
        <p class="excuse">${random}</p>

        <div class="result-buttons">
            <button class="ok" onclick="showPopup()">Bahane yeterli, teşekkürler</button>
            <button class="nope" id="nope">Beğenmedim</button>
        </div>
    `;

    const nope = document.getElementById("nope");

    // Daha agresif kaçma
    nope.addEventListener("mouseenter", () => {
        const x = Math.random() * 400 - 200;
        const y = Math.random() * 200 - 100;
        nope.style.transform = `translate(${x}px, ${y}px)`;
    });
}

function showPopup() {
    document.getElementById("popup").classList.add("active");
}

function resetApp() {
    document.getElementById("popup").classList.remove("active");

    document.body.classList.remove("ready");

    document.querySelector(".question").style.display = "block";
    document.getElementById("typeButtons").style.display = "block";

    document.getElementById("actionArea").innerHTML = "";
}

// Local visit counter
const visits = localStorage.getItem("visits") || 0;
localStorage.setItem("visits", Number(visits) + 1);

document.getElementById("visitCount").innerText =
    localStorage.getItem("visits");

