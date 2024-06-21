import { NoteTag } from "../noteTag/NoteTag";

export type Tag = {
  createdAt: Date;
  id: string;
  name: string | null;
  noteTags?: Array<NoteTag>;
  updatedAt: Date;
};
