import { NoteTagWhereInput } from "./NoteTagWhereInput";
import { NoteTagOrderByInput } from "./NoteTagOrderByInput";

export type NoteTagFindManyArgs = {
  where?: NoteTagWhereInput;
  orderBy?: Array<NoteTagOrderByInput>;
  skip?: number;
  take?: number;
};
