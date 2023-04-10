import React from 'react';
import './App.css';
import VideoChat from './VideoChat';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Video Chat with Hooks</h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          Made in Hackatohn
          <span role="img" aria-label="React">
            ⚛️
          </span>{' '}
        </p>
      </footer>
    </div>
  );
};

export default App;
