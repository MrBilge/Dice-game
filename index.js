  // 1. zar
function updateDice1() {
  var random = Math.floor(Math.random() * 6) + 1;
  var diceNumber1 = random;
  var numberoneDiceSource = "images/dice" + diceNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", numberoneDiceSource);
  return diceNumber1;
}

// 2. zar
function updateDice2() {
  var random = Math.floor(Math.random() * 6) + 1;
  var diceNumber2 = random;
  var numbertwoDiceSource = "images/dice" + diceNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", numbertwoDiceSource);
  return diceNumber2;
}

// Zarları güncellemek için butona tıklama olayı
document.getElementById("rollButton").addEventListener("click", compareDice);

// Zarları karşılaştır ve sonucu gösteren kod
function compareDice() {
  var diceNumber1 = updateDice1();
  var diceNumber2 = updateDice2();
  var konfetiEmoji = "&#x1F389;";
  var beyazBayrakEmoji = "&#x1F3F3;&#xFE0F;";
  var diceImages = document.querySelectorAll(".dice-image");

  // Zar atma animasyonunu başlat
  diceImages.forEach(function (image) {
    image.classList.add("roll-animation");
  });

  
  setTimeout(function () {
    diceImages.forEach(function (image) {
      image.classList.remove("roll-animation");
    });

    if (diceNumber2 > diceNumber1) {
      document.querySelector("h1").innerHTML = konfetiEmoji + "Player 2 wins";
    } else if (diceNumber1 === diceNumber2) {
      document.querySelector("h1").innerHTML = beyazBayrakEmoji + "Draw";
    } else {
      document.querySelector("h1").innerHTML = konfetiEmoji + "Player 1 wins";
    }
  }, 1000); // 1 saniye (zar atma animasyonu süresi)
}

window.onload = function () {
  // Görselleri yüklenmesini bekler
  updateDice1();
  updateDice2();
};








   

    




 
