import React, { Component } from 'react'
import LeftPanel from './components/leftPanel'
import RightPanel from './components/rightPanel'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorCount: "",
      selectedColor: "",
      updateColors: false
    }
  }

  generateClick = (colorCount) => {
    this.setState({ colorCount });
  }

  clearClick = () => {
    this.setState({ colorCount: "", selectedColor: "white" });
  }

  selectedColor = (selectedColor) => {
    this.setState({ selectedColor });
  }

  render() {
    return (
      <div className="main-container">
        <div className="left-panel">
          <LeftPanel colorCount={this.state.colorCount} selectedColor={this.selectedColor} />
        </div>
        <div className="right-panel">
          <RightPanel colorCount={this.state.colorCount}
            generateClick={this.generateClick}
            selectedColor={this.state.selectedColor}
            clearClick={this.clearClick} />
        </div>
      </div>
    )
  }
}
