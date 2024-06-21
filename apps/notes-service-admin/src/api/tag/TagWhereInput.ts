import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NoteTagListRelationFilter } from "../noteTag/NoteTagListRelationFilter";

export type TagWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  noteTags?: NoteTagListRelationFilter;
};
