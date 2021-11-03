import { graphql, PageProps } from "gatsby";
import { useEffect, useState, FunctionComponent } from "react";
import { useLocalization } from "gatsby-theme-i18n";
import equal from "fast-deep-equal/react";
import Layout from "../components/Layout/Layout";
import {
  AboutPageGqlResponse,
  CmsPageProperty,
  CmsTableRecord,
  IndexPageGqlArgs,
} from "../types/common";
import callGraphqlApi from "../utils/callGraphqlApi";
import Article from "../components/AboutPage/Article";
import { getPropertyAsStr } from "../utils/getPropertyAsStr";
import clew from "../../static/svg/clew.svg";
import SecondaryHero from "../components/SecondaryHero";

export const pageQuery = graphql`
  query ApparelPageQuery($locale: String!) {
    cmsApi {
      page(content: "Apparel_page", locale: $locale) {
        name
        type
        value
      }
      table(content: "apparel_page", locale: $locale) {
        slug
        properties {
          name
          type
          value
        }
      }
    }
  }
`;

interface ApparelPageProps extends PageProps {
  data: {
    cmsApi: {
      page: CmsPageProperty[];
      table: CmsTableRecord[];
    };
  };
}

const ApparelPage: FunctionComponent<ApparelPageProps> = ({ data }) => {
  const { locale } = useLocalization();
  const { cmsApi } = data;
  const [pageData, setPageData] = useState(cmsApi);
  const { table, page } = cmsApi;

  const img = getPropertyAsStr(page, "img");
  const title = getPropertyAsStr(page, "title");
  const seoTitle = getPropertyAsStr(page, "seoTitle");
  const seoDescription = getPropertyAsStr(page, "seoDescription");

  useEffect(() => {
    callGraphqlApi<AboutPageGqlResponse, IndexPageGqlArgs>(
      `query ApparelPageQuery($locale: String!) {
        page(content: "Apparel_page", locale: $locale) {
          name
          type
          value
        }
        table(content: "apparel_page", locale: $locale) {
          slug
          properties {
            name
            type
            value
          }
        }
      }`,
      {
        locale,
      },
    ).then((response) => {
      if (!response.error && response.data && !equal(pageData, response.data)) {
        setPageData(response.data);
      }
    });
  }, []);

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
        {table
          .sort((a, b) => ((a.position ?? 0) < (b.position ?? 0) ? -1 : 1))
          .map((item, index) => (
            <Article key={item.slug} data={item} reverse={index % 2 !== 0} />
          ))}
      </section>
    </Layout>
  );
};

export default ApparelPage;
