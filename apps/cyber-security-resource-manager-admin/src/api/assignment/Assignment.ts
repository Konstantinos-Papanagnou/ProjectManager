import { Employee } from "../employee/Employee";
import { Project } from "../project/Project";

export type Assignment = {
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  project?: Project | null;
  role: string | null;
  updatedAt: Date;
};
