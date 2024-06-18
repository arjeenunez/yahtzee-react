import React, { Component } from "react";
import Listitem from "./Listitem";
import "./Gametable.css";

class Gametable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                { name: "Ones", scoring: "1 point per 1" },
                {name: "Twos", scoring: "2 points per 2"},
                {name: "Threes", scoring: "3 points per 3"},
                {name: "Fours", scoring: "4 points per 4"},
                {name: "Fives", scoring: "5 points per 5"},
                {name: "Sixes", scoring: "6 points per 6"},
                {name:"Three of a Kind", scoring:"Sum all dice if 3 are the same"},
                {name:"Four of a Kind", scoring:"Sum all dice if 4 are the same"},
                {name:"Fullhouse", scoring:"25 points for a full house"},
                {name:"Small Straight", scoring:"30 points for a small straight"},
                {name:"Large Straight", scoring:"40 points for a large straight"},
                {name:"Yahtzee", scoring:"50 points for yahtzee"},
                {name:"Change", scoring:"Sum of all dice"},
            ]
        }
        this.handleChoose = this.handleChoose.bind(this);
    }
    handleChoose(ident) {
        const { dieFaces } = this.props;
        const dieFaceData = new Array(6).fill(0);
        dieFaces.map(el => dieFaceData[el] += 1);
        const stringConsecutive = [...dieFaceData].join("");
        const scores = [
            dieFaceData[0],
            dieFaceData[1] * 2,
            dieFaceData[2] * 3,
            dieFaceData[3] * 4,
            dieFaceData[4] * 5,
            dieFaceData[5] * 6,
            dieFaceData.includes(3) ? (dieFaceData.indexOf(3) + 1) * 3 : 0,
            dieFaceData.includes(4) ? (dieFaceData.indexOf(4) + 1) * 3 : 0,
            dieFaceData.indexOf(3) !== -1 && dieFaceData.indexOf(2) !== -1 ? 25 : 0,
            stringConsecutive.search("1111") !== -1 ? 30 : 0,
            stringConsecutive.search("11111") !== -1 ? 40 : 0,
            dieFaceData.includes(5) ? 50 : 0,
            dieFaceData.reduce((total, el, i) => total + (el * (i + 1)), 0),
        ]
        this.props.choose(scores[ident], ident);
    }
    
    render() {
        
        return (
            <div className="Gametable">
                <h2 className="Gametable-titles">Upper</h2>
                <div className="Gametable-table">
                    {this.state.listData.map((el, id) => id < 6 ? (
                        < Listitem name={el.name} scoring={el.scoring} key={id} ident={id} handleChoose={this.handleChoose} scores={this.props.scores} />
                    ) : null)}
                </div>
                <h2 className="Gametable-titles">Lower</h2>
                <div className="Gametable-table">
                    {this.state.listData.map((el, id) => id >= 6 ? (
                        < Listitem name={el.name} scoring={el.scoring} key={id} ident={id} handleChoose={this.handleChoose} scores={this.props.scores} />
                    ) : null)}
                </div>
            </div>
        )
    }
}

export default Gametable;