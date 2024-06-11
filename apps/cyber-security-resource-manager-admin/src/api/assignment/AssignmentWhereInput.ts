import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AssignmentWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  role?: StringNullableFilter;
};
