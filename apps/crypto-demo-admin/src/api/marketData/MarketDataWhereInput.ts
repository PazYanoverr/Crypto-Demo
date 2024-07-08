import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";

export type MarketDataWhereInput = {
  id?: StringFilter;
  marketCap?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
  price?: FloatNullableFilter;
  volume?: IntNullableFilter;
  coin?: CoinWhereUniqueInput;
};
