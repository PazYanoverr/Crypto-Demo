import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CoinTitle } from "../coin/CoinTitle";

export const AnalysisReportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="analyst" source="analyst" />
        <ReferenceInput source="coin.id" reference="Coin" label="coin">
          <SelectInput optionText={CoinTitle} />
        </ReferenceInput>
        <DateTimeInput label="createdOn" source="createdOn" />
        <TextInput label="report" multiline source="report" />
      </SimpleForm>
    </Create>
  );
};
