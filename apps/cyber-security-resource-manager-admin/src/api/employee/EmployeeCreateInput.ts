import { AssignmentCreateNestedManyWithoutEmployeesInput } from "./AssignmentCreateNestedManyWithoutEmployeesInput";
import { InputJsonValue } from "../../types";

export type EmployeeCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutEmployeesInput;
  email?: string | null;
  firstName?: string | null;
  idNumber?: string | null;
  image?: InputJsonValue;
  lastName?: string | null;
};
