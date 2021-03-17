import { EuiDatePicker, EuiDatePickerRange } from "@elastic/eui";
import { Moment } from "moment";
import { ReactElement, useState } from "react";

export type DateFilterInputProps = {
  onChange: (startDate: Moment, endDate: Moment) => void;
};

function DateFilterInput(props: DateFilterInputProps): ReactElement {
  const [startDate, setStartDate] = useState<Moment | null>();
  const [endDate, setEndDate] = useState<Moment | null>();

  const handleClickOutside = () => {
    if (startDate && endDate) {
      props.onChange(startDate, endDate);
    }
  };

  return (
    <EuiDatePickerRange
      startDateControl={
        <EuiDatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          maxDate={endDate || undefined}
          onChange={setStartDate}
          onClickOutside={handleClickOutside}
          placeholder="Start Date"
          showTimeSelect
        />
      }
      endDateControl={
        <EuiDatePicker
          selected={endDate}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || undefined}
          onChange={setEndDate}
          onClickOutside={handleClickOutside}
          placeholder="End Date"
          showTimeSelect
        />
      }
      fullWidth
    />
  );
}

export default DateFilterInput;
