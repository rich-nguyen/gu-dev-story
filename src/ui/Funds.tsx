import * as React from "react";

export interface FundsProps {
    funds: number,
    costs: number,
    revenue: number
}

export class Funds extends React.Component<FundsProps, {}> {
    render () {
        return <div className="funds">
            <span> Funds: £{this.props.funds} </span>
            <span> Costs: £{this.props.costs} </span>
            <span> Revenue: £{this.props.revenue} </span>
        </div>
    }
}