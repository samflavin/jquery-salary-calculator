
$( document ).ready( onReady );

let employeeInfo = [];

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
}

function onReady() {
    $( '#addEmployee' ).on( 'click', addEmployee)
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
        ${employeeInfo[i].jobTitle} ${employeeInfo[i].salary}</li>`)
    }// end for
    
}