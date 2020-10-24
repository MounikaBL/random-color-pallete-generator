import React, { Component } from 'react'
import Header from "./header";

export default class LeftPanel extends Component {

    shouldComponentUpdate(nextProps) {
        if (this.props.colorCount === nextProps.colorCount) {
            return false;
        }
        return true;
    }

    genarateRandomColor = () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <>
                <Header name="Palette" />
                <div className="main-palette">
                    {
                        this.props.colorCount ? [...Array(this.props.colorCount)].map((item, index) => {
                            let color = this.genarateRandomColor();
                            return <div className="color-pallete"
                                style={{ backgroundColor: color }} key={index} onClick={() => this.props.selectedColor(color)} />
                        }) : null
                    }
                </div>
            </>
        )
    }
}
