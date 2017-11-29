import * as React from "react";

export interface WorkerProps {
    game: Phaser.Game;
    
}

export class Worker extends React.Component<WorkerProps, {}> {

    workerBody: Phaser.Sprite;
    workerHead: Phaser.Sprite;
    rect: Phaser.Rectangle;

    constructor (props) {
        super(props);

        this.rect = new Phaser.Rectangle(
            this.props.game.world.centerX,
            this.props.game.world.centerY,
            20,
            20);

        this.workerBody = this.props.game.add.sprite(this.rect.x, this.rect.y, 'office-man');
        this.workerHead = this.props.game.add.sprite(1, - 12, 'office-man-head');

        this.workerBody.addChild(this.workerHead);

        this.workerBody.animations.add('walk-down', [0, 1]);
        this.workerBody.animations.add('walk-up', [4, 5]);
        this.workerBody.animations.add('sit', [2]);
        
        this.workerHead.animations.add('look-down',[0]);
        this.workerHead.animations.add('look-up',[1]);

        this.workerBody.inputEnabled = true;
        this.workerBody.input.enableDrag(true, true, true);
        this.workerBody.input.enableSnap(12, 12);

        this.move();
    }

    move () {
        this.workerBody.animations.play('walk-down', 3, true);
        this.workerHead.animations.play('look-up', 1, false);
    }
    
    render () {
        return <div className="worker"></div>;
    }
}