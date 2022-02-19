
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {

    // * Using this method prevents the default behavior
    event.preventDefault();

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    
    // The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN . If not NaN , the return value will be the integer that is the first argument taken as a number in the specified radix
    height = parseInt(height);
    weight = parseInt(weight);

    // * you should write number
    if(isNaN(height) || isNaN(weight)){
        document.querySelectorAll('span').innerHTML = 'pls filling the blank';
        
    }



    height = height / 100;
    let result = weight / (height * height);
    
    result = result.toFixed(2);
    document.querySelector('#result').innerHTML = result;

    console.log(result);
});
