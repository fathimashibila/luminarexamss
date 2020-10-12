num=Number(prompt("enter the number:"));

rev=0
while(num>0){
    rem=num%10
    rev=(rev*10)+rem
    num=parseInt(num/10) }
console.log(rev)