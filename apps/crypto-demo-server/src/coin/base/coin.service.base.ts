/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Coin as PrismaCoin,
  AnalysisReport as PrismaAnalysisReport,
  Transaction as PrismaTransaction,
  MarketData as PrismaMarketData,
} from "@prisma/client";

export class CoinServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CoinCountArgs, "select">): Promise<number> {
    return this.prisma.coin.count(args);
  }

  async coins(args: Prisma.CoinFindManyArgs): Promise<PrismaCoin[]> {
    return this.prisma.coin.findMany(args);
  }
  async coin(args: Prisma.CoinFindUniqueArgs): Promise<PrismaCoin | null> {
    return this.prisma.coin.findUnique(args);
  }
  async createCoin(args: Prisma.CoinCreateArgs): Promise<PrismaCoin> {
    return this.prisma.coin.create(args);
  }
  async updateCoin(args: Prisma.CoinUpdateArgs): Promise<PrismaCoin> {
    return this.prisma.coin.update(args);
  }
  async deleteCoin(args: Prisma.CoinDeleteArgs): Promise<PrismaCoin> {
    return this.prisma.coin.delete(args);
  }

  async findAnalysisReports(
    parentId: string,
    args: Prisma.AnalysisReportFindManyArgs
  ): Promise<PrismaAnalysisReport[]> {
    return this.prisma.coin
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .analysisReports(args);
  }

  async findTransactions(
    parentId: string,
    args: Prisma.TransactionFindManyArgs
  ): Promise<PrismaTransaction[]> {
    return this.prisma.coin
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .transactions(args);
  }

  async findMarketDataItems(
    parentId: string,
    args: Prisma.MarketDataFindManyArgs
  ): Promise<PrismaMarketData[]> {
    return this.prisma.coin
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .marketDataItems(args);
  }
}
