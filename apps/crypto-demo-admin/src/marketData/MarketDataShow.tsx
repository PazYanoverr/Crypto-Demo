import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COIN_TITLE_FIELD } from "../coin/CoinTitle";

export const MarketDataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
