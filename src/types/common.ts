// import { ImageDataLike } from "gatsby-plugin-image";

export interface ApiRequestBody extends Record<string, unknown> {
  locale: string;
  path: string;
  params?: Record<string, unknown>;
  defParams?: Record<string, unknown>;
}

export interface ApiRequestError {
  error?: string;
  code?: string;
  message?: string;
}
export interface ApiBasicResponse {
  success: boolean;
  error?: string | ApiRequestError;
}
// export interface ApiResponse extends ApiBasicResponse {
//   [key: string]: unknown;
// }
export interface ApiDataResponse<T> extends ApiBasicResponse {
  data?: T;
}

// enum ContentTypeEnum {
//   PAGE = "PAGE",
//   TABLE = "TABLE",
// }

// export type ContentType = keyof typeof ContentTypeEnum;

enum PropertyTypeEnum {
  STRING = "STRING",
  STRING_NO_LOCALE = "STRING_NO_LOCALE",
  FILE = "FILE",
  HTML = "HTML",
  INTEGER = "INTEGER",
  NUMBER = "NUMBER",
  MONEY = "MONEY",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
}

export type PropertyType = keyof typeof PropertyTypeEnum;

export type PropertyValue = string | boolean | number | Date | undefined;

export interface CmsProperty {
  name: string;
  type: PropertyType;
  value: string;
}

export interface CmsPageProperty extends CmsProperty {
  content?: string;
  locale?: string;
}

export interface CmsTableProperty extends CmsProperty {
  locale?: string;
}

export interface CmsTableRecord {
  content?: string;
  slug?: string;
  created?: number;
  position?: number;
  properties: CmsTableProperty[];
}

export interface IndexPageGqlArgs {
  locale: string;
}

export interface IndexPageGqlResponse {
  page: CmsPageProperty[];
  infrastructures: CmsTableRecord[];
  about: CmsTableRecord[];
  heroContext: CmsTableRecord[];
  solutions: CmsTableRecord[];
  testimonials: CmsTableRecord[];
}

export interface AboutPageGqlResponse {
  page: CmsPageProperty[];
  table: CmsTableRecord[];
}
