class Plasiyer {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  satName(name: string) {
    this.name = name;
  }

  setAge(age: number) {
    this.age = age;
  }
  setSurname(surname: string) {
    this.surname = surname;
  }

  static isEqual(plasiyer1: Plasiyer, plasiyer2: Plasiyer) {
    return (
      plasiyer1.name === plasiyer2.name &&
      plasiyer1.surname === plasiyer2.surname &&
      plasiyer1.age === plasiyer2.age
    );
  }
}
