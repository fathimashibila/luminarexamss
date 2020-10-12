number = Number(prompt("Enter the number="))
N = number;
rev = 0;
while (number != 0) {
    reminder = number % 10
    rev = (rev * 10) + reminder
    number = parseInt(number/10)}


    if (rev == N) {
        console.log("palindrome")
    }
    else {
        console.log("not palindrome")
    }
