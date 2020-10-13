pattern = "ABBBACCCCCC"

word = {}
for (char of pattern) {
    if (char in word) {
        console.log(char)
        break
    }
    else {
        word[char] = 1
    }

}