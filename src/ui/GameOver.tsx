import * as React from "react";

export interface GameOverProps {
    elapsed: number
}

export class GameOver extends React.Component<GameOverProps, {}> {
    render () {
        const daysSurvived = Math.floor(this.props.elapsed / 8.64e7);
        return <span className="game-over">
            Game Over! You survived {daysSurvived} days.
        </span>
    }
}