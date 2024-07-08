import { AnalysisReport } from "../analysisReport/AnalysisReport";
import { Transaction } from "../transaction/Transaction";
import { MarketData } from "../marketData/MarketData";

export type Coin = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  symbolField: string | null;
  description: string | null;
  analysisReports?: Array<AnalysisReport>;
  transactions?: Array<Transaction>;
  marketDataItems?: Array<MarketData>;
  currency: number | null;
};
