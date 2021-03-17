import { EuiDatePicker, EuiDatePickerRange } from "@elastic/eui";
import moment, { Moment } from "moment";
import { ReactElement, useEffect, useState } from "react";

export type DateFilterInputProps = {
  onChange: (startDate: Moment, endDate: Moment) => void;
};

const today = moment();

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
          startDate={startDate}
          endDate={endDate}
          maxDate={endDate ? moment.min(endDate, today) : today}
          onChange={setStartDate}
          placeholder="Start Date"
          adjustDateOnChange={false}
        />
      }
      endDateControl={
        <EuiDatePicker
          selected={endDate}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || undefined}
          maxDate={today}
          onChange={setEndDate}
          placeholder="End Date"
          adjustDateOnChange={false}
        />
      }
      fullWidth
    />
  );
}

export default DateFilterInput;
