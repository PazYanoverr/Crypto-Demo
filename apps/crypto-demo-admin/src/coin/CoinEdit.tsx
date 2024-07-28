import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AnalysisReportTitle } from "../analysisReport/AnalysisReportTitle";
import { MarketDataTitle } from "../marketData/MarketDataTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const CoinEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="analysisReports"
          reference="AnalysisReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalysisReportTitle} />
        </ReferenceArrayInput>
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
    </Edit>
  );
};
