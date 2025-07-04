import React from 'react';
import ClickTracker from './components/ClickTracker';

const App = () => {
  return (
    <div>
      <h1>Track Clicks Without Re-render</h1>
      <ClickTracker />
    </div>
  );
};

export default App;
