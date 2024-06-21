import { StringFilter } from "../../util/StringFilter";
import { NoteWhereUniqueInput } from "../note/NoteWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type NoteTagWhereInput = {
  id?: StringFilter;
  note?: NoteWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
