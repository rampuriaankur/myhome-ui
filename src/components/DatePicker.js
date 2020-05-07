import React from "react";
import { DatePicker, DatePickerInput } from "rc-datepicker";

class DatePicker1 extends React.Component {
  constructor(props) {
    super(props);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    this.state = {
      yesterday,
      value: null,
    };
  }

  resetState = () => this.setState({ value: null });

  render() {
    return (
      <div>
        <button onClick={this.resetState}>reset state</button>
        <p>jsDate = {String(this.state.value)}</p>
        <div className="ui input">
          <DatePickerInput
            displayFormat="DD/MM/YYYY"
            returnFormat="YYYY-MM-DD"
            className="my-react-component"
            defaultValue={this.state.yesterday}
            onChange={this.onDateChange}
            showOnInputClick
            placeholder="placeholder"
            locale="de"
            iconClassName="calendar icon"
          />
        </div>
      </div>
    );
  }
}

export default DatePicker1;
