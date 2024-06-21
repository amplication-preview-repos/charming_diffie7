import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { NOTE_TITLE_FIELD } from "../note/NoteTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const NoteTagShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="note" source="note.id" reference="Note">
          <TextField source={NOTE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
