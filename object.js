//we can create object by 3 ways
// * By using object literal

employeeDetails = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    Salary: "$250k",
    Domain: "Development"
};


// * By creating instance of the object
var studentDetails = new Object();
studentDetails.firstName = "Chad";
studentDetails.lastName = "Cable";
studentDetails.age = 16;
studentDetails.group = "Bio-Maths";

// * By using an object constructor

function objectShows(genre, episodes, ott) {
    this.genre = genre;
    this.episodes = episodes;
    this.ott = ott;


    this.increaseEpisodes = increaseEpisodes;
}
function increaseEpisodes(episodesNumbers) {
    this.episodes = episodesNumbers;
}

showDetails = new objectShows("Crime", 10, "Netflix");

showDetails.increaseEpisodes(20);
for (const key in employeeDetails) {
    console.log(`${key} => ${employeeDetails[key]}`);
}

for (const key in studentDetails) {
    console.log(`${key} => ${studentDetails[key]}`);
}
for (const key in showDetails) {
    console.log(`${key} => ${showDetails[key]}`);
}
console.log(showDetails.episodes);
