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
            const selectionEnd = this.inputElement.selectionEnd || 0;

            if (isDeleting) {
                this.caretPosition = selectionEnd;
                this.props.onChange(value);
            } else {
                const formatted = options.formatter(value);
                const delta = formatted.length - value.length;
    
                this.caretPosition = Math.max(selectionEnd + delta, 0);
                this.props.onChange(formatted);
            }
        }

        shouldComponentUpdate(nextProps: any) {
            if ('value' in nextProps) {
                return nextProps.value !== this.props.value;
            }

            return true;
        }

        componentDidUpdate() {
            setTimeout(() => {
                if (this.inputElement) {
                    this.inputElement.setSelectionRange(this.caretPosition, this.caretPosition);
                }
            });
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
