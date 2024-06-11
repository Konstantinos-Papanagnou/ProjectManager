import { Assignment } from "../assignment/Assignment";
import { JsonValue } from "type-fest";

export type Employee = {
  assignments?: Array<Assignment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  idNumber: string | null;
  image: JsonValue;
  lastName: string | null;
  updatedAt: Date;
};
