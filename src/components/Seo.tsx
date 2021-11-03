import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { ReactNode } from "react";

interface SeoProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

interface SeoData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
}

const Seo: React.FunctionComponent<SeoProps> = ({
  title,
  description,
  children,
}) => {
  const { site } = useStaticQuery<SeoData>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <link rel="icon" type="image/x-icon" href="/favicon.png" />
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </Helmet>
  );
};

export default Seo;
