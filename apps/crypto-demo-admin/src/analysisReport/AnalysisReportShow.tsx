import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COIN_TITLE_FIELD } from "../coin/CoinTitle";

export const AnalysisReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="analyst" source="analyst" />
        <ReferenceField label="coin" source="coin.id" reference="Coin">
          <TextField source={COIN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdOn" source="createdOn" />
        <TextField label="ID" source="id" />
        <TextField label="report" source="report" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
