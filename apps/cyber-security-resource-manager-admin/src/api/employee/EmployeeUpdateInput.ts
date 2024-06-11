import { AssignmentUpdateManyWithoutEmployeesInput } from "./AssignmentUpdateManyWithoutEmployeesInput";
import { InputJsonValue } from "../../types";

export type EmployeeUpdateInput = {
  assignments?: AssignmentUpdateManyWithoutEmployeesInput;
  email?: string | null;
  firstName?: string | null;
  idNumber?: string | null;
  image?: InputJsonValue;
  lastName?: string | null;
};
