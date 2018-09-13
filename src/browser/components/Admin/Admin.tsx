import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import RoundButton from '../RoundButton/RoundButton';
import './Admin.css';
import ModuleManagerPage from './ModuleManagerPage/ModuleManagerPage';
import Navigation from './Navigation/Navigation';
import PageManagerPage from './PageManagerPage/PageManagerPage';
import ServiceManagerPage from './ServiceManagerPage/ServiceManagerPage';
import SettingsManagerPage from './SettingsManagerPage/SettingsManagerPage';

export default class Admin extends React.Component {
  public render() {
    return (
      <section className="Admin">
        <RoundButton to="/">Home</RoundButton>
        <div className="title">Reactron Admin</div>

        <Navigation />

        <div className="content">
          <Switch>
            <Route path="/admin/ModuleManager" component={ModuleManagerPage} />
            <Route path="/admin/ServiceManager" component={ServiceManagerPage} />
            <Route path="/admin/Pages" component={PageManagerPage} />
            <Route path="/admin/Settings" component={SettingsManagerPage} />
          </Switch>
        </div>
      </section>
    );
  }
}