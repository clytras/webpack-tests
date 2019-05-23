import React, { useState } from "react";
import ReactDOM from "react-dom";
import './main.css';
import './test.css';

//const isDev = require('electron-is-dev');

import isDev from 'electron-is-dev';

// if (isDev) {
// 	console.log('Running in development');
// } else {
// 	console.log('Running in production');
// }

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="my-paragraph">React here! ({isDev ? "DEV" : "PROD"})</p>
      <div className="test-par">Counter: <span>{count}</span></div>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
