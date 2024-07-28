import { AnalysisReportUpdateManyWithoutCoinsInput } from "./AnalysisReportUpdateManyWithoutCoinsInput";
import { MarketDataUpdateManyWithoutCoinsInput } from "./MarketDataUpdateManyWithoutCoinsInput";
import { TransactionUpdateManyWithoutCoinsInput } from "./TransactionUpdateManyWithoutCoinsInput";

export type CoinUpdateInput = {
  analysisReports?: AnalysisReportUpdateManyWithoutCoinsInput;
  currency?: number | null;
  description?: string | null;
  marketDataItems?: MarketDataUpdateManyWithoutCoinsInput;
  name?: string | null;
  symbolField?: string | null;
  transactions?: TransactionUpdateManyWithoutCoinsInput;
};
