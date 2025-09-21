// Данные артистов
const artists = {
  faithmauch: {
    name: "faithmauch",
    photo: "images/faithmauch.jpg",
    link: "https://www.instagram.com/faithmauch/"
  },
  bully: {
    name: "bully",
    photo: "images/bully.jpg",
    link: "https://instagram.com/"
  },
  ylannee: {
    name: "ylannee",
    photo: "images/ylannee.jpg",
    link: "https://instagram.com/"
  },
  tryboy: {
    name: "TRYBOY",
    photo: "images/tryboy.jpg",
    link: "https://instagram.com/"
  },
  n3kket: {
    name: "n3kket",
    photo: "images/n3kket.jpg",
    link: "https://instagram.com/"
  },
  al3zer: {
    name: "AL3ZER",
    photo: "images/al3zer.jpg",
    link: "https://instagram.com/"
  },
  tripp: {
    name: "tripp",
    photo: "images/tripp.jpg",
    link: "https://instagram.com/"
  }
};

// Элементы
const artistItems = document.querySelectorAll(".artists li");
const card = document.getElementById("artist-card");
const artistName = document.getElementById("artist-name");
const artistPhoto = document.getElementById("artist-photo");
const artistLink = document.getElementById("artist-link");
const closeBtn = document.getElementById("close");

// Открытие карточки
artistItems.forEach(item => {
  item.addEventListener("click", () => {
    const key = item.getAttribute("data-artist");
    const artist = artists[key];
    artistName.textContent = artist.name;
    artistPhoto.src = artist.photo;
    artistLink.href = artist.link;
    card.classList.remove("hidden");
  });
});

// Закрытие карточки
closeBtn.addEventListener("click", () => {
  card.classList.add("hidden");
});
