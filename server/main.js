import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {	
	
	// class Person {
	// 	constructor(name = 'Anonymous', age=0) {
	// 		this.name = name;
	// 		this.age = age;			
	// 	}

	// 	getGreeting() {
	// 		return `Hi! I am ${this.name}`;
	// 	}

	// 	getPersonDescription() {
	// 		return '${this.name} is ${this.age} years old.';
	// 	}
	// }


	// class Programmer extends Person {
	// 	constructor(name, age, preferredLanguage = 'asssembly') {
	// 		super(name, age);
	// 		this.preferredLanguage = preferredLanguage;
	// 	}

	// 	getGreeting() {			
	// 		return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;			
	// 	}
	// }

	// let programmer = new Programmer('Mike', 32, 'Javascript');
	// console.log(programmer.getGreeting());


	// let obj = {
	// 	name: 'Mike',
	// 	printName() {
	// 		console.log(`Name: ${this.name}`);
	// 	}
	// };

	// obj.printName();

	let user = {
		name: 'Mike',
		location: 'Nashville'
	};

	let person = {
		...user,
		age: 25
	};

	console.log(person);

});