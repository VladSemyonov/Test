/* not is use
import { CmsTableRecord, PropertyValue } from "../types/common";
import { castPropertyValue } from "./castPropertyValue";

export const getTablePropertyValue = (
  rec: CmsTableRecord,
  name: string,
): PropertyValue => {
  const property = rec.properties.find((item) => item.name === name);

  if (!property) {
    return undefined;
  }

  const { type, value } = property;

  if (value === null) {
    return undefined;
  }

  return castPropertyValue(type, value);
};
*/
