import { Context, createContext } from "react";
import { CmsPageProperty, CmsTableRecord } from "../../types/common";

interface IndexPageContextInterface {
  page: CmsPageProperty[];
  infrastructures: CmsTableRecord[];
  solutions: CmsTableRecord[];
  // about: CmsTableRecord[];
  // heroContext: CmsTableRecord[];
  // testimonials: CmsTableRecord[];
  // contacts: CmsPageProperty[];
}

const IndexPageContext: Context<IndexPageContextInterface> = createContext({
  page: [] as CmsPageProperty[],
  infrastructures: [] as CmsTableRecord[],
  solutions: [] as CmsTableRecord[],
});

export default IndexPageContext;
export const { Provider } = IndexPageContext;
export const { Consumer } = IndexPageContext;
