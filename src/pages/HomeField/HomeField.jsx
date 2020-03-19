// region 1. Platform Libraries
import React, { Component } from 'react';
// endregion

// region 2. Project Libraries
// endregion

// region U. UI Markups
import './HomeField.scss';
// endregion

export default class HomeField extends Component {
  constructor(props) {
    console.log('home');
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('home');
  }

  render() {
    return (
      <div className="home-field">
        <div className="header">
          ZehirArlinnor
        </div>
        <div className="frame" />
      </div>
    );
  }
}
