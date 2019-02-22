import React, { Component } from 'react';

import { reactions } from './constants';
import './ImageEditor.css';

class ImageEditor extends Component {
  state = {
    spacing: 10,
    blur: 10,
    color: '#7eb5bb',
    reaction: reactions[0],
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.setRandomReaction);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.setRandomReaction);
  }

  setRandomReaction = () => {
    this.setState({
      ...this.state,
      reaction: reactions[Math.floor(Math.random()*reactions.length)]
    })  
  }

  handleUpdate = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const {
      spacing,
      blur,
      color
    } = this.state;

    return (
      <div
        className="image-editor"
        style={{
          '--editor-spacing': spacing + 'px',
          '--editor-blur': blur + 'px',
          '--editor-color': color,
        }}>
        <h2>Class {String.fromCodePoint(this.state.reaction)}</h2>
        <div className="controls">
          <label htmlFor="spacing">Spacing</label>
          <input
            onChange={this.handleUpdate}
            onMouseMove={this.handleUpdate}
            id="spacing"
            type="range"
            name="spacing"
            min="10"
            max="200"
            value={this.state.spacing}
          />
      
          <label htmlFor="blur">Blur</label>
          <input
            onChange={this.handleUpdate}
            onMouseMove={this.handleUpdate}
            id="blur"
            type="range"
            name="blur"
            min="0"
            max="25"
            value={this.state.blur}
          />
          <label htmlFor="base">Base Color</label>
          <input
            onChange={this.handleUpdate}
            onMouseMove={this.handleUpdate}
            id="color"
            type="color"
            name="color"
            value={this.state.color}
          />
        </div>
        <img src="https://source.unsplash.com/random/500x300" alt="To be edited" />
      </div>
    );
  }
}

export default ImageEditor;