import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="filename" source="filename" />
        <TextInput label="path" source="path" />
        <TextInput label="uploadedBy" source="uploadedBy" />
      </SimpleForm>
    </Create>
  );
};
