import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  idNumber?: SortOrder;
  image?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
