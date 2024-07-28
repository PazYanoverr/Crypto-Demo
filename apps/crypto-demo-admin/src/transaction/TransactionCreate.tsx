import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CoinTitle } from "../coin/CoinTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="coin.id" reference="Coin" label="coin">
          <SelectInput optionText={CoinTitle} />
        </ReferenceInput>
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <TextInput label="transactionType" source="transactionType" />
      </SimpleForm>
    </Create>
  );
};
