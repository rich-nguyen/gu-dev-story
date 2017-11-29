import * as React from "react";

export interface AddEmployeeProps {
    addEmployee: any
}

export class AddEmployee extends React.Component<AddEmployeeProps, {}> {
    render () {
        return <span className="add-employee">
            <button className="button" onClick={this.props.addEmployee}>
                <span>Add employee</span>
            </button>
        </span>
    }
}