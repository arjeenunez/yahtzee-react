import React, { Component } from "react";
import Dice from "./Dice";
import Gametable from "./Gametable";
import "./Game.css";


function Rando() {
    return Math.floor(Math.random() * 6);
}

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dieFaces: Array.from({ length: 5 }, el => Rando()),
            dieLocked: new Array(5).fill(false),
            rolls: 3,
            total: 0,
            scores: new Array(13).fill(undefined),
        }
        this.toggle = this.toggle.bind(this);
        this.roll = this.roll.bind(this);
        this.choose = this.choose.bind(this);
    }

    toggle(ident) {
        const newDieLocked = [...this.state.dieLocked].map((el, id) => id === ident ? (el ? false : true) : el);
        this.setState({ dieLocked: newDieLocked });
    }

    roll() {
        const newDieFaces = [...this.state.dieFaces.map((el, i) => !this.state.dieLocked[i] ? Rando() : el)];
        const newRolls = this.state.rolls - 1;
        if (this.state.rolls > 0) {
            this.setState({ dieFaces: newDieFaces, rolls: newRolls });
        }
    }

    choose(score, ident) {
        if (this.state.scores[ident] === undefined) {
            this.setState({ scores: [...this.state.scores.map((el, id) => id === ident ? score : el)] });
            this.setState({dieFaces: Array.from({ length: 5 }, el => Rando()), dieLocked: new Array(5).fill(false)})
            // this.setState({ total: [...this.state.scores].reduce((total, el) => el === undefined ? total : total + el, 0) });
            this.setState({ rolls: 3 });
            console.log(this.state.total);
        }
    }

    render() {
        const total = this.state.scores.reduce((total, el) => el === undefined ? total : total + el, 0);
        return (
            <div className="Game">
                <div className="Game-header">
                    <h1 className="Game-header-title">Yahtzee!</h1>
                    <Dice dieFaces={this.state.dieFaces} dieLocked={this.state.dieLocked} toggle={this.toggle} />
                    <button className="Game-header-button" onClick={this.roll}> {this.state.rolls} Rolls left</button>
                </div>
                <Gametable dieFaces={this.state.dieFaces} choose={this.choose} scores={this.state.scores} />
                <h2 className="Game-total">TOTAL SCORE: {total}</h2>
            </div>
        )
    }
}

export default Game;