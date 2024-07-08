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
import { CoinWhereUniqueInput } from "./CoinWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CoinUpdateInput } from "./CoinUpdateInput";

@ArgsType()
class UpdateCoinArgs {
  @ApiProperty({
    required: true,
    type: () => CoinWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CoinWhereUniqueInput)
  @Field(() => CoinWhereUniqueInput, { nullable: false })
  where!: CoinWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CoinUpdateInput,
  })
  @ValidateNested()
  @Type(() => CoinUpdateInput)
  @Field(() => CoinUpdateInput, { nullable: false })
  data!: CoinUpdateInput;
}

export { UpdateCoinArgs as UpdateCoinArgs };
