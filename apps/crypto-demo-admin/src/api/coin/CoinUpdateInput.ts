import { AnalysisReportUpdateManyWithoutCoinsInput } from "./AnalysisReportUpdateManyWithoutCoinsInput";
import { TransactionUpdateManyWithoutCoinsInput } from "./TransactionUpdateManyWithoutCoinsInput";
import { MarketDataUpdateManyWithoutCoinsInput } from "./MarketDataUpdateManyWithoutCoinsInput";

export type CoinUpdateInput = {
  name?: string | null;
  symbolField?: string | null;
  description?: string | null;
  analysisReports?: AnalysisReportUpdateManyWithoutCoinsInput;
  transactions?: TransactionUpdateManyWithoutCoinsInput;
  marketDataItems?: MarketDataUpdateManyWithoutCoinsInput;
  currency?: number | null;
};
