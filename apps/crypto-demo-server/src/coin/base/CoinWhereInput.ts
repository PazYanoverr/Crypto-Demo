/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalysisReportListRelationFilter } from "../../analysisReport/base/AnalysisReportListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarketDataListRelationFilter } from "../../marketData/base/MarketDataListRelationFilter";
import { TransactionListRelationFilter } from "../../transaction/base/TransactionListRelationFilter";

@InputType()
class CoinWhereInput {
  @ApiProperty({
    required: false,
    type: () => AnalysisReportListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AnalysisReportListRelationFilter)
  @IsOptional()
  @Field(() => AnalysisReportListRelationFilter, {
    nullable: true,
  })
  analysisReports?: AnalysisReportListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  currency?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => MarketDataListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MarketDataListRelationFilter)
  @IsOptional()
  @Field(() => MarketDataListRelationFilter, {
    nullable: true,
  })
  marketDataItems?: MarketDataListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  symbolField?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TransactionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TransactionListRelationFilter)
  @IsOptional()
  @Field(() => TransactionListRelationFilter, {
    nullable: true,
  })
  transactions?: TransactionListRelationFilter;
}

export { CoinWhereInput as CoinWhereInput };
