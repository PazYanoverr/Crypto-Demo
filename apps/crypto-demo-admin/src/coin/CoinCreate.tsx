import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const CoinCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Currency" source="currency" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="symbol" source="symbolField" />
      </SimpleForm>
    </Create>
  );
};
