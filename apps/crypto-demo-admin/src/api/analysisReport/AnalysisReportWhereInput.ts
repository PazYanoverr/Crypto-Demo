import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";

export type AnalysisReportWhereInput = {
  id?: StringFilter;
  analyst?: StringNullableFilter;
  createdOn?: DateTimeNullableFilter;
  report?: StringNullableFilter;
  coin?: CoinWhereUniqueInput;
};
