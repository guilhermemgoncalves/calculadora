let result = document.getElementById("displayedResult");

result.innerText = "0";
let resultCalc = 0;

addEventListener("click", function (event) {
  let target = event.target;

  if (target.value !== undefined) {
    if (!isNaN(target.value)) {
      IsNumber(target.value);
    } else if (target.value == "C") {
      IsClear();
    } else if (target.value == "=") {
        IsEqualsSignal();
    }
    else{
        IsOperator();
    }
  }

  function IsNumber(numberClick) {
    if (result.innerText == "0") {
      resultCalc = numberClick;
    } else resultCalc += numberClick;

    console.log(resultCalc);
    result.innerText = resultCalc;
  }

  function IsOperator() {
      console.log("Cheguei");
}
function IsEqualsSignal() {    

  }
  function IsClear() {
    resultCalc = 0;
    result.innerText = resultCalc;
  }

  function DisplayNumber() {}
});
