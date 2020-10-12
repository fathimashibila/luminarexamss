num1 = Number(prompt("enter the number="))
num2 = Number(prompt("enter the number="))
num3 = Number(prompt("enter the number="))
if ((num1 >= num2) && (num1 >= num3)) {
    console.log(num1+" is maximum")
}
else if ((num2 >= num1) && (num2 >= num3)){
    console.log( num2+ " is maximum")
}
else if ((num3 >= num1) && (num3 >= num2)) {
    console.log( num3+" is maximum")
}
else if (num1 == num2 == num3) {
    console.log("all same")
}