empolyee = {

    0: { eid: 100, name: "ajay", desig: "devop", join: 1981, resign: 2003 },
    1: { eid: 101, name: "vijay", desig: "devop", join: 1992, resign: 2008 },
    2: { eid: 102, name: "bijoy", desig: "ba", join: 1999, resign: 2007 },
    3: { eid: 103, name: "jhon", desig: "ba", join: 1989, resign: 2010 },
    4: { eid: 104, name: "danie", desig: "qa", join: 2009, resign: 2014 },
    5: { eid: 105, name: "lari", desig: "qa", join: 1987, resign: 2010 }
}


array=[]
for (i in empolyee){                             
    array.push(empolyee[i])                       
}

// qs1: print all employee name and designation only

for (emp of array) {

    name=emp["name"]
    desig=emp["desig"]
    console.log("Employee name is "+name+" designation is "+desig)
}



// qs2:print all employee details whose desig equals devop

details=array.filter(obj=>(obj["desig"]=="devop"))
console.log("Detailes of employe haveing designation devop",details)


// qs3:print all employee details those who are woking in 80s  [*(>1980 & <1190)]
year80s=array.filter(obj=>(obj["join"]>1980 && obj["join"]<1990))
console.log("Deatiles of employee in 80s",year80s)



// qs4:print all employee details those who have experience >9 years
exp=array.filter(obj=>((obj["resign"]-obj["join"])>9))
console.log("Detailes of employe having more than 9 year experince",exp)


// qs5:sort all employees based on theire joining year
sortjoinyear=array.sort(function(obj1,obj2){
    return obj1.join-obj2.join
})
console.log("Sorted by year of joining",sortjoinyear)