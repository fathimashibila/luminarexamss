line = "HHHPPSDAAA"

dict = {}  ///h:3,a:2,b:1
for (letter of line) {
    if (letter in dict) {
        dict[letter] += 1
    }
    else {
        dict[letter] = 1     //key==h and value ==3
    }
}
console.log(dict)
output=""
for (key in dict){
    output=output+dict[key]+key
    
}
console.log(output)