import { PageProps } from "gatsby";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import AppLink from "../components/AppLink";
import Layout from "../components/Layout/Layout";

const Error404Page: FunctionComponent<PageProps> = () => {
  const { t } = useTranslation(["404"]);

  return (
    <Layout title="404">
      <div className="text-center" style={{ padding: "50px 0 100px 0" }}>
        <p style={{ fontSize: "1.5rem", padding: "20px 0 30px 0" }}>
          {t("404:notFound")}
        </p>
        <p style={{ margin: "20px" }}>
          <AppLink to="/" className="appBtn">
            {t("404:linkToMainPage")}
          </AppLink>
        </p>
      </div>
    </Layout>
  );
};

export default Error404Page;
