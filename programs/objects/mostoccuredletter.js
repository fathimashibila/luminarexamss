pattern = "ABBBBBBBBBBACCCCCC"

word = {}
for (char of pattern) {
    if (char in word) {
        word[char] += 1
    }
    else {
        word[char] = 1
    }
}
console.log(word)
let array = Object.values(word)
max = Math.max(...array)
for (name in word) {

    if (word[name] == max)
        console.log(name)
}
