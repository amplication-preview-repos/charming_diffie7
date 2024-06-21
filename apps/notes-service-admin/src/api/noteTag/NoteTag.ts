import { Note } from "../note/Note";
import { Tag } from "../tag/Tag";

export type NoteTag = {
  createdAt: Date;
  id: string;
  note?: Note | null;
  tag?: Tag | null;
  updatedAt: Date;
};
