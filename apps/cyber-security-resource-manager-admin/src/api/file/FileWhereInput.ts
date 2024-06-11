import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FileWhereInput = {
  filename?: StringNullableFilter;
  id?: StringFilter;
  path?: StringNullableFilter;
  uploadedBy?: StringNullableFilter;
};
