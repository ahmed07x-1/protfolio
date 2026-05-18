let participantName = "Mohd Younus";
let age = 22;
let hackathonScore = 95;
let currentAcademicYear = 4;

// Validate Name
if (
  participantName !== "" &&
  typeof participantName === "string"
) {
  console.log("Valid Name");
} else {
  console.log("Invalid Name");
}

// Validate Age
if (
  typeof age === "number" &&
  age >= 18
) {
  console.log("Valid Age");
} else {
  console.log("Invalid Age");
}

// Validate Hackathon Score
if (
  typeof hackathonScore === "number" &&
  hackathonScore >= 0
) {
  console.log("Valid Hackathon Score");
} else {
  console.log("Invalid Hackathon Score");
}

// Validate Academic Year
if (
  typeof currentAcademicYear === "number" &&
  currentAcademicYear >= 1 &&
  currentAcademicYear <= 4
) {
  console.log("Valid Academic Year");
} else {
  console.log("Invalid Academic Year");
}