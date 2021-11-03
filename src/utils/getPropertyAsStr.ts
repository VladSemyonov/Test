import { CmsPageProperty, CmsTableRecord } from "../types/common";
import { getProperty } from "./getProperty";

export const getPropertyAsStr = (
  data: CmsTableRecord | CmsPageProperty[],
  name: string,
): string => getProperty(data, name)?.value ?? "";
