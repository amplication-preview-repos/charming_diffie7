import { NoteTagCreateNestedManyWithoutTagsInput } from "./NoteTagCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  name?: string | null;
  noteTags?: NoteTagCreateNestedManyWithoutTagsInput;
};
