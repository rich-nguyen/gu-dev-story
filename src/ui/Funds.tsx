import * as React from "react";

export interface FundsProps {
    funds: number
}

export class Funds extends React.Component<FundsProps, {}> {
    render () {
        return <div className="funds">
            £{this.props.funds}
        </div>
    }
}