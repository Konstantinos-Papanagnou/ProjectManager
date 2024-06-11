import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="filename" source="filename" />
        <TextInput label="path" source="path" />
        <TextInput label="uploadedBy" source="uploadedBy" />
      </SimpleForm>
    </Edit>
  );
};
