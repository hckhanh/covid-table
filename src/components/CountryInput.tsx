import { EuiComboBox } from "@elastic/eui";
import { EuiComboBoxOptionOption } from "@elastic/eui/src/components/combo_box/types";
import { ReactElement, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { getCountries } from "../apis";
import { Country } from "../types";

export type CountryInputProps = {
  onChange: (country: Country) => void;
};

function CountryInput(props: CountryInputProps): ReactElement {
  const { data, isLoading } = useQuery<Country[]>("countries", getCountries, {
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });
  const [selectedOptions, setSelected] = useState<EuiComboBoxOptionOption<Country>[]>();

  const onChange = (selectedOptions: EuiComboBoxOptionOption<Country>[]) => {
    setSelected(selectedOptions);
    selectedOptions.length > 0 && props.onChange(selectedOptions[0].value as Country);
  };

  const options = useMemo(
    () =>
      data?.map((country) => ({
        label: country.Country,
        key: country.ISO2,
        value: country,
      })),
    [data],
  );
  return (
    <EuiComboBox
      placeholder="Select a country"
      options={options}
      selectedOptions={selectedOptions}
      singleSelection={{ asPlainText: true }}
      isLoading={isLoading}
      onChange={onChange}
      fullWidth
    />
  );
}

export default CountryInput;
