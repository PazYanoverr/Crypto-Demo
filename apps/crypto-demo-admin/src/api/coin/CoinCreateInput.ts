import { AnalysisReportCreateNestedManyWithoutCoinsInput } from "./AnalysisReportCreateNestedManyWithoutCoinsInput";
import { TransactionCreateNestedManyWithoutCoinsInput } from "./TransactionCreateNestedManyWithoutCoinsInput";
import { MarketDataCreateNestedManyWithoutCoinsInput } from "./MarketDataCreateNestedManyWithoutCoinsInput";

export type CoinCreateInput = {
  name?: string | null;
  symbolField?: string | null;
  description?: string | null;
  analysisReports?: AnalysisReportCreateNestedManyWithoutCoinsInput;
  transactions?: TransactionCreateNestedManyWithoutCoinsInput;
  marketDataItems?: MarketDataCreateNestedManyWithoutCoinsInput;
  currency?: number | null;
};
