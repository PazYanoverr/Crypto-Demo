import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CoinTitle } from "../coin/CoinTitle";

export const MarketDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="marketCap" source="marketCap" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="volume" source="volume" />
        <ReferenceInput source="coin.id" reference="Coin" label="coin">
          <SelectInput optionText={CoinTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
