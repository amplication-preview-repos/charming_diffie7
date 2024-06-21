import { NoteTagUpdateManyWithoutTagsInput } from "./NoteTagUpdateManyWithoutTagsInput";

export type TagUpdateInput = {
  name?: string | null;
  noteTags?: NoteTagUpdateManyWithoutTagsInput;
};
