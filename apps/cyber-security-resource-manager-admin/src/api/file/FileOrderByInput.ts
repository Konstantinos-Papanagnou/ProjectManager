import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  createdAt?: SortOrder;
  filename?: SortOrder;
  id?: SortOrder;
  path?: SortOrder;
  updatedAt?: SortOrder;
  uploadedBy?: SortOrder;
};
