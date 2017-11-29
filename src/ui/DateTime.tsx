import * as React from "react";

export interface DateTimeProps {
    timeElapsed: number
}

export class DateTime extends React.Component<DateTimeProps, {}> {
    render () {
        const date = new Date(this.props.timeElapsed);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        return <span className="date">
            {hours}:{minutes} {date.toDateString()}
        </span>
    }
}