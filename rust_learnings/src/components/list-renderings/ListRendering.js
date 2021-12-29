import React, {Component} from 'react'
import Employee from './Employee'

class ListRendering extends Component{

    render() {
        const employeeList = [{id: 1, name: "Ejaz"},
        {id: 2, name: "Sameer"}
        ];

        const employeDisplayList = employeeList.map(emp => <Employee employee={emp} />);

        return <ul>{employeDisplayList}</ul>
    }


}

export default ListRendering;
