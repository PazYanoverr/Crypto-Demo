/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CoinWhereInput } from "./CoinWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CoinOrderByInput } from "./CoinOrderByInput";

@ArgsType()
class CoinFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CoinWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CoinWhereInput, { nullable: true })
  @Type(() => CoinWhereInput)
  where?: CoinWhereInput;

  @ApiProperty({
    required: false,
    type: [CoinOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CoinOrderByInput], { nullable: true })
  @Type(() => CoinOrderByInput)
  orderBy?: Array<CoinOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CoinFindManyArgs as CoinFindManyArgs };
