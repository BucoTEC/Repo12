var contacts = [
  {
    firstName: "Jhon",
    lastName: "Doe",
    number: 12365495208,
    likes: ["C", "C++", "C#"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    number: 4568295761,
    likes: ["Python", "Swift", "R"],
  },
  {
    firstName: "Richard",
    lastName: "Roe",
    number: "unknown",
    likes: ["React", "Angular", "Vue"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    number: 12365495208,
    likes: ["JavaScript", "Node", "HTML & CSS"],
  },
];

function lookUpProfile(name, prop) {
  for (var i of contacts) {
    if (i.firstName === name && i[prop]) {
      return i[prop];
    } else if (i.firstName !== name) {
      return "No such contact";
    } else {
      return "No such property";
    }
  }
}

console.log(lookUpProfile("Jhon", "likes"));
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("Jhon", "address"));

module.exports = lookUpProfile;
