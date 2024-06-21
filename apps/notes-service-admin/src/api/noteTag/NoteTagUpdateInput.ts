import { NoteWhereUniqueInput } from "../note/NoteWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type NoteTagUpdateInput = {
  note?: NoteWhereUniqueInput | null;
  tag?: TagWhereUniqueInput | null;
};
