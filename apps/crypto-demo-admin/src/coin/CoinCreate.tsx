import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { AnalysisReportTitle } from "../analysisReport/AnalysisReportTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { MarketDataTitle } from "../marketData/MarketDataTitle";

export const CoinCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="symbol" source="symbolField" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="analysisReports"
          reference="AnalysisReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalysisReportTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="marketDataItems"
          reference="MarketData"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MarketDataTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Currency" source="currency" />
      </SimpleForm>
    </Create>
  );
};
