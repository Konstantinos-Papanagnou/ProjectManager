import { Assignment as TAssignment } from "../api/assignment/Assignment";

export const ASSIGNMENT_TITLE_FIELD = "role";

export const AssignmentTitle = (record: TAssignment): string => {
  return record.role?.toString() || String(record.id);
};
