class book {

    constructor(id, name, pageno, price) {
        this.id = id
        this.name = name
        this.pageno = pageno
        this.price = price
    }


    getbook() {
        console.log(this.id)
        console.log(this.name)
        console.log(this.pageno)
        console.log(this.price = this.price)
    }
}
let obj1 = new book(1, "book1", 150, 250)
let obj2 = new book(2, "book2", 250, 350)
let obj3 = new book(3, "book3", 350, 450)
let obj4 = new book(4, "book4", 450, 550)
var array = []
array.push(obj1)
array.push(obj2)
array.push(obj3)
array.push(obj4)

//book having price greater than 250
console.log(array)
for (i of array) {
    if (i["price"]>250){
        console.log(i["name"])
    } 
}

//book having highest value
values=[]
for (i of array){
values.push(i["price"])
}
max = Math.max(...values)

for( i of array){
    if (max==i["price"]){
        console.log("Book having maximum price"+i["name"])
    }
}
//uppercase
for (i of array){
    upper=i["name"].toUpperCase()
    console.log(upper)
}
