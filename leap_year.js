function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year";
            } else {
                return "Not a leap year";
            }
        } else {
            return "Leap year";
        }
    } else {
        return "Not a leap year";
    }
}

var year = prompt("Enter year: ");
var parsedYear = parseInt(year);

if (isNaN(parsedYear)) {
    console.log("Invalid input. Please enter a valid year.");
} else {
    var result = isLeap(parsedYear);
    console.log(result);
}
