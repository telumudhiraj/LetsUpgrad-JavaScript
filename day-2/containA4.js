let d = ["sun", "mars", "moon", "earth", "saturn"];
let c = 0;
console.log("The elements that contain character 'a' in array of strings " + d + " are ")
for (let i = 0; i < d.length; i++) {
    c = 0;
    for (let j = 0; j < d[i].length; j++) {
        if (d[i][j] == "a") {
            c++;

        }
        if (c != 0) {
            console.log(d[i]);
        }
    }
}