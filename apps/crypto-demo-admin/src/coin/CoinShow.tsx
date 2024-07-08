import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COIN_TITLE_FIELD } from "./CoinTitle";

export const CoinShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="symbol" source="symbolField" />
        <TextField label="description" source="description" />
        <TextField label="Currency" source="currency" />
        <ReferenceManyField
          reference="AnalysisReport"
          target="coinId"
          label="AnalysisReports"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="analyst" source="analyst" />
            <TextField label="createdOn" source="createdOn" />
            <TextField label="report" source="report" />
            <ReferenceField label="coin" source="coin.id" reference="Coin">
              <TextField source={COIN_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="coinId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="amount" source="amount" />
            <TextField label="transactionType" source="transactionType" />
            <TextField label="transactionDate" source="transactionDate" />
            <ReferenceField label="coin" source="coin.id" reference="Coin">
              <TextField source={COIN_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MarketData"
          target="coinId"
          label="MarketDataItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="marketCap" source="marketCap" />
            <TextField label="timestamp" source="timestamp" />
            <TextField label="price" source="price" />
            <TextField label="volume" source="volume" />
            <ReferenceField label="coin" source="coin.id" reference="Coin">
              <TextField source={COIN_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
