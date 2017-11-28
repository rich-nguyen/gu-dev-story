import * as React from "react";

export interface DateTimeProps {
    timeElapsed: number
}

export class DateTime extends React.Component<DateTimeProps, {}> {
    render () {
        const date = new Date(this.props.timeElapsed);
        return <span className="date">
            {date.getHours()}:{date.getMinutes()} {date.toDateString()}
        </span>
    }
}