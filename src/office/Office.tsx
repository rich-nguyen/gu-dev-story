/// <reference path="../../node_modules/phaser-ce/typescript/phaser.d.ts"/>
import * as React from "react";
import 'pixi';
import 'p2';
import 'phaser';
import {Worker} from "./worker";

export interface World {
    objects: any[],
    people: any[]
}

export interface OfficeProps {
    world: World
}

export class Office extends React.Component<OfficeProps, {}> {

    game: Phaser.Game;

    componentDidMount() {
        this.game = new Phaser.Game(
            240,
            177,
            Phaser.AUTO,
            'office',
            {
              preload: this.preload,
              create: this.create
            }
        );
    }

    render() {
        return <div className="office">
            {this.props.world.people.map( (person, index) => {
                return <Worker game={this.game} key={index}/>
            })}
        </div>
    }

    preload() {
        this.game.load.atlas('office-man', 'assets/characters/office-man.png', 'assets/characters/office-man.json');
        this.game.load.atlas('office-man-head', 'assets/characters/office-man-head.png', 'assets/characters/office-man-head.json');
        this.game.load.image('background', 'assets/floors/floors_01.png');        
    }
  
    create() {
        const pic = this.game.add.sprite(0, 0, 'background');
        this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.game.scale.setUserScale(2.0, 2.0);
    }
}

