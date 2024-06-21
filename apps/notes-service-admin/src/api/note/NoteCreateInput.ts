import { NoteTagCreateNestedManyWithoutNotesInput } from "./NoteTagCreateNestedManyWithoutNotesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteCreateInput = {
  content?: string | null;
  noteTags?: NoteTagCreateNestedManyWithoutNotesInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
