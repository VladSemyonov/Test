import { graphql } from "gatsby";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import SecondaryHero from "../components/SecondaryHero";
import { getPropertyAsStr } from "../utils/getPropertyAsStr";
import { CmsPageProperty } from "../types/common";
import PreviewImageList from "../components/PreviewImageList/PreviewImageList";

interface ComponentProps {
  data: {
    allFile: {
      nodes: Array<{ publicURL: string; name: string }>;
    };
    cmsApi: {
      page: Array<CmsPageProperty>;
    };
  };
  pageContext: {
    node: string;
    locale: string;
    hrefLang: string;
    originalPath: string;
    dateFormat: string;
  };
}

const Component: FunctionComponent<ComponentProps> = ({
  data,
  pageContext,
}) => {
  const { t } = useTranslation(["catalogCategories"]);
  const { page } = data.cmsApi;
  const { nodes } = data.allFile;
  const heroImg = getPropertyAsStr(page, "img");

  return (
    <Layout title="">
      <SecondaryHero
        title={t(`catalogCategories:${pageContext.node}`)}
        img={heroImg}
      />
      <PreviewImageList items={nodes} />
    </Layout>
  );
};

export const data = graphql`
  query MyQuery($node: String!, $locale: String!) {
    allFile(filter: { sourceInstanceName: { eq: $node } }) {
      nodes {
        publicURL
        name
      }
    }
    cmsApi {
      page(content: "catalog_page", locale: $locale) {
        name
        type
        value
      }
    }
  }
`;

export default Component;
