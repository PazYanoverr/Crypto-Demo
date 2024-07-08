import { AnalysisReport as TAnalysisReport } from "../api/analysisReport/AnalysisReport";

export const ANALYSISREPORT_TITLE_FIELD = "analyst";

export const AnalysisReportTitle = (record: TAnalysisReport): string => {
  return record.analyst?.toString() || String(record.id);
};
