import * as React from 'react';
import { ExternalModule } from '../../ExternalModule';
import { loadModule } from '../../ModuleLoader';

export default class ExternalModuleExample extends React.Component<any, { text: string }> {
  private server: any;
  private module: ExternalModule;

  constructor(props: any) {
    super(props);
    this.state = { text: 'Hello World' };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  public async componentDidMount() {
    try {
      this.module = await loadModule('electron-react-external-module-example');
      const HelloService = this.module.services.HelloService as any;
      this.server = new HelloService();
      this.server.start();
    } catch (error) {
      console.log(error);
    }
  }

  public componentWillUnmount() {
    try {
      this.server.stop();
    } catch (error) {
      console.log(error);
    }
  }

  public onButtonClick() {
    try {
      this.setState({ text: this.server.sayHello('Martin') });
    } catch (error) {
      console.log(error);
    }
  }

  public render() {
    if (!this.module) {
      return (
        <div>
          <h2>Sample Module not installed.</h2>
          <div>run</div>
          <pre>
            cd modules<br />
            git clone https://github.com/schirkan/electron-react-external-module-example<br />
            cd ..<br />
            npm run build-modules<br />
          </pre>
          <div>and reload</div>
        </div>
      );
    }
    const HelloWorld = this.module.components.HelloWorld;

    return (
      <section className="ExternalModules">
        <HelloWorld text={this.state.text} />
        <button onClick={this.onButtonClick}>Say Hello from Server</button>
      </section>
    );
  }
}
