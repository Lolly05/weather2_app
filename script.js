// // 1. create an arrow function that takes 2 parameters and returns the sum of the two values
// const sumNum = (x, y) => {
// 	return x + y;
// }

// console.log(sumNum(5,9));

// // 2. create a program that removes a duplicate from an array
// // eg. numbers = [2,1,3,1,4,6,1,8,2,1,3,4]

// let numbers = [2,1,3,1,4,6,1,8,2,1,3,4]

// let results = numbers.filter((arr, index) => {
	
// 	return numbers.indexOf(arr) === index
// })

// console.log(results);

/*3. create a guessing game. Create a number that is stored in a variable and let user guess the number.
If they guess correctly, tell them they are correct. if higher than the number tell them it is higher. if lower tell them their guess is lower.
*/

// let guessNum = 50;
// let usersValue = 0
// function numberGuess() {
// 	do {
// 	    usersValue = Number(prompt("Enter a guess number"));
// 	}
// 	while(Number.isNaN(usersValue))

// 	if (usersValue > guessNum) {
// 		return `${usersValue} This number is greater than expected number `;
// 	}
// 	else if (usersValue < guessNum) {
// 		return `${usersValue} This number is lesser than the expected value`;
// 	}
// 	else {
// 		return `${usersValue} Correct number`;
// 	}


// }


//console.log(numberGuess());

//4. Find the largest number in an array.
//eg. myList = [3,5,1,8,2,7,9,4]

// let myList = [3,5,1,8,2,7,9,4]

// let value = Math.max(...myList);

// console.log(value);

/* 5. const students = [
  { name: "Wale", grade: 10 },
  { name: "Mary", grade: 15 },
  { name: "John", grade: 19 },
  { name: "Audu", grade: 9 },
];

from the above, get all the names of the students
Add all the score for students with grades 10 or above */

// const students = [
// 	  { name: "Wale", grade: 10 },
// 	  { name: "Mary", grade: 15 },
// 	  { name: "John", grade: 19 },
// 	  { name: "Audu", grade: 9 },
// 	];
	
// 	let sumValue = 0;

// 	for (let x in students) {
// 		console.log(students[x].name)
// 		if (students[x].grade >= 10) {
// 			sumValue += students[x].grade;
// 		}
// 	}

// 	console.log(sumValue);

// let changeLight = document.getElementById("image");
// function onOff(){
//  if (changeLight.src.match("ONbulb")) {
// 	changeLight.src = "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
//  }

//  else {
// 	changeLight.src = "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
//  }

// }

// 

// create a class Bank Account with properties of account name and balance. It should have method for withdrawer and deposit. User should not be able to withraw more than the balance they have or deposit a negative value.
// Craete a user account to test your code.
// Bonus, I should be able to deposit, withdraw or check balance as many times as I want.

class BankAccount {
	constructor(accountName, balance) {
		this.accountName = accountName;
		this.balance = balance;

	}
//Deposit Transact
	depositTransactions(name, deposit) {
		
	
		if (this.accountName === name && deposit > 0) {
			console.log(`Amount deposited ${deposit}`);

			this.balance += deposit;
		
			console.log(`Available Balanced ${this.balance}`);
			

			
		}
		else {
			console.log(`This is a wrong Account Name`);
		}
	}
	// Withdrawal Transaction
	debitTransaction(name, withdrawal) {
		
		if (this.accountName === name && this.balance < withdrawal) {
			console.log(`Account Balance Insufficient`);
		}
		
		
		if (this.accountName === name && this.balance > withdrawal) {
			console.log(`Debit Amount ${withdrawal}`);

			this.balance -= withdrawal;
			console.log(`Available Balance ${this.balance}`);
	

		}

		
	
	}
	checkBalance(name) {
		if (this.accountName === name) {
			console.log(`Available Balance ${this.balance}`)
		}
		else{
			console.log(`Invalid name`)
		}
	}

	
	


	
}

class UserAccount extends BankAccount {
	constructor (accountName, balance, role, userName, branch) {
		super(accountName, balance);
		this.role = role;
		this.userName = userName;
        this.branch = branch;

	}
	openAccount() {

		console.log(`${this.role}: ${this.userName} Opened an Account for ${this.accountName} with ${this.balance} at ${this.branch} Branch`);
	}
}

let client1 = new BankAccount("Lola" , 0);
console.log(client1.depositTransactions("Lola", 5000));
console.log(client1.depositTransactions("Lola", 10000))
console.log(client1.debitTransaction("Lola", 10000))
//console.log(client1.checkBalance("Lola"))
console.log(client1.debitTransaction("Lola", 10000))

let user1 = new UserAccount("Oyin", "N5000","Customer Service Analyst","Omolola", "Lagos");
console.log(user1.openAccount());


