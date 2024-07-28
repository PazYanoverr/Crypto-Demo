import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { CoinTitle } from "../coin/CoinTitle";

export const MarketDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="coin.id" reference="Coin" label="coin">
          <SelectInput optionText={CoinTitle} />
        </ReferenceInput>
        <NumberInput label="marketCap" source="marketCap" />
        <NumberInput label="price" source="price" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="volume" source="volume" />
      </SimpleForm>
    </Edit>
  );
};
