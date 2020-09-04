let d = ["sun", "moon", "earth", "saturn", "rings", "isro", "nasa", "space"];
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`Array ${d} in reverse order is`);
for (let i = d.length - 1; i >= 0; i--) {
    console.log(d[i]);
}
m = []
for (let i = n.length - 1; i >= 0; i--) {
    console.log(n[i]);
    m.push(n[i])
}
console.log("Array " + n + " in reverse order is " + m);
console.log(m)