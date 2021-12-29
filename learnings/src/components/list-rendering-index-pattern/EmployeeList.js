import React, {Component} from 'react'

class EmployeeList extends Component{

    render() {
        const employeeList =[{empName: "Ejaz"}, {empName: "Sameer"}]
        const displayList = employeeList.map((emp, index) => <li key={index}>{index} emp.name</li>)

        return (
            <ul>
                {displayList}
            </ul>
        )
    }

}

export default EmployeeList;