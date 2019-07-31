import React from 'react';
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
 
export default class DatePickerr extends React.Component {
    constructor(props, context) {
        super(props, context);    
        this.state = {
            selectedDate: new Date()
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(date) {
		this.setState({
			selectedDate: date
		});
	}
    render() {
        return (
            <div>
                <DatePickerInput
                    onChange={this.onChange}
                    value={this.state.selectedDate}
                />
                <DatePicker onChange={this.onChange} value={this.state.selectedDate} />
            </div>
        );
    }
}
