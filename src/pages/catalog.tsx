import { graphql } from "gatsby";
import { FunctionComponent } from "react";
import Layout from "../components/Layout/Layout";
import SecondaryHero from "../components/SecondaryHero";
import { getPropertyAsStr } from "../utils/getPropertyAsStr";
import { CmsPageProperty, CmsTableRecord } from "../types/common";
import clew from "../../static/svg/clew.svg";
import CatalogItem from "../components/CatalogItem";

interface CatalogProps {
  data: {
    cmsApi: {
      page: CmsPageProperty[];
      table: Array<CmsTableRecord>;
    };
  };
}

export const Gallery = graphql`
  query CatalogPageQuery($locale: String!) {
    cmsApi {
      page(content: "catalog_page", locale: $locale) {
        name
        type
        value
      }
      table(content: "catalog_page", locale: $locale) {
        properties {
          name
          value
          type
        }
      }
    }
  }
`;

const Catalog: FunctionComponent<CatalogProps> = ({ data }) => {
  const { page, table } = data.cmsApi;
  const title = getPropertyAsStr(page, "title");
  const img = getPropertyAsStr(page, "img");
  const seoTitle = getPropertyAsStr(page, "seoTitle");
  const seoDescription = getPropertyAsStr(page, "seoDescription");

  return (
    <Layout title={seoTitle} description={seoDescription}>
      <SecondaryHero title={title} img={img} />
      <section className="container mx-auto px-12">
        <div className="flex w-full content-center">
          <div className="h-16 w-16">
            <img
              width="70"
              height="70"
              className="my-2"
              src={clew}
              alt="yunotex"
            />
          </div>
          <div className="ml-4 flex h-auto items-center">
            <h2 className="leading-8 text-3xl font-semibold text-black">
              {title}
            </h2>
          </div>
        </div>
        <div className="sm:grid gap-x-6 gap-y-2 md:gap-x-8 md:gap-y-4 lg:gap-x-16 lg:gap-y-8 grid-cols-2 my-8">
          {table.map((i, index) => (
            <CatalogItem data={i} key={index.toString()} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Catalog;
