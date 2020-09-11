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
    },
    {
        Name: "Sam",
        age: 36,
        country: "India",
        hobbies: [
            "reading",
            "singing",
            "watching series",
            "painting", "lecturing"
        ]
    },
    {
        Name: "Thor",
        age: 387089,
        country: "India",
        hobbies: [
            "reading",
            "singing",
            "watching series",
            "painting", "lecturing"
        ]
    },
];

function displayArrayObjects(arrayObjects) {
    var len = arrayObjects.length,
        tet = "";
    for (var i = 0; i < len; i++) {
        var myObject = arrayObjects[i];

        for (var x in myObject) {
            tet += (x + ": " + myObject[x] + " ");
        }
        tet += "\n";
    }
    console.log(tet)
    var t = "Persons of age lessthan 30 are:\n";
    console.log(t)
    text = "";
    for (var i = 0; i < len; i++) {
        var myObject = arrayObjects[i];
        var m = [0]
        if (arrayObjects[i].age < 30) {
            for (var x in myObject) {
                text += (x + ": " + myObject[x] + " ");
            }
        }
        text += "\n";
    }

    console.log(text)
    var yh = "Persons from country India are:\n";
    console.log(yh)
    xt = "";
    for (var i = 0; i < len; i++) {
        var myObject = arrayObjects[i];
        var m = [0]
        if (arrayObjects[i].country == "India") {
            for (var x in myObject) {
                xt += (x + ": " + myObject[x] + " ");
            }
        }
        xt += "\n";
    }

    console.log(xt)

}
displayArrayObjects(lineChartData);