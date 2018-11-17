import * as React from 'react';

interface IWaitProps {
  text: string;
}

export class Wait extends React.Component<IWaitProps, {}> {

    public render(): React.ReactNode {
      return (
        <div>
          {this.props.text}...
        </div>
      );
    }
}