import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
    static defaultProps = {
        num: 6,
        numArr: ["⚀","⚁","⚂","⚃","⚄","⚅"]
    }
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.props.toggle(this.props.ident);
    }
    render() {
        const { num, ident, isLocked, numArr } = this.props;
        const dieClass = `Die ${this.props.dieLocked ? "Die-disabled" : null}`;
        return (
            <div className={ dieClass } onClick={this.handleToggle}>
                <div className="Die-container">
                    {numArr[num]}
                </div>
            </div>
        )
    }
}

export default Die;