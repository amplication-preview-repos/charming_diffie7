import { NoteTag as TNoteTag } from "../api/noteTag/NoteTag";

export const NOTETAG_TITLE_FIELD = "id";

export const NoteTagTitle = (record: TNoteTag): string => {
  return record.id?.toString() || String(record.id);
};
