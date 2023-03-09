// Write your solution in this file!

    const employee = {};
 employees.name = "Sam";
   employee.streetAddress = "11 Broadway"; 
    
    function updateEmployeeWithKeyAndValue(employee, key, value) {
        const newEmployee = {...employee};
        newEmployee[key] = value;
    return newEmployee;
     
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;

}

function deleteFromEmployeeByKey(employee, key){
    const newemployee = Object.assign({}, employee);
  delete newemployee[key];
  return newemployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
  return employee;

}

