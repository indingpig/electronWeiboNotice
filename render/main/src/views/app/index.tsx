import React from "react";
import { Link } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Hello React</h1>
      <Link to='/login'>Login</Link>
      <br />
      <Link to='/home'>Home</Link>
    </div>
  );
};

export default App;