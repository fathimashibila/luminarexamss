employes = [[1001, "arun", 15000], [1001, "arjun", 20000],[1001, "vinu", 25000], [1001, "binu", 18000]]
for (emp of employes){
    if (emp[2] > 17000) {
        console.log(emp[1])
    }
}
sum = 0
for (e of employes){
    sum =sum +e[2]
}
console.log(sum)