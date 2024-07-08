import { Coin } from "../coin/Coin";

export type AnalysisReport = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  analyst: string | null;
  createdOn: Date | null;
  report: string | null;
  coin?: Coin | null;
};
