export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  transactionDate: Date | null;
  transactionType: string | null;
  updatedAt: Date;
};
