import { AssignmentUpdateManyWithoutProjectsInput } from "./AssignmentUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  assignments?: AssignmentUpdateManyWithoutProjectsInput;
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
};
