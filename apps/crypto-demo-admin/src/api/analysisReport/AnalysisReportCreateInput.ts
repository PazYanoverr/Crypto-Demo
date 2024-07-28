import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";

export type AnalysisReportCreateInput = {
  analyst?: string | null;
  coin?: CoinWhereUniqueInput | null;
  createdOn?: Date | null;
  report?: string | null;
};
