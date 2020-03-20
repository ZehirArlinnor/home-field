// region 1. Platform Libraries
import React, { Component } from 'react';
// endregion

// region 2. Project Libraries
import SideBar from '../../components/SideBar/SideBar';
// endregion

// region U. UI Markups
import './HomeField.scss';
// endregion

export default class HomeField extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="home-field">
        <div className="header">
          <div className="page-title">
            <span className="font-h1">ANTON CLEMENT</span>
            <span className="font-h4">established 1996</span>
          </div>
        </div>
        <SideBar />
        <div className="frame" />
        <div className="footer handwrite">
          <p>Antonina Shih @ZehirArlinnor</p>
        </div>
      </div>
    );
  }
}
