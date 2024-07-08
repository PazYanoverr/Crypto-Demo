import { SortOrder } from "../../util/SortOrder";

export type AnalysisReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  analyst?: SortOrder;
  createdOn?: SortOrder;
  report?: SortOrder;
  coinId?: SortOrder;
};
