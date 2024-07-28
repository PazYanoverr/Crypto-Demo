import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COIN_TITLE_FIELD } from "./CoinTitle";

export const CoinShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency" source="currency" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="symbol" source="symbolField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AnalysisReport"
          target="coinId"
          label="AnalysisReports"
        >
          <Datagrid rowClick="show">
            <TextField label="analyst" source="analyst" />
            <ReferenceField label="coin" source="coin.id" reference="Coin">
              <TextField source={COIN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="createdOn" source="createdOn" />
            <TextField label="ID" source="id" />
            <TextField label="report" source="report" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MarketData"
          target="coinId"
          label="MarketDataItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="coin" source="coin.id" reference="Coin">
              <TextField source={COIN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="marketCap" source="marketCap" />
            <TextField label="price" source="price" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="volume" source="volume" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="coinId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField label="coin" source="coin.id" reference="Coin">
              <TextField source={COIN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="transactionDate" source="transactionDate" />
            <TextField label="transactionType" source="transactionType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
