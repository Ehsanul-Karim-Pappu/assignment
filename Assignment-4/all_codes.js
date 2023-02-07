// Problem 1: Let’s play a mind game
// The 'mindGame()' function will take a positive number as input. Then it will multiply the number by 3, then adding 10 to the result, then dividing the result by 2, then subtract 5 from the result. After this whole calculation the function will return the result.

function mindGame(positiveNumber) {
    if(typeof(positiveNumber) == 'number') {
        let result = (((positiveNumber * 3) + 10) / 2) - 5;
        return result;
    }
    else {
        return 'Please input a positive number.'
    }
}




// Problem 2: Finding even or odd
// The 'evenOdd()' function will take a string as input. The function will return 'even' if the input string length is even otherwise if the length is odd then the function will return 'odd'.

function evenOdd(string) {
    if(typeof(string) == 'string') {
        sum = 0;
        for(i = 0; i < string.length; i++) {
            sum++;
        }
        if(sum % 2 == 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
    else {
        return 'Please input string.'
    }
}




// Problem 3: Is Less or Greater than seven
// The 'isLGSeven()' function will take a number as input. The function have to find the difference between the number and 7, then it will compare if the difference is either less than 7 or not. If the difference is less then 7 then the function will return the difference. If not then the function will return double of the input number.

function isLGSeven(number) {
    if (typeof(number) == 'number') {
        const difference = number - 7;
        if(difference < 7) {
            return difference;
        }
        else {
            return (number * 2);
        }
    }
    else {
        return 'Please input a valid number.'
    }
}