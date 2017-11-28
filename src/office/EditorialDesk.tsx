import * as React from "react";

export interface EditorialDeskProps {
    game: Phaser.Game;    
}

export class EditorialDesk extends React.Component<EditorialDeskProps, {}> {

    editorialDesk: Phaser.Sprite;

    constructor (props) {
        super(props);

        this.editorialDesk = this.props.game.add.sprite(35, 50, 'editorial-desk');
    }
    
    render () {
        return <div className="editorialDesk"></div>;
    }
}