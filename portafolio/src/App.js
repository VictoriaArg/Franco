import { Route, BrowserRouter as Router } from "react-router-dom";
import React from 'react';

import Main from './pages/Main'

function App() {
  return (
    <Router>
    <Route path="/" render={() => <Main />} />
    </Router>
  );
}

export default App;
