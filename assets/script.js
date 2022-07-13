let result = document.getElementById("displayedResult");

const db = []

const objCalculo = (firstEl,secondEL,operator)=>{
  [PrimeiroElemento] = firstEl;
  [SegundoElemento] = secondEL;
  [Operador] = operator;

  return `${PrimeiroElemento}, ${SegundoElemento}, ${Operador}`
}


result.innerText = "0";
let displayNumber = 0;
let currentNumber = 0;
let currentOperator = null;
let flagNew = true;

addEventListener("click", function (event) {
  let target = event.target;

  if (target.value !== undefined) {
    if (!isNaN(target.value)) {
      IsNumber(target.value);
    } else if (target.value == "C") {
      IsClear();
    } else if (target.value == "=") {
      IsEqualsSignal();
      DisplayPrevious();
    } else {
      IsOperator(target.value);
    }
  }

  console.log(displayNumber + "  " + currentNumber + "   " + currentOperator);
});

function IsNumber(numberClick) {
  if (flagNew) {
    displayNumber = numberClick;
    result.innerText = displayNumber;
    flagNew = false;
  } else {
    displayNumber += numberClick;
    result.innerText = displayNumber;
  }
}

function IsOperator(operator) {
  if(currentOperator==null){
  currentOperator = operator;
  currentNumber = displayNumber;
  result.innerText += " " + operator;
  displayNumber = 0;
  flagNew = true;
  }
  else{
  IsClear()
  result.innerText = "0";
  }
}
function IsEqualsSignal() {
  let finalResult;

  switch (currentOperator) {
    case "+":
      finalResult = Number(currentNumber) + Number(displayNumber);
      break;
    case "-":
      finalResult = Number(currentNumber) - Number(displayNumber);
      break;
    case "*":
      finalResult = Number(currentNumber) * Number(displayNumber);
      break;
    case "/":
      finalResult = Number(currentNumber) / Number(displayNumber);
      break;
    case null:
      finalResult = 0;

    default:
      break;
  }  

  console.log(`Esse é o DB: ${db}`)

  

  db.push({
    primeiroEL: currentNumber,
    segundoEl: displayNumber,
    Operador: currentOperator,
    Reulstado: finalResult
  });



  result.innerText = finalResult;
  IsClear();

  
 
  
  

  console.log(finalResult);

}
function IsClear() {
  displayNumber = 0;
  currentNumber = 0;
  currentOperator = null;
  flagNew = true;
}

function DisplayPrevious() {

  db.forEach(element => {
    console.log(element)
  });
}
