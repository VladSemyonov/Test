import { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout/Layout";
import CatalogItem from "../../components/CatalogItem";
import { getPropertyAsStr } from "../../utils/getPropertyAsStr";
import SecondaryHero from "../../components/SecondaryHero";
import clew from "../../../static/svg/clew.svg";
import { CmsPageProperty, CmsTableRecord } from "../../types/common";

interface CategoryProps {
  params: {
    category: string;
  };
  data: {
    cmsApi: {
      page: CmsPageProperty[];
      overalls: CmsTableRecord[];
      textile: CmsTableRecord[];
    };
  };
}

const Category: FunctionComponent<CategoryProps> = ({ params, data }) => {
  const { t } = useTranslation(["catalogCategories"]);
  const { category } = params;

  const getContent = (propName: string) => {
    switch (propName) {
      case "overalls":
        return data.cmsApi.overalls;

      case "textile":
        return data.cmsApi.textile;

      default:
        return [];
    }
  };

  const content = getContent(category);
  const { page } = data.cmsApi;

  const title = getPropertyAsStr(page, "title");
  const img = getPropertyAsStr(page, "img");

  return (
    <Layout title="">
      <SecondaryHero title={t(`catalogCategories:${category}`)} img={img} />
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
          {content.map((i: CmsTableRecord, index: number) => (
            <CatalogItem data={i} key={index.toString()} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const categoryData = graphql`
  query MyQuery32($locale: String!) {
    cmsApi {
      textile: table(locale: "", content: "home-textile") {
        properties {
          name
          type
          value
        }
      }
      overalls: table(locale: $locale, content: "overalls") {
        properties {
          name
          type
          value
        }
      }
      page(content: "catalog_page", locale: $locale) {
        name
        type
        value
      }
    }
  }
`;

export default Category;
