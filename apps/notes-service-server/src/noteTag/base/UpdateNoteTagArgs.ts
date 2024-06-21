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
import { NoteTagWhereUniqueInput } from "./NoteTagWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NoteTagUpdateInput } from "./NoteTagUpdateInput";

@ArgsType()
class UpdateNoteTagArgs {
  @ApiProperty({
    required: true,
    type: () => NoteTagWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NoteTagWhereUniqueInput)
  @Field(() => NoteTagWhereUniqueInput, { nullable: false })
  where!: NoteTagWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NoteTagUpdateInput,
  })
  @ValidateNested()
  @Type(() => NoteTagUpdateInput)
  @Field(() => NoteTagUpdateInput, { nullable: false })
  data!: NoteTagUpdateInput;
}

export { UpdateNoteTagArgs as UpdateNoteTagArgs };
