import React, { useState, useEffect } from 'react';

import { reactions } from './constants';

import './ImageEditor.css';

const ImageEditor = () => {
  const [spacing, setSpacing] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState('#7eb5bb');

  const [reaction, setReaction] = useState(reactions[0]);

  const setRandomReaction = () => {
    const randomIndex = Math.floor(Math.random()*reactions.length);
    setReaction(reactions[randomIndex]);
  };

  useEffect(() => {
    document.addEventListener('mouseup', setRandomReaction);

    return () => {
      document.removeEventListener('mouseup', setRandomReaction);
    }
  });

  const handleUpdate = (setState) => (event) => {
    setState(event.target.value);
  };

  return (
    <div
      className="image-editor"
      style={{
        '--editor-spacing': spacing + 'px',
        '--editor-blur': blur + 'px',
        '--editor-color': color,
      }}>
      <h2>Hook {String.fromCodePoint(reaction)}</h2>
      <div className="controls">
          <label htmlFor="spacing">Spacing</label>
          <input
            onChange={handleUpdate(setSpacing)}
            onMouseMove={handleUpdate(setSpacing)}
            id="spacing"
            type="range"
            name="spacing"
            min="10"
            max="200"
            value={spacing}
          />
      
          <label htmlFor="blur">Blur</label>
          <input
            onChange={handleUpdate(setBlur)}
            onMouseMove={handleUpdate(setBlur)}
            id="blur"
            type="range"
            name="blur"
            min="0"
            max="25"
            value={blur}
          />
          <label htmlFor="base">Base Color</label>
          <input
            onChange={handleUpdate(setColor)}
            onMouseMove={handleUpdate(setColor)}
            id="color"
            type="color"
            name="color"
            value={color}
          />
        </div>
      <img src="https://source.unsplash.com/random/500x300" alt="To be edited" />
    </div>
  );
}

export default ImageEditor;
