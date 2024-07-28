import { AnalysisReportCreateNestedManyWithoutCoinsInput } from "./AnalysisReportCreateNestedManyWithoutCoinsInput";
import { MarketDataCreateNestedManyWithoutCoinsInput } from "./MarketDataCreateNestedManyWithoutCoinsInput";
import { TransactionCreateNestedManyWithoutCoinsInput } from "./TransactionCreateNestedManyWithoutCoinsInput";

export type CoinCreateInput = {
  analysisReports?: AnalysisReportCreateNestedManyWithoutCoinsInput;
  currency?: number | null;
  description?: string | null;
  marketDataItems?: MarketDataCreateNestedManyWithoutCoinsInput;
  name?: string | null;
  symbolField?: string | null;
  transactions?: TransactionCreateNestedManyWithoutCoinsInput;
};
