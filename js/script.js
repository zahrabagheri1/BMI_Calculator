// This function calculates BMI
function calculatorBMI(height, weight) {
  height = height / 100;
  let result = weight / (height * height);
  result = result.toFixed(2);
  return result;
}

// THis function  Clear result
function clearResult() {
  document.querySelector("#result").innerHTML = "";
  document.querySelector("#rangeBMI").innerHTML = "";
  document.querySelector("#rangeBMI").style.backgroundColor = "";
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  // * Using this method prevents the default behavior
  event.preventDefault();

  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  //   * If the blanks were empty
  if (height.trim() === "" || weight.trim() === "") {
    // document.querySelectorAll('span').innerHTML = 'Fill in the blanks';
    alert("Fill in the blanks");
    return false;
  }

  // The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN . If not NaN , the return value will be the integer that is the first argument taken as a number in the specified radix
  height = parseInt(height);
  weight = parseInt(weight);

  // * If the input was not a number
  if (isNaN(height) || isNaN(weight)) {
    // document.querySelector('span').innerHTML = 'Please enter the numbers';
    alert("Please enter the numbers");
    return false;
  }

  // * If the number was less than zero
  if (weight < 0 || height < 0) {
    // document.querySelectorAll('span').innerHTML = "Please enter numbers greater than zero";
    alert("Please enter numbers greater than zero");
    return false;
  }

  document.querySelector("#result").innerHTML =
    "Your BMI: " + calculatorBMI(height, weight);

  //   ! deermine the range BMI
  const range = calculatorBMI(height, weight);
  if (range <= 18.5) {
    document.querySelector("#rangeBMI").innerHTML = "UnderWeight";
    document.querySelector("#rangeBMI").style.backgroundColor = "yellow";
    return false;
  } else if (18.5 < range && range <= 25) {
    document.querySelector("#rangeBMI").innerHTML = "Normal";
    document.querySelector("#rangeBMI").style.backgroundColor = "green";
    return false;
  } else if (25 < range && range <= 30) {
    document.querySelector("#rangeBMI").innerHTML = "OverWieght";
    document.querySelector("#rangeBMI").style.backgroundColor = "orange";
    return false;
  } else {
    document.querySelector("#rangeBMI").innerHTML = "Obese";
    document.querySelector("#rangeBMI").style.backgroundColor = "red";
    return false;
  }
});

document.querySelector("input#height").addEventListener("keydown", clearResult);
document.querySelector("input#weight").addEventListener("keydown", clearResult);
