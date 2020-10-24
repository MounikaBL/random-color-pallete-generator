import React, { Component } from 'react'
import Header from "./header";

export default class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorCount: this.props.colorCount
        }
    }

    render() {
        return (
            <>
                <Header name="Config Panel" />
                <input type="text" value={this.state.colorCount} placeholder="Enter a number"
                    onChange={(e) => {
                        this.setState({ colorCount: e.target.value });
                    }}
                />
                <div>
                    <button className="generate" onClick={() => {
                        this.props.generateClick(parseInt(this.state.colorCount, 10))
                    }}> Generate </button>
                    <button className="clear" onClick={() => {
                        this.setState({ colorCount: "" }, () => this.props.clearClick())
                    }}> Clear </button>
                </div>
                {this.props.selectedColor ? <label>Selected Color</label> : <label>No Color Selected</label>}
                <div className="selected-color"
                    style={{ backgroundColor: this.props.selectedColor ? this.props.selectedColor : "white" }}
                />
            </>
        )
    }
}
