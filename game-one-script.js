const myNumber = 24;
let i = 0;
document.getElementById("tryNumber").innerHTML = i;

const startGame = () => {
  const enterNumber = parseInt(document.getElementById("userNumber").value);
  const checkNumber = enterNumber === myNumber;
  const checkNuber1 = enterNumber > myNumber;
  document.getElementById("userNumber").value = "";

  i = i + 1;
  document.getElementById("tryNumber").innerHTML = i;

  if (checkNumber) {
    document.getElementById("win").innerHTML =
      "Gratulacje, to poprawna liczba!";
    document.getElementById("lost1").innerHTML = "";
    document.getElementById("lost2").innerHTML = "";
  } else if (checkNuber1) {
    document.getElementById("lost1").innerHTML = "Twoja liczba jest za wysoka!";
    document.getElementById("lost2").innerHTML = "";
    document.getElementById("win").innerHTML = "";
  } else {
    document.getElementById("lost2").innerHTML = "Twoja liczba jest za niska!";
    document.getElementById("lost1").innerHTML = "";
    document.getElementById("win").innerHTML = "";
  }
};
