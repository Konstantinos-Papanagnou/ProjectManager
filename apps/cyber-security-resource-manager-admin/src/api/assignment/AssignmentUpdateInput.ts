import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type AssignmentUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
  role?: string | null;
};
