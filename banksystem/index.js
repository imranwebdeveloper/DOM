const inputAmount = document.getElementById("amount");
const balance = document.getElementById("balance");
const withdraw = document.getElementById("withdraw");
const totalDepositElement = document.getElementById("deposit-amount");

document.querySelector(".deposit-btn").addEventListener("click", () => {
  console.log(inputAmount.value);
  if (inputAmount.value === "") {
    return alert("Please enter your deposit amount");
  }
  const totalInput = parseFloat(inputAmount.value);

  const totalBalance = parseFloat(balance.innerText) + totalInput;
  const totalDepositAmount =
    parseFloat(totalDepositElement.innerText) + totalInput;
  totalDepositElement.innerText = totalDepositAmount;
  balance.innerText = totalBalance;
  inputAmount.value = "";
});
document.querySelector(".withdraw-btn").addEventListener("click", () => {
  if (inputAmount.value === "") {
    return alert("Please enter your withdraw amount");
  }
  const totalInput =
    parseFloat(inputAmount.value) + parseFloat(withdraw.innerText);
  const totalBalance = parseFloat(balance.innerText) - totalInput;
  balance.innerText = totalBalance;
  withdraw.innerText = totalInput;
  inputAmount.value = "";
});
