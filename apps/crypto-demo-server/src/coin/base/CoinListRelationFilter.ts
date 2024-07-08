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
import { CoinWhereInput } from "./CoinWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CoinListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CoinWhereInput,
  })
  @ValidateNested()
  @Type(() => CoinWhereInput)
  @IsOptional()
  @Field(() => CoinWhereInput, {
    nullable: true,
  })
  every?: CoinWhereInput;

  @ApiProperty({
    required: false,
    type: () => CoinWhereInput,
  })
  @ValidateNested()
  @Type(() => CoinWhereInput)
  @IsOptional()
  @Field(() => CoinWhereInput, {
    nullable: true,
  })
  some?: CoinWhereInput;

  @ApiProperty({
    required: false,
    type: () => CoinWhereInput,
  })
  @ValidateNested()
  @Type(() => CoinWhereInput)
  @IsOptional()
  @Field(() => CoinWhereInput, {
    nullable: true,
  })
  none?: CoinWhereInput;
}
export { CoinListRelationFilter as CoinListRelationFilter };