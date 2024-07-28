import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MarketDataTitle } from "../marketData/MarketDataTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const CoinCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Currency" source="currency" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="marketDataItems"
          reference="MarketData"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MarketDataTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="symbol" source="symbolField" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
