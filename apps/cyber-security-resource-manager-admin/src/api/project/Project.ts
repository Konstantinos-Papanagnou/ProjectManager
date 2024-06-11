import { Assignment } from "../assignment/Assignment";

export type Project = {
  assignments?: Array<Assignment>;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
