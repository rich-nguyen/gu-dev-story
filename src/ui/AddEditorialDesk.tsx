import * as React from "react";

export interface AddEditorialDeskProps {
    addEditorialDesk: any
}

export class AddEditorialDesk extends React.Component<AddEditorialDeskProps, {}> {
    render () {
        return <span className="add-editorial-desk">
            <button className="button" onClick={this.props.addEditorialDesk}>
                <span>Add editorial desk</span>
            </button>
        </span>
    }
}