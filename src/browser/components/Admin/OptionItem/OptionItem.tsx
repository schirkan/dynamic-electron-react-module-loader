import * as React from 'react';
import { IFieldDefinition } from '../../../../interfaces/IObjectDefinition';
import OptionList from '../OptionList/OptionList';

import './OptionItem.css';

interface IOptionItemProps {
  definition: IFieldDefinition,
  options: any,
  value: any,
}

// tslint:disable-next-line:no-empty-interface
interface IOptionItemState {
}

export default class OptionItem extends React.Component<IOptionItemProps, IOptionItemState> {
  constructor(props: IOptionItemProps) {
    super(props);
    this.state = {
      value: this.props.definition.defaultValue
    };
  }

  private renderArray() {
    const array = this.props.value as any[];

    return (
      <React.Fragment>
        <div>Array {this.props.definition.displayName}</div>
        {array.map(item => {
          return <OptionItem options={this.props.options} key={item.name} definition={item} value={this.props.value} />;
        })}
      </React.Fragment>
    );
  }

  private renderObject() {
    if (!this.props.definition.fields) {
      return <span>Not itemDefinition</span>;
    }
    return (
      <React.Fragment>
        <div>Object {this.props.definition.displayName}</div>
        <OptionList options={this.props.options} definitions={this.props.definition.fields} value={this.props.value} />;
      </React.Fragment>
    );
  }

  private renderTextInput() {
    return (
      <input type="text" />
    );
  }

  private renderNumberInput() {
    return (
      <input type="text" />
    );
  }

  private renderBooleanInput() {
    return (
      <input type="checkbox" />
    );
  }

  private renderStyleInput() {
    return (
      <input type="text" />
    );
  }

  private renderWebComponentInput() {
    return (
      <input type="text" />
    );
  }

  public renderInput() {
    if (this.props.definition.isArray) {
      return this.renderArray();
    }
    switch (this.props.definition.valueType) {
      case 'object':
        return this.renderObject();
      case 'number':
        return this.renderNumberInput();
      case 'boolean':
        return this.renderBooleanInput();
      case 'string':
        return this.renderTextInput();
      case 'style':
        return this.renderStyleInput();
      case 'webComponent':
        return this.renderWebComponentInput();
    }
    return null;
  }

  public render() {
    return (
      <div className="OptionItem">
        {this.renderInput()}
      </div>
    );
  }
}
