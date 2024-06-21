import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { NoteTitle } from "../note/NoteTitle";
import { TagTitle } from "../tag/TagTitle";

export const NoteTagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="note.id" reference="Note" label="note">
          <SelectInput optionText={NoteTitle} />
        </ReferenceInput>
        <ReferenceInput source="tag.id" reference="Tag" label="tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
