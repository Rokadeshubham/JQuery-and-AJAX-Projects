//Get the HTML ELE
let firstNumberElement = $('#first_number');
let secondNumberElement = $('#second_number');
let operatorElement = $('#operator');
let resultButton = $('#result_button');



// Click on Plus Button
$('#plus-button').click(function () {
    operatorElement.text('+')
});
// Click on MInus
$('#minus-button').click(function () {
    operatorElement.text('-')
});

// Click on Div
$('#div-button').click(function () {
    operatorElement.text('/')
});
// Click on Multiplication
$('#mul-button').click(function () {
    operatorElement.text('*')
});



//Click on equals button
$('#equals_button').click(function () {
    let firstNumber = firstNumberElement.val();
    let secondNumber = secondNumberElement.val();
    var operator = operatorElement.text().trim();
    var result = 0;
    if (firstNumber !== '' && secondNumber !== ''){
        //ADD CALCULATION LOGIC
        var num1 = parseFloat(firstNumber);
        var num2 = parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = num1+num2;
                break;
            case '-':
                result = num1-num2;
                break;
            case '*':
                result = num1*num2;
                break;
            case '/':
                result = num1/num2;
                break;
            default:
                result = 'RESULT';
                    break;


        }
        resultButton.text(result);
    }else{
        resultButton.text('RESULT');
    }
});
$('#clear-button').click(function () {
    firstNumberElement.val('');
    secondNumberElement.val('');
    operatorElement.text('+');
    resultButton.text('Result')
});