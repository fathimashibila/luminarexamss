

//no of even and odd number in a limit 

low=Number(prompt("enter the lower limit="))


upper=Number(prompt("enter the upper limit"))
evensum=0
oddsum=0
for (let i=low;i<=upper;i++){
    if(i%2==0){
        evensum=evensum+1}
    else{
        oddsum = oddsum + 1}

}
console.log(" no of even numbers are:"+evensum)
console.log("no of numbers are:"+oddsum)