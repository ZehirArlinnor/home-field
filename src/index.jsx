// region 1. Platform Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// endregion

// region 2. Project Libraries
import HomeField from './pages/HomeField/HomeField';
// endregion

// region U. UI Markups
import './index.scss';
// endregion

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Route exact path="/" component={HomeField} />
    <Route exact path="/about" />
  </Router>,
  document.getElementById('index'),
);
