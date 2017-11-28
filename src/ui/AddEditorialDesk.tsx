import * as React from "react";

export interface AddEditorialDeskProps {
    addEditorialDesk: any
}

export class AddEditorialDesk extends React.Component<AddEditorialDeskProps, {}> {
    render () {
        return <div className="button--add-editorial-desk">
            <button onClick={this.props.addEditorialDesk}>
                Add editorial desk
            </button>
        </div>
    }
}