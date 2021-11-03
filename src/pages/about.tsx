import { graphql, PageProps } from "gatsby";
import { useEffect, useState, FunctionComponent } from "react";
import { useLocalization } from "gatsby-theme-i18n";
import equal from "fast-deep-equal/react";
import Layout from "../components/Layout/Layout";
import clew from "../../static/svg/clew.svg";
import {
  CmsPageProperty,
  CmsTableRecord,
  IndexPageGqlArgs,
  AboutPageGqlResponse,
} from "../types/common";
import callGraphqlApi from "../utils/callGraphqlApi";
import Article from "../components/AboutPage/Article";
import { getPropertyAsStr } from "../utils/getPropertyAsStr";
import SecondaryHero from "../components/SecondaryHero";

export const pageQuery = graphql`
  query AboutPageQuery($locale: String!) {
    cmsApi {
      page(content: "about", locale: $locale) {
        name
        type
        value
      }
      table(content: "about_overview", locale: $locale) {
        slug
        position
        properties {
          name
          type
          value
        }
      }
    }
  }
`;

interface AboutPageProps extends PageProps {
  data: {
    cmsApi: {
      page: CmsPageProperty[];
      table: CmsTableRecord[];
    };
  };
}

const AboutPage: FunctionComponent<AboutPageProps> = ({ data }) => {
  const { locale } = useLocalization();
  const { cmsApi } = data;
  const [pageData, setPageData] = useState(cmsApi);
  const { table, page } = cmsApi;

  const img = getPropertyAsStr(page, "hero_img");
  const title = getPropertyAsStr(page, "hero_title");
  const seoTitle = getPropertyAsStr(page, "seoTitle");
  const seoDescription = getPropertyAsStr(page, "seoDescription");

  useEffect(() => {
    callGraphqlApi<AboutPageGqlResponse, IndexPageGqlArgs>(
      `query AboutPageQuery($locale: String!) {
        page(content: "about", locale: $locale){
          name
          type
          value
        }
        table(content: "about_overview", locale: $locale) {
          slug
          position
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
      <section className="container mx-auto px-8 lg:px-12">
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

export default AboutPage;
