import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { NoteTitle } from "../note/NoteTitle";
import { TagTitle } from "../tag/TagTitle";

export const NoteTagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="note.id" reference="Note" label="note">
          <SelectInput optionText={NoteTitle} />
        </ReferenceInput>
        <ReferenceInput source="tag.id" reference="Tag" label="tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
