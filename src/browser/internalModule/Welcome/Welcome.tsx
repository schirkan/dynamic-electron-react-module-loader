import * as SvgIcons from '@fortawesome/free-solid-svg-icons';
import * as FontAwesome from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { IServerInfo } from '../../../interfaces/IServerInfo';
import { apiClient } from '../../ApiClient';
import RoundButton from '../../components/RoundButton/RoundButton';
import logo from './logo.svg';

import './Welcome.css';

interface IWelcomeState {
  info?: IServerInfo;
}

export default class Welcome extends React.Component<any, IWelcomeState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    apiClient.getServerInfo().then(info => {
      this.setState({ info });
    });
  }

  public render() {
    let info;

    if (this.state.info) {
      info = (<div className="info">
        Click Admin-Button or go to http://{this.state.info.ip}/admin
      </div>);
    }
    return (
      <section className="Welcome">
        <img src={logo} className="logo" alt="logo" />
        <div className="title">Welcome to Reactron</div>
        {info}
        <RoundButton to="/admin">
          <FontAwesome.FontAwesomeIcon icon={SvgIcons.faCog} />
          Admin
        </RoundButton>
      </section>
    );
  }
}
