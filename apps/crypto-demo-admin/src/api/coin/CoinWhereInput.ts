import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AnalysisReportListRelationFilter } from "../analysisReport/AnalysisReportListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { MarketDataListRelationFilter } from "../marketData/MarketDataListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CoinWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  symbolField?: StringNullableFilter;
  description?: StringNullableFilter;
  analysisReports?: AnalysisReportListRelationFilter;
  transactions?: TransactionListRelationFilter;
  marketDataItems?: MarketDataListRelationFilter;
  currency?: IntNullableFilter;
};
