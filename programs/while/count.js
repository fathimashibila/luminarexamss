number=Number(prompt("enter the number="))
count=0
while(number!=0){
    number=parseInt(number/10)
    count=count+1}
console.log(count)