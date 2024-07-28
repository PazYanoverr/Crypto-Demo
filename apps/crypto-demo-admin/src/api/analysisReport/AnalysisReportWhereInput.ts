import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AnalysisReportWhereInput = {
  analyst?: StringNullableFilter;
  coin?: CoinWhereUniqueInput;
  createdOn?: DateTimeNullableFilter;
  id?: StringFilter;
  report?: StringNullableFilter;
};
