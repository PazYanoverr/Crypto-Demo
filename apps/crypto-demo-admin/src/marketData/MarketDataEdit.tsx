import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CoinTitle } from "../coin/CoinTitle";

export const MarketDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="marketCap" source="marketCap" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="volume" source="volume" />
        <ReferenceInput source="coin.id" reference="Coin" label="coin">
          <SelectInput optionText={CoinTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
