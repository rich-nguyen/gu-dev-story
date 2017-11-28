import * as React from "react";

export interface WorkerProps {
    game: Phaser.Game;
}

export class Worker extends React.Component<WorkerProps, {}> {

    constructor (props) {
        super(props);
        const worker = this.props.game.add.sprite(this.props.game.world.centerX, 100, 'office-man');
        
        worker.animations.add('walk-down', [0, 1]);
        worker.animations.add('walk-up', [4, 5]);
        worker.animations.add('sit', [2]);
        worker.animations.play('walk-down', 3, true);
    }
    
    render () {
        return <div className="worker"></div>;
    }
}