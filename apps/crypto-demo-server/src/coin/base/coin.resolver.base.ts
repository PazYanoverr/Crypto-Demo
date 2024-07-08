/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Coin } from "./Coin";
import { CoinCountArgs } from "./CoinCountArgs";
import { CoinFindManyArgs } from "./CoinFindManyArgs";
import { CoinFindUniqueArgs } from "./CoinFindUniqueArgs";
import { CreateCoinArgs } from "./CreateCoinArgs";
import { UpdateCoinArgs } from "./UpdateCoinArgs";
import { DeleteCoinArgs } from "./DeleteCoinArgs";
import { AnalysisReportFindManyArgs } from "../../analysisReport/base/AnalysisReportFindManyArgs";
import { AnalysisReport } from "../../analysisReport/base/AnalysisReport";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { MarketDataFindManyArgs } from "../../marketData/base/MarketDataFindManyArgs";
import { MarketData } from "../../marketData/base/MarketData";
import { CoinService } from "../coin.service";
@graphql.Resolver(() => Coin)
export class CoinResolverBase {
  constructor(protected readonly service: CoinService) {}

  async _coinsMeta(
    @graphql.Args() args: CoinCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Coin])
  async coins(@graphql.Args() args: CoinFindManyArgs): Promise<Coin[]> {
    return this.service.coins(args);
  }

  @graphql.Query(() => Coin, { nullable: true })
  async coin(@graphql.Args() args: CoinFindUniqueArgs): Promise<Coin | null> {
    const result = await this.service.coin(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Coin)
  async createCoin(@graphql.Args() args: CreateCoinArgs): Promise<Coin> {
    return await this.service.createCoin({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Coin)
  async updateCoin(@graphql.Args() args: UpdateCoinArgs): Promise<Coin | null> {
    try {
      return await this.service.updateCoin({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Coin)
  async deleteCoin(@graphql.Args() args: DeleteCoinArgs): Promise<Coin | null> {
    try {
      return await this.service.deleteCoin(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [AnalysisReport], { name: "analysisReports" })
  async findAnalysisReports(
    @graphql.Parent() parent: Coin,
    @graphql.Args() args: AnalysisReportFindManyArgs
  ): Promise<AnalysisReport[]> {
    const results = await this.service.findAnalysisReports(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  async findTransactions(
    @graphql.Parent() parent: Coin,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [MarketData], { name: "marketDataItems" })
  async findMarketDataItems(
    @graphql.Parent() parent: Coin,
    @graphql.Args() args: MarketDataFindManyArgs
  ): Promise<MarketData[]> {
    const results = await this.service.findMarketDataItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
