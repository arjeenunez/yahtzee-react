import React, { Component } from "react";
import "./Listitem.css"

class Listitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,
        }
        this.handleChoose = this.handleChoose.bind(this);
    }
    handleChoose() {
        this.props.handleChoose(this.props.ident);
    }
    render() {
        const { scores, props } = this.props;
        const classText = `Listitem ${this.props.scores[this.props.ident] !== undefined ? "Listitem Listitem-disabled" : null}`
        return (
            <li className={classText} onClick={this.handleChoose}>
                <span>{ this.props.name }</span>
                <span>{ this.props.scoring }</span>
            </li>
        )
    }
}

export default Listitem;