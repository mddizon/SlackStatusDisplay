import React from 'react';
import './normalize.css';
import './App.css';
import StatusDisplay from './StatusDisplay';

function App(props) {
  return (
    <div className="App">
      <StatusDisplay
        imageUri={props.imageUri}
        name={props.name}
        title={props.title}
        active={props.active}
        status={props.status}
      />
    </div>
  );
}

export default App;
