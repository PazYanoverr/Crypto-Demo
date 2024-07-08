import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";

export type AnalysisReportCreateInput = {
  analyst?: string | null;
  createdOn?: Date | null;
  report?: string | null;
  coin?: CoinWhereUniqueInput | null;
};
