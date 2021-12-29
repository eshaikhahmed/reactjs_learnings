import React from "react";

function Employee({employee}){

    return (
        <li>{employee.id} and {employee.name}</li>
    )
}

export default Employee;
