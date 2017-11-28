import * as React from "react";

export interface AddEmployeeProps {
    addEmployee: any
}

export class AddEmployee extends React.Component<AddEmployeeProps, {}> {
    render () {
        return <div className="button--add-employee">
            <button onClick={this.props.addEmployee}>
                Add employee
            </button>
        </div>
    }
}