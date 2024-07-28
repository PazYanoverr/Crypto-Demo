import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COIN_TITLE_FIELD } from "../coin/CoinTitle";

export const AnalysisReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AnalysisReports"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
