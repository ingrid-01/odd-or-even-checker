const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkOddOrEven() {
  const inputValue = numberInput.value;
  const number = parseInt(inputValue);

  if (inputVaㅣue === "" || isNaN(number)) {
    result.textContent = "Please enter a valid number!";
    result.className = "error";
    return;
  }

  result.className = "";

  if (number % 2 === 0) {
    result.textContent = `${number} is EVEN!`;
    result.className = "even";
  } else {
    result.textContent = `${number} is ODD!`;
    result.className = "odd";
  }
}

checkBtn.addEventListener("click", checkOddOrEven);

numberInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkOddOrEven();
  }
});
