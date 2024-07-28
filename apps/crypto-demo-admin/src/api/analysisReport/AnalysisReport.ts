import { Coin } from "../coin/Coin";

export type AnalysisReport = {
  analyst: string | null;
  coin?: Coin | null;
  createdAt: Date;
  createdOn: Date | null;
  id: string;
  report: string | null;
  updatedAt: Date;
};
