import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CoinTitle } from "../coin/CoinTitle";

export const AnalysisReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="analyst" source="analyst" />
        <ReferenceInput source="coin.id" reference="Coin" label="coin">
          <SelectInput optionText={CoinTitle} />
        </ReferenceInput>
        <DateTimeInput label="createdOn" source="createdOn" />
        <TextInput label="report" multiline source="report" />
      </SimpleForm>
    </Edit>
  );
};
