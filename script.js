//complete this code
class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}
	get name() {
		return this._name;
	}
	set age(age) {
		this._age = age;
	}
}

class Student extends Person {
	constructor(name, age) {
		super(name, age);
	}
	study() {
		console.log(`${this.name} is studying.`);
	}
}

class Teacher extends Person {
	constructor(name, age) {
		super(name, age);
	}
	teach() {
		console.log(`${this.name} is teaching.`);
	}
}

const student = new Student("Pritam", 25);
student.study();
const teacher = new Teacher("Avi", 25);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
