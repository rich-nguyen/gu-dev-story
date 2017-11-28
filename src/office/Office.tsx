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
            400,
            300,
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
        this.game.load.image('background', 'assets/floors/floors_01.png');        
    }
  
    create() {
        //this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        
        const pic = this.game.add.sprite(this.game.world.width, this.game.world.height, 'background');
        pic.anchor.setTo(1,1);
    }
}

