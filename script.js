const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");

const result = document.getElementById("result");

const resultChecker = () => {
  const inputValue = input.value.toLowerCase();
  let filteredStr = "";
  let reversedStr = "";
  let reversedArray = [];

  const nonChar =
    /[!, @, #, $, %, &, *, -, +, =, |, \, { },, : ;, ", ', <, >, . ? /, , `, ~ ,$, ^ ,+, =, <, >, "",_,( ),-]/;
  const regex = /[a-zA-Z0-9]/;

  if (!inputValue) {
    alert("Please input a value");
    result.innerText = "";
  } else {
    if (inputValue.length === 1) {
      result.innerText = `${inputValue} is a palindrome `;
    } else {
      const splitted = inputValue.split("");

      const filteredArray = splitted.filter((ch) => {
        return regex.test(ch);
      });

      filteredArray.map((ch) => {
        filteredStr += ch;
      });
      reversedArray = filteredArray.reverse();
      reversedArray.map((ch) => (reversedStr += ch));
    }
  }

  const resultText =
    filteredStr === reversedStr
      ? `${input.value} is a palindrome`
      : `${input.value} is not a palindrome`;

  result.innerText = resultText;
};

button.addEventListener("click", resultChecker);
