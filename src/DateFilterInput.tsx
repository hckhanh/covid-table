import { EuiDatePicker, EuiDatePickerRange } from "@elastic/eui";
import { Moment } from "moment";
import { ReactElement, useEffect, useState } from "react";

export type DateFilterInputProps = {
  onChange: (startDate: Moment, endDate: Moment) => void;
};

function DateFilterInput(props: DateFilterInputProps): ReactElement {
  const [startDate, setStartDate] = useState<Moment | null>();
  const [endDate, setEndDate] = useState<Moment | null>();

  useEffect(() => {
    if (startDate && endDate) {
      props.onChange(startDate, endDate);
    }
  }, [startDate, endDate]);

  return (
    <EuiDatePickerRange
      startDateControl={
        <EuiDatePicker
          selected={startDate}
          onChange={setStartDate}
          startDate={startDate}
          endDate={endDate}
          maxDate={endDate || undefined}
          placeholder="Start Date"
          showTimeSelect
        />
      }
      endDateControl={
        <EuiDatePicker
          selected={endDate}
          onChange={setEndDate}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || undefined}
          placeholder="End Date"
          showTimeSelect
        />
      }
      fullWidth
    />
  );
}

export default DateFilterInput;
