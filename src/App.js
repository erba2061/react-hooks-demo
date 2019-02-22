import React from 'react';

import Container from './Container/Container';
import ImageEditor from './Components/ImageEditor';
import ImageEditorHook from './Components/ImageEditorCustomHook';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        Learn Hooks
      </header>
      <Container
        classComponent={<ImageEditor />}
        hookComponent={<ImageEditorHook />}
      />
    </div>
  );
}

export default App;
