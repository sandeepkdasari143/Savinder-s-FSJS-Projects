//Write a switch case statement which tells your weekly routine

const day = "thursday";

switch (day) {
    case "monday":
        console.log("Revise Video classes from the Ineuron's FSJS 2.0 Bootcamp");
        break;

    case "tuesday":
    case "wednesday":
        console.log("Work on given projects");
        break;

    case "thursday":
        console.log("Write a blog on given topic");
        break;
    case "friday":
        console.log("Prepare for interview questions");
        break;

    case "saturday":
    case "sunday":
        console.log("Watch Live classes");
        break;

    default:
        console.log("Enter a Valid day");
}

if (day === "monday") {
    console.log("Revise Video classes from the Ineuron's FSJS 2.0 Bootcamp");
} else if (day === "tuesday" || day === "wednesday") {
    console.log("Work on given projects");
} else if (day === "thursday") {
    console.log("Write a blog on given topic");
} else if (day === "friday") {
    console.log("Prepare for interview questions");
} else if (day === "saturday" || day === "sunday") {
    console.log("Watch Live classes");
} else {
    console.log("Enter a valid day");
}