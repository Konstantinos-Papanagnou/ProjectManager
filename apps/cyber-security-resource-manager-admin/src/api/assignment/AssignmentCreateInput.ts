import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type AssignmentCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
  role?: string | null;
};
