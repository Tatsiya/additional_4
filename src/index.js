function getSum(sum, secondTerm, shift) {
    var resultOfSum = ""; 
    var firstTermIndex = sum.length - 1;
    var cherry = 0;
    var firstNumeral;
    var secondNumeral;
    var sumOfNumerals;

    for (var secondTermIndex = secondTerm.length - 1; secondTermIndex >= 0;) {
        if (shift > 0) {
            resultOfSum = sum.charAt(firstTermIndex) + resultOfSum;
            shift--;
        } else {
            if (sum.charAt(firstTermIndex) !== "") {
                firstNumeral = +sum.charAt(firstTermIndex);
            } else {
                firstNumeral = 0;
            }

            secondNumeral = +secondTerm.charAt(secondTermIndex);
            if (secondTermIndex === 0) {
                sumOfNumerals = firstNumeral + secondNumeral + cherry;
            } else {
                sumOfNumerals = (firstNumeral + secondNumeral + cherry) % 10;
                cherry = Math.floor((firstNumeral + secondNumeral + cherry) / 10);
            }
            
            resultOfSum = sumOfNumerals + resultOfSum;
            secondTermIndex--;
        }

        firstTermIndex--;
    }
    return resultOfSum;
} 

function resultOfMyltiplying(firstNumber, secondNumeral) {
    var result = '';
    var cherry = 0;
    var firstNumeral;
    var multiply;

    for (var firstNumberIndex = firstNumber.length - 1; firstNumberIndex >= 0; firstNumberIndex--) {
        firstNumeral = +firstNumber.charAt(firstNumberIndex);

        if (firstNumberIndex === 0) {
            multiply = firstNumeral * secondNumeral + cherry;
        } else {
            multiply = (firstNumeral * secondNumeral + cherry) % 10;
            cherry = Math.floor((firstNumeral * secondNumeral + cherry) / 10);
        }

        result = multiply.toString() + result;
    }
    return result;

}

module.exports = function multiply(first, second) {
    var secondNumeral;
    var promResult;
    var result = "";
    var shift = 0;

    for (var secondNumberIndex = second.length - 1; secondNumberIndex >= 0; secondNumberIndex--) {
        secondNumeral = second.charAt(secondNumberIndex);
        promResult = resultOfMyltiplying(first, secondNumeral);
        result = getSum(result, promResult, shift);
        shift++;
    }

    return result;
}