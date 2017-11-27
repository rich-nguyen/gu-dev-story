/// <reference path="../node_modules/phaser-ce/typescript/phaser.d.ts"/>

import 'pixi';
import 'p2';
import 'phaser';

class App {

  constructor() {
    this.game = new Phaser.Game(
      800,
      600,
      Phaser.AUTO,
      'content',
      {
        preload: this.preload,
        create: this.create
      }
    );
  }

  game: Phaser.Game;

  preload() {
      //  37x45 is the size of each frame
      //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
      //  blank frames at the end, so we tell the loader how many to load

      // spritesheet(key: string, url: string, frameWidth: number, frameHeight: number, frameMax?: number, margin?: number, spacing?: number, skipFrames?: number): Phaser.Loader;
      this.game.load.spritesheet('characters', 'assets/Characters.png', 16, 28, 3);
  }

  create() {

    var mummy = this.game.add.sprite(16, 28, 'characters');
    
    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    var walk = mummy.animations.add('walk');

    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    mummy.animations.play('walk', 30, true);

    //const logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    //logo.anchor.setTo(0.5, 0.5);
  }
}

const app: App = new App();