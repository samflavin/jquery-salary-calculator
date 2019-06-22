
$( document ).ready( onReady );

let employeeInfo = [];
let totalSalary = 0;



function addEmployee () {
    // capture employee ino
    // place in new object
    let newEmployee = {
        firstName: $( '#firstNameIn' ).val(),
        lastName: $( '#lastNameIn' ).val(),
        employeeId: $( '#idIn').val(),  //returning 
        jobTitle: $( '#jobTitleIn' ).val(),
        salary: $( '#salaryIn' ).val()
    }
    console.log(newEmployee);
    //push object into an array
    employeeInfo.push( newEmployee );
    // display employee info
    displayEmployeeInfo();
    addCosts(newEmployee.salary);
    costCheck();
    // Clear inputs
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#salaryIn').val('');
}

function addCosts (salary) {
    console.log( 'in add costs' );
    let ell = $( '#costOut' );
    //empty element
    ell.empty();
    salary = Number(salary);
    totalSalary += (salary/12);
    //  add up employees salaries
   
        ell.append(`Total Monthly Cost: $${totalSalary}`)
    }



function onReady() {
    $( '#addEmployee' ).on( 'click', addEmployee);
    $( '#deleteEmployee' ).on('click', fireEmployee);
}

function displayEmployeeInfo() {
    console.log( 'in displayEmployeeInfo')
    let el = $( '#employeeOut' );
    //empty element
    el.empty();
    //loop through employeeInfo array
    for (let i=0; i<employeeInfo.length; i++){
        //append each item to DOM
        el.append(`<li>${employeeInfo[i].firstName} ${employeeInfo[i].lastName} ${employeeInfo[i].employeeId} 
        ${employeeInfo[i].jobTitle} ${employeeInfo[i].salary}...${employeeInfo[i].firstName}, <button id="deleteEmployee">Can I have a word with you in my office...</button></li>`)
    }// end for   
}

function fireEmployee () {
    console.log('Were gonna have to let you go...')
}

function costCheck () {
    console.log('in costCheck function');
    //get value of total cost and check that it's less than 20,000
    let currentCost = totalSalary;
    if ( currentCost > 20000 ){
        console.log('ABORT MISSION!')
    }

}

