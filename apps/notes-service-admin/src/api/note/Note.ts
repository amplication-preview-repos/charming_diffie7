import { NoteTag } from "../noteTag/NoteTag";
import { User } from "../user/User";

export type Note = {
  content: string | null;
  createdAt: Date;
  id: string;
  noteTags?: Array<NoteTag>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
