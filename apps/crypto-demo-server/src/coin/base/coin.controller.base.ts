/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CoinService } from "../coin.service";
import { CoinCreateInput } from "./CoinCreateInput";
import { Coin } from "./Coin";
import { CoinFindManyArgs } from "./CoinFindManyArgs";
import { CoinWhereUniqueInput } from "./CoinWhereUniqueInput";
import { CoinUpdateInput } from "./CoinUpdateInput";
import { AnalysisReportFindManyArgs } from "../../analysisReport/base/AnalysisReportFindManyArgs";
import { AnalysisReport } from "../../analysisReport/base/AnalysisReport";
import { AnalysisReportWhereUniqueInput } from "../../analysisReport/base/AnalysisReportWhereUniqueInput";
import { MarketDataFindManyArgs } from "../../marketData/base/MarketDataFindManyArgs";
import { MarketData } from "../../marketData/base/MarketData";
import { MarketDataWhereUniqueInput } from "../../marketData/base/MarketDataWhereUniqueInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

export class CoinControllerBase {
  constructor(protected readonly service: CoinService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Coin })
  async createCoin(@common.Body() data: CoinCreateInput): Promise<Coin> {
    return await this.service.createCoin({
      data: data,
      select: {
        createdAt: true,
        currency: true,
        description: true,
        id: true,
        name: true,
        symbolField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Coin] })
  @ApiNestedQuery(CoinFindManyArgs)
  async coins(@common.Req() request: Request): Promise<Coin[]> {
    const args = plainToClass(CoinFindManyArgs, request.query);
    return this.service.coins({
      ...args,
      select: {
        createdAt: true,
        currency: true,
        description: true,
        id: true,
        name: true,
        symbolField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Coin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async coin(
    @common.Param() params: CoinWhereUniqueInput
  ): Promise<Coin | null> {
    const result = await this.service.coin({
      where: params,
      select: {
        createdAt: true,
        currency: true,
        description: true,
        id: true,
        name: true,
        symbolField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Coin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCoin(
    @common.Param() params: CoinWhereUniqueInput,
    @common.Body() data: CoinUpdateInput
  ): Promise<Coin | null> {
    try {
      return await this.service.updateCoin({
        where: params,
        data: data,
        select: {
          createdAt: true,
          currency: true,
          description: true,
          id: true,
          name: true,
          symbolField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Coin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCoin(
    @common.Param() params: CoinWhereUniqueInput
  ): Promise<Coin | null> {
    try {
      return await this.service.deleteCoin({
        where: params,
        select: {
          createdAt: true,
          currency: true,
          description: true,
          id: true,
          name: true,
          symbolField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/analysisReports")
  @ApiNestedQuery(AnalysisReportFindManyArgs)
  async findAnalysisReports(
    @common.Req() request: Request,
    @common.Param() params: CoinWhereUniqueInput
  ): Promise<AnalysisReport[]> {
    const query = plainToClass(AnalysisReportFindManyArgs, request.query);
    const results = await this.service.findAnalysisReports(params.id, {
      ...query,
      select: {
        analyst: true,

        coin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        createdOn: true,
        id: true,
        report: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/analysisReports")
  async connectAnalysisReports(
    @common.Param() params: CoinWhereUniqueInput,
    @common.Body() body: AnalysisReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analysisReports: {
        connect: body,
      },
    };
    await this.service.updateCoin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/analysisReports")
  async updateAnalysisReports(
    @common.Param() params: CoinWhereUniqueInput,
    @common.Body() body: AnalysisReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analysisReports: {
        set: body,
      },
    };
    await this.service.updateCoin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/analysisReports")
  async disconnectAnalysisReports(
    @common.Param() params: CoinWhereUniqueInput,
    @common.Body() body: AnalysisReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analysisReports: {
        disconnect: body,
      },
    };
    await this.service.updateCoin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/marketDataItems")
  @ApiNestedQuery(MarketDataFindManyArgs)
  async findMarketDataItems(
    @common.Req() request: Request,
    @common.Param() params: CoinWhereUniqueInput
  ): Promise<MarketData[]> {
    const query = plainToClass(MarketDataFindManyArgs, request.query);
    const results = await this.service.findMarketDataItems(params.id, {
      ...query,
      select: {
        coin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        marketCap: true,
        price: true,
        timestamp: true,
        updatedAt: true,
        volume: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/marketDataItems")
  async connectMarketDataItems(
    @common.Param() params: CoinWhereUniqueInput,
    @common.Body() body: MarketDataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      marketDataItems: {
        connect: body,
      },
    };
    await this.service.updateCoin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/marketDataItems")
  async updateMarketDataItems(
    @common.Param() params: CoinWhereUniqueInput,
    @common.Body() body: MarketDataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      marketDataItems: {
        set: body,
      },
    };
    await this.service.updateCoin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/marketDataItems")
  async disconnectMarketDataItems(
    @common.Param() params: CoinWhereUniqueInput,
    @common.Body() body: MarketDataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      marketDataItems: {
        disconnect: body,
      },
    };
    await this.service.updateCoin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/transactions")
  @ApiNestedQuery(TransactionFindManyArgs)
  async findTransactions(
    @common.Req() request: Request,
    @common.Param() params: CoinWhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
      select: {
        amount: true,

        coin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        transactionDate: true,
        transactionType: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactions")
  async connectTransactions(
    @common.Param() params: CoinWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updateCoin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  async updateTransactions(
    @common.Param() params: CoinWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updateCoin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  async disconnectTransactions(
    @common.Param() params: CoinWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updateCoin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/get-total-coin-value")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetTotalCoinValue(
    @common.Param()
    params: string
  ): Promise<string> {
    return this.service.GetTotalCoinValue(params);
  }
}
