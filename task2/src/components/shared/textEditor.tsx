import * as React from 'react';

interface ITextEditorProps {
    value: string;
    placeholder?: string;
    onChange: (change: any) => void;
    focus?: boolean;
}

export class TextEditor extends React.Component<ITextEditorProps, {}> {
    private changeHandlerMethod: (change: any) => void = this.handleChange.bind(this);

    public render() {
        return (
            <input
                type='text'
                className='form-control'
                placeholder={this.props.placeholder ? this.props.placeholder : ''}
                value={this.props.value}
                onChange={this.changeHandlerMethod}
                autoFocus={this.props.focus}
            />
        );
    }

    private handleChange(event: any) {
        this.props.onChange(event.target.value);
    }

}