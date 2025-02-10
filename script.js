const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");
button.addEventListener("click", resultChecker);
function resultChecker() {
  const inputValue = input.value.toLowerCase();

  let filteredStr = "";
  let reversedStr = "";
  let reversedArray = [];

  const nonChar =
    /[!, @, #, $, %, &, *, -, +, =, |, \, { },, : ;, ", ', <, >, . ? /, , `, ~ ,$, ^ ,+, =, <, >, "",_,( ),-]/;
  const regex = /[a-zA-Z0-9]/;

  if (!inputValue) {
    alert("Please input a value");
    result.style.display = "none";
  } else {
    result.style.display = "block";
    if (inputValue.length === 1) {
      result.innerText = `${inputValue} is a palindrome `;
    } else {
      const splitted = inputValue.split("");
      const filteredArray = splitted.filter((ch) => {
        return regex.test(ch);
      });

      const resultText =
        filteredArray.join("") === filteredArray.reverse("").join("")
          ? `${input.value} is a palindrome`
          : `${input.value} is not a palindrome`;

      result.innerText = resultText;
    }
  }
}
