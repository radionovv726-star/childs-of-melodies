// ==============================
// Данные артистов и продюсеров
const profiles = {
  faithmauch: { name: "faithmauch", photo: "images/faithmauch.jpg", link: "https://www.instagram.com/faithmauch/" },
  bully: { name: "bully", photo: "images/bully.png", link: "https://instagram.com/bullyinnovator/" },
  ylannee: { name: "ylannee", photo: "images/ylanneex/" },
  tryboy: { name: "TRYBOY", photo: "images/tryboy.jpg", link: "https://instagram.com/tryb0y/" },
  n3kket: { name: "n3kket", photo: "images/n3kket.jpg", link: "https://instagram.com/n3kketcannibal/" },
  al3zer: { name: "AL3ZER", photo: "images/al3zer.png", link: "https://instagram.com/al3zer_luv/" },
  tripp: { name: "tripp", photo: "images/tripp.png", link: "https://instagram.com/trippycarsxn/" },
  slitee: { name: "slitee", photo: "images/slitee.png", link: "https://instagram.com/ssslitee/" }
};

// Элементы
const items = document.querySelectorAll(".artists li, .producers li");
const card = document.getElementById("artist-card");
const artistName = document.getElementById("artist-name");
const artistPhoto = document.getElementById("artist-photo");
const artistLink = document.getElementById("artist-link");
const closeBtn = document.getElementById("close");

// Открытие карточки для артистов и продюсеров
items.forEach(item => {
  item.addEventListener("click", () => {
    const key = item.getAttribute("data-artist") || item.getAttribute("data-producer");
    const profile = profiles[key];

    if (!profile) return;

    artistName.textContent = profile.name;
    artistPhoto.src = profile.photo;
    artistLink.href = profile.link;

    card.classList.add("show");
  });
});

// Закрытие карточки
closeBtn.addEventListener("click", () => {
  card.classList.remove("show");
});

// ==============================
// Тряска логотипа com.logo.png под бит
const logo = document.querySelector(".logo");
const music = document.getElementById("background-music");

// Создаем аудио контекст
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();
const source = audioCtx.createMediaElementSource(music);
source.connect(analyser);
analyser.connect(audioCtx.destination);
analyser.fftSize = 256;

const dataArray = new Uint8Array(analyser.frequencyBinCount);

function animateLogo() {
  analyser.getByteFrequencyData(dataArray);
  let lowFreq = dataArray.slice(0, 10);
  let avg = lowFreq.reduce((a, b) => a + b, 0) / lowFreq.length;
  let shakeAmount = Math.min(avg / 20, 10);
  logo.style.transform = `translate(${(Math.random() - 0.5) * shakeAmount}px, ${(Math.random() - 0.5) * shakeAmount}px)`;
  requestAnimationFrame(animateLogo);
}

// Запускаем тряску после старта музыки
music.addEventListener("play", () => {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  animateLogo();
});
