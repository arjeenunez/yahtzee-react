import React, { Component } from "react";
import Die from "./Die";
import "./Dice.css";

class Dice extends Component {
    render() {
        return (
            <div className="Dice">
                {this.props.dieFaces.map((el, ind) => (
                    <Die num={el} key={ind} ident={ind} dieLocked={this.props.dieLocked[ind]} toggle={this.props.toggle} />
                ))}
            </div>
        )
    }
}

export default Dice;