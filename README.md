JavaScript Function Challenges
This project contains solutions to two JavaScript challenges involving array and object manipulation using destructuring. The challenges focus on:

Finding the highest-paid employee in an array of employee objects.
Swapping the first and last employees in the array using destructuring.
Functions Implemented:
1. highestPaid(employees)
This function takes an array of employee objects and returns the employee with the highest salary. It uses JavaScript's reduce method to compare the salaries and find the highest-paid employee.

Example:
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees));
// Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

2. destructuringToSwap(employees)
This function swaps the first and last employee in the array using destructuring. It modifies the original array and returns it.

Example:const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(destructuringToSwap(employees));
// Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
//           { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
//           { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]

How to Use
Clone or download this repository.
Open the JavaScript file in your preferred editor.
Use the example invocations provided to test the functions.
Submission Guidelines:
Ensure the code is well-commented and easy to understand.
Include example invocations to demonstrate how each function works.


