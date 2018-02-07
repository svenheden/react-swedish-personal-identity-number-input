import * as React from 'react';

export interface Props {
    onChange: (value?: string) => void;
}

export interface Options {
    formatter: (value: string) => string;
    maxLength?: number;
}

export const createInputFormatter = (options: Options) => (InputComponent: any): any => {
    return class InputFormatter extends React.Component<any> {
        private inputElement: HTMLInputElement;
        private caretPosition: number = 0;

        private setRef = (inputElement: HTMLInputElement) => {
            this.inputElement = inputElement;
        }

        private handleChange = (event: any) => {
            const { value } = event.currentTarget;
            const isDeleting = /delete\w+$/.test(event.nativeEvent.inputType);

            if (isDeleting) {
                this.caretPosition = this.inputElement.selectionEnd;
                this.props.onChange(value);
            } else {
                const formatted = options.formatter(value);
                const delta = formatted.length - value.length;
    
                this.caretPosition = Math.max(this.inputElement.selectionEnd + delta, 0);
                this.props.onChange(formatted);
            }
        }

        componentDidUpdate() {
            if (this.inputElement) {
                this.inputElement.setSelectionRange(this.caretPosition, this.caretPosition);
            }
        }

        render() {
            return (
                <InputComponent
                    {...this.props}
                    innerRef={this.setRef}
                    onChange={this.handleChange}
                    maxLength={options.maxLength ? options.maxLength : null}
                />
            );
        }
    }
};
