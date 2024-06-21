import { NoteWhereUniqueInput } from "../note/NoteWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type NoteTagCreateInput = {
  note?: NoteWhereUniqueInput | null;
  tag?: TagWhereUniqueInput | null;
};
