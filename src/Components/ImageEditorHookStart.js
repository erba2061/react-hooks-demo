import React from 'react';

import { reactions } from './constants';

import './ImageEditor.css';

const ImageEditor = () => {
  return (
    <div className="image-editor">
      <h2>Hook {String.fromCodePoint(reactions[0])}</h2>
      <div className="controls">
          <label htmlFor="spacing">Spacing</label>
          <input
            id="spacing"
            type="range"
            name="spacing"
            min="10"
            max="200"
          />
      
          <label htmlFor="blur">Blur</label>
          <input
            id="blur"
            type="range"
            name="blur"
            min="0"
            max="25"
          />
          <label htmlFor="base">Base Color</label>
          <input
            id="color"
            type="color"
            name="color"
          />
        </div>
      <img src="https://source.unsplash.com/random/500x300" alt="To be edited" />
    </div>
  );
}

export default ImageEditor;
