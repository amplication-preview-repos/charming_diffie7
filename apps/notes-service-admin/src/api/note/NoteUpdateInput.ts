import { NoteTagUpdateManyWithoutNotesInput } from "./NoteTagUpdateManyWithoutNotesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteUpdateInput = {
  content?: string | null;
  noteTags?: NoteTagUpdateManyWithoutNotesInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
