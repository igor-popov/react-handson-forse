import * as React from 'react';

interface IBackButtonProps {
    history: any;
} 

export class BackButton extends React.Component<IBackButtonProps, {}> {
  private onClick: () => void;

  public componentWillMount() {
    this.onClick = this.goBack.bind(this);
  }

  public render() {
    return (
        <a onClick={this.onClick} href='#'>{'<< Tilbake'}</a>
        );
  }

  private goBack() {
    this.props.history.goBack();
  }
}