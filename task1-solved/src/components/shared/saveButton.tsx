import * as React from 'react';

export interface ISaveButtonProperties {
  onClick: () => void;
}

export class SaveButton extends React.Component<ISaveButtonProperties, {}> {
  private onClick: () => void;

  public componentWillMount() {
    this.onClick = !!this.props.onClick ? this.props.onClick.bind(this) : () => void(0);
  }

  public render() {
    return (
        <button onClick={this.onClick}>
            Lagre
        </button>
        );
  }
}