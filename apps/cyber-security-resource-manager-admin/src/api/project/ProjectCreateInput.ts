import { AssignmentCreateNestedManyWithoutProjectsInput } from "./AssignmentCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutProjectsInput;
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
};
