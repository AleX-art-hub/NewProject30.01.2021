const userCard = document.createElement("div");
userCard.classList.add("userCard");

const userCardElem = getElementByClassName("userCard");
const userPhotoContainer = document.createElement("div");
userPhotoContainer.classList.add("userPhoto");

const imageElem = document.createElement("img");
imageElem.setAttribute("src", card.imageSrc);
imageElem.setAttribute("alt", "userPhoto");

userPhotoContainer.append(imageElem);

userCardElem.append(userPhotoContainer);

const userStats = document.createElement("div");
userStats.classList.add("userStats");

const userStatValue = document.createElement("div");
userStatValue.classList.add("userStatValue");
userCardElem.append(userStatValue);

