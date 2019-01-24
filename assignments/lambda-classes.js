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
