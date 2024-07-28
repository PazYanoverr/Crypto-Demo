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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
} from "class-validator";
import { CoinWhereUniqueInput } from "../../coin/base/CoinWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class AnalysisReportCreateInput {
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
  analyst?: string | null;

  @ApiProperty({
    required: false,
    type: () => CoinWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CoinWhereUniqueInput)
  @IsOptional()
  @Field(() => CoinWhereUniqueInput, {
    nullable: true,
  })
  coin?: CoinWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdOn?: Date | null;

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
  report?: string | null;
}

export { AnalysisReportCreateInput as AnalysisReportCreateInput };
