import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";

export type AnalysisReportUpdateInput = {
  analyst?: string | null;
  coin?: CoinWhereUniqueInput | null;
  createdOn?: Date | null;
  report?: string | null;
};
