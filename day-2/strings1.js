let s = "Iron Man is the Best Super hero";
let searChar = "o";
console.log("The index at which we have Searching Element " + searChar + " in array " + s + " is ")
for (let i = 0; i < s.length; i++) {
    if (s[i] == searChar) {
        console.log(i);
    }
};