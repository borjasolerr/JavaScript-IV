// CODE here for your Lambda Classes

/*------- Person -------*/
class Person {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
    this.gender = options.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}
/*------- Instructor -------*/
class Instructor extends Person {
  constructor(options) {
    super(options);
    this.speciality = options.speciality;
    this.favLanguage = options.favLanguage;
    this.catchPhrase = options.catchPhrase;
  }
  demo(subject) {
    console.log(`'​​​​​Today we are learning about ${subject}'`);
  }
  grade(student, subject) {
    console.log(
      `'​​​​​${student.name} receives a perfect score on ${subject}'`
    );
  }
}
/*------- Student -------*/
class Student extends Person {
  constructor(options) {
    super(options);
    this.previousBackground = options.previousBackground;
    this.className = options.className;
    this.favSubjects = options.favSubjects; //array
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => {
      console.log(subject);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun spring challenge on ${subject}`);
  }
}
/*------- ProjectM -------*/
class ProjectM extends Instructor {
  constructor(options) {
    super(options);
    this.gradClassName = options.gradClassName;
    this.favInstructor = options.favInstructor;
  }
  standUp(chanel) {
    console.log(`${this.name} announces to ${chanel}, @chanel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}
// INSTRUCTORS
const homer = new Instructor({
  name: "Homer",
  age: 40,
  location: "San Francisco",
  gender: "M",
  speciality: "React",
  favLanguage: "JavaScript",
  catchPhrase: "Don't forget the docs"
});

const fred = new Instructor({
  name: "Fred",
  age: 37,
  location: "Bedrock",
  gender: "M",
  specialty: "Back-end",
  favLanguage: "JavaScript",
  catchPhrase: `Don't forget the homies`
});

// STUDENTS
const borja = new Student({
  name: "Borja",
  age: 24,
  location: "Ibiza",
  gender: "M",
  previousBackground: "Entrepreneur",
  className: "WEBEU1",
  favSubjects: ["Git", "LESS", "JavaScript"]
});

const maria = new Student({
  name: "Maria",
  age: 23,
  location: "London",
  gender: "F",
  previousBackground: "Designer",
  className: "WEBEU1",
  favSubjects: ["Sass", "JavaScript", "React"]
});

// PROJECT MANAGERS
const sarah = new ProjectM({
  name: "Sarah",
  age: 34,
  location: "San Francisco",
  gender: "F",
  gradClassName: "CS39",
  favInstructor: "Fred"
});

const michel = new ProjectM({
  name: "Michel",
  age: 34,
  location: "New York",
  gender: "M",
  gradClassName: "CS1",
  favInstructor: "Fred"
});

homer.demo("React");
homer.grade(maria, "JS array methods");
fred.demo("Front-end");
fred.grade(borja, "JS classes");

borja.PRAssignment("JS Project");
maria.sprintChallenge("JS Fundamentals");

michel.standUp("WEBUE1");
sarah.debugsCode(maria, "the this keyword");
