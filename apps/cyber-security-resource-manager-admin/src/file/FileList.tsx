import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Files"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="filename" source="filename" />
        <TextField label="ID" source="id" />
        <TextField label="path" source="path" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadedBy" source="uploadedBy" />
      </Datagrid>
    </List>
  );
};
