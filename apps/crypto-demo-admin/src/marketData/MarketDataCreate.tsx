import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { CoinTitle } from "../coin/CoinTitle";

export const MarketDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="coin.id" reference="Coin" label="coin">
          <SelectInput optionText={CoinTitle} />
        </ReferenceInput>
        <NumberInput label="marketCap" source="marketCap" />
        <NumberInput label="price" source="price" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="volume" source="volume" />
      </SimpleForm>
    </Create>
  );
};
