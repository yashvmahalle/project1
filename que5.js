// Function to find the employee with the highest salary using destructuring
function highestPaid(employees) {
    return employees.reduce((highest, current) => {
      return current.salary > highest.salary ? current : highest;
    });
  }
  const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(highestPaid(employees1)); 
  function destructuringToSwap(employees) {
    if (employees.length > 1) {

      [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];
    }
    return employees;
  }
  const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(destructuringToSwap(employees2)); 
  // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
  //           { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
  //           { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]
  