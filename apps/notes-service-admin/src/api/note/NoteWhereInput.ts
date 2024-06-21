import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NoteTagListRelationFilter } from "../noteTag/NoteTagListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  noteTags?: NoteTagListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
