var lineChartData = [{
    Name: "Tony",
    age: 21,
    country: "America",
    hobbies: [
        "reading",
        "singing",
        "watching series",
        "painting", "racing"
    ]
}, {
    Name: "Steve",
    age: 23,
    country: "US",
    hobbies: [
        "reading",
        "singing",
        "watching series",
        "painting", "lecturing"
    ]
}, {
    Name: "T'Challa",
    age: 19,
    country: "Wakanda",
    hobbies: [
        "reading",
        "singing",
        "watching series",
        "painting", "helping"
    ]
}];

function displayArrayObjects(arrayObjects) {
    var len = arrayObjects.length,
        text = "";

    for (var i = 0; i < len; i++) {
        var myObject = arrayObjects[i];

        for (var x in myObject) {
            text += (x + ": " + myObject[x] + " ");
        }
        text += "\n";
    }

    console.log(text)
}
displayArrayObjects(lineChartData);