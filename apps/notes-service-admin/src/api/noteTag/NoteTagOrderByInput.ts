import { SortOrder } from "../../util/SortOrder";

export type NoteTagOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  noteId?: SortOrder;
  tagId?: SortOrder;
  updatedAt?: SortOrder;
};
