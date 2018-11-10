import * as React from 'react';

interface IPropertyProps {
    children?: any;
    text: string;
}

export class Property extends React.Component<IPropertyProps, {}> {
  public render() {
      return (
          <div>
            <div>
                <span>{this.props.text}</span>
            </div>
            <div>
                {this.props.children}
            </div>
          </div>
      );
  }
}
