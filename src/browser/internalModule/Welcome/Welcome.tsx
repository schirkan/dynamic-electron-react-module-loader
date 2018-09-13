import * as React from 'react';
import RoundButton from '../../components/RoundButton/RoundButton';
import logo from './logo.svg';

import './Welcome.css';

export default class Welcome extends React.Component {
  public render() {
    return (
      <section className="Welcome">
        <img src={logo} className="logo" alt="logo" />
        <div className="title">Welcome to Reactron</div>
        <RoundButton to="/admin">Admin</RoundButton>
      </section>
    );
  }
}
