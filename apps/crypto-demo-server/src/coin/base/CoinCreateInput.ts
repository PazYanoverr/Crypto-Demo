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
import { AnalysisReportCreateNestedManyWithoutCoinsInput } from "./AnalysisReportCreateNestedManyWithoutCoinsInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  Max,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { MarketDataCreateNestedManyWithoutCoinsInput } from "./MarketDataCreateNestedManyWithoutCoinsInput";
import { TransactionCreateNestedManyWithoutCoinsInput } from "./TransactionCreateNestedManyWithoutCoinsInput";

@InputType()
class CoinCreateInput {
  @ApiProperty({
    required: false,
    type: () => AnalysisReportCreateNestedManyWithoutCoinsInput,
  })
  @ValidateNested()
  @Type(() => AnalysisReportCreateNestedManyWithoutCoinsInput)
  @IsOptional()
  @Field(() => AnalysisReportCreateNestedManyWithoutCoinsInput, {
    nullable: true,
  })
  analysisReports?: AnalysisReportCreateNestedManyWithoutCoinsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  currency?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => MarketDataCreateNestedManyWithoutCoinsInput,
  })
  @ValidateNested()
  @Type(() => MarketDataCreateNestedManyWithoutCoinsInput)
  @IsOptional()
  @Field(() => MarketDataCreateNestedManyWithoutCoinsInput, {
    nullable: true,
  })
  marketDataItems?: MarketDataCreateNestedManyWithoutCoinsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  symbolField?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutCoinsInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutCoinsInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutCoinsInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutCoinsInput;
}

export { CoinCreateInput as CoinCreateInput };
