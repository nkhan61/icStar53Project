function calculateSum() {
  let n = document.getElementById("calculateNumbers").value;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  document.getElementById("resultsSum").textContent = sum;
  console.log(sum);
}

function printEvenNumbers() {
  let j = parseInt(document.getElementById("evenNumbers").value);
  let result = "";

  for (let i = 0; i <= j; i += 2) {
    result += i + " ";
  }

  document.getElementById("even").textContent = result;
  console.log(result);
}
function checkVotingEligibility() {
  let age = parseInt(document.getElementById("ageInput").value);
  let resultElement = document.getElementById("ageCalculation");

  if (age >= 18) {
    resultElement.textContent = "You are eligible to vote";
  } else {
    resultElement.textContent = "Sorry, you are not eligible to vote yet";
  }
}
