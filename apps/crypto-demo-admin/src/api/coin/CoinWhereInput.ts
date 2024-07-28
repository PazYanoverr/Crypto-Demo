import { AnalysisReportListRelationFilter } from "../analysisReport/AnalysisReportListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarketDataListRelationFilter } from "../marketData/MarketDataListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type CoinWhereInput = {
  analysisReports?: AnalysisReportListRelationFilter;
  currency?: IntNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  marketDataItems?: MarketDataListRelationFilter;
  name?: StringNullableFilter;
  symbolField?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
