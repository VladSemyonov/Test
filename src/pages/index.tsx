import { graphql, PageProps } from "gatsby";
import { FunctionComponent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocalization } from "gatsby-theme-i18n";
import equal from "fast-deep-equal/react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import MainContent from "../components/Main/MainContent/MainContent";
import {
  CmsPageProperty,
  CmsTableRecord,
  IndexPageGqlArgs,
  IndexPageGqlResponse,
} from "../types/common";
import callGraphqlApi from "../utils/callGraphqlApi";
import IndexPageContext from "../components/Context/IndexContext";
import { getPropertyAsStr } from "../utils/getPropertyAsStr";

interface IndexPageProps extends PageProps {
  data: {
    cmsApi: {
      page: CmsPageProperty[];
      infrastructures: CmsTableRecord[];
      solutions: CmsTableRecord[];
      // about: CmsTableRecord[];
      // heroContext: CmsTableRecord[];
      // testimonials: CmsTableRecord[];
      // contacts: CmsPageProperty[];
    };
  };
}

export const pageQuery = graphql`
  query IndexPageQuery($locale: String!) {
    cmsApi {
      page(locale: $locale, content: "index") {
        name
        type
        value
      }
      # contacts: page(content: "contact_page", locale: $locale) {
      #   name
      #   type
      #   value
      # }
      infrastructures: table(locale: $locale, content: "infrastructure") {
        slug
        position
        properties {
          name
          type
          value
        }
      }
      solutions: table(content: "solutions", locale: $locale) {
        content
        position
        slug
        properties {
          name
          value
          type
        }
      }
      # testimonials: table(content: "testimonials", locale: $locale) {
      #   content
      #   position
      #   slug
      #   properties {
      #     name
      #     value
      #     type
      #   }
      # }
    }
  }
`;

const IndexPage: FunctionComponent<IndexPageProps> = ({ data }) => {
  const { t } = useTranslation(["site"]);
  const { locale } = useLocalization();
  const { cmsApi } = data;
  const [pageData, setPageData] = useState(cmsApi);
  const {
    page,
    infrastructures,
    solutions,
    // about,
    // testimonials,
    // heroContext,
    // contacts,
  } = pageData;

  const seoTitle = getPropertyAsStr(page, "seoTitle") ?? t("site:title");
  const seoDescription =
    getPropertyAsStr(page, "seoDescription") ?? t("site:description");

  useEffect(() => {
    callGraphqlApi<IndexPageGqlResponse, IndexPageGqlArgs>(
      `query IndexPageQuery($locale: String!) {
        page(locale: $locale, content: "index") {
          name
          type
          value
        }
        contacts: page(content: "contact_page", locale: $locale) {
          name
          type
          value
        }
        infrastructures: table(locale: $locale, content: "infrastructure") {
          slug
          position
          properties {
            name
            type
            value
          }
        }
        solutions: table(content: "solutions", locale: $locale) {
          content
          properties {
            name
            value
            type
          }
        }
        testimonials: table(content: "testimonials", locale: $locale) {
          content
          properties {
            name
            value
            type
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
    <IndexPageContext.Provider
      value={{
        page,
        infrastructures,
        solutions,
        // about,
        // testimonials,
        // heroContext,
        // contacts,
      }}
    >
      <Layout title={seoTitle} description={seoDescription}>
        <Hero />
        <MainContent />
      </Layout>
    </IndexPageContext.Provider>
  );
};

export default IndexPage;
