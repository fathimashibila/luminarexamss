terms=Number(prompt("enter the no of terms="))
i=0
n1=0
n2=1
while(i<terms){
    console.log(n1)

    n3=n1+n2
    n1=n2
    n2=n3
    i+=1
}