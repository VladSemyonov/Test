import { CmsPageProperty, CmsProperty, CmsTableRecord } from "../types/common";

export const getProperty = (
  data: CmsTableRecord | CmsPageProperty[],
  name: string,
): CmsProperty | undefined => {
  const property = ("properties" in data ? data.properties : data).find(
    (item) => item.name === name,
  );

  return property
    ? { name: property.name, type: property.type, value: property.value }
    : undefined;
};
