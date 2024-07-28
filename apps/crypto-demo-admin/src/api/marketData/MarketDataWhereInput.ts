import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MarketDataWhereInput = {
  coin?: CoinWhereUniqueInput;
  id?: StringFilter;
  marketCap?: FloatNullableFilter;
  price?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
  volume?: IntNullableFilter;
};
