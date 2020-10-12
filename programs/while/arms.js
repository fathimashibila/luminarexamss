number=Number(prompt("enter the number="))

cubesum=0
while(number!=0){
    digit=number%10
    cubesum=cubesum+(digit**3)

    number=parseInt(number/10)   }
console.log("Armstrong number=",cubesum)