/* not is use

import { PropertyType, PropertyValue } from "../types/common";

export const castPropertyValue = (
  type: PropertyType,
  value: string,
): PropertyValue => {
  if (value === null) {
    return undefined;
  }

  switch (type) {
    case "STRING":
    case "FILE":
      return value;

    case "BOOLEAN":
      return !!value;

    case "INTEGER":
      if (Number.isNaN(value)) return undefined;
      return parseInt(value, 10);

    case "NUMBER":
    case "MONEY":
      if (Number.isNaN(value)) return undefined;
      return parseFloat(value);

    case "DATE":
      return new Date(value);

    default:
      throw new Error("Unimplemented type: " + type);
  }
};
*/
