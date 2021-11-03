import { FunctionComponent, ReactNode } from "react";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Seo from "../Seo";

i18next.use(LanguageDetector).init({
  whitelist: ["ru", "ua"],
  fallbackLng: "ru",
  preload: ["ru", "ua"],
});

interface LayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({
  title,
  description,
  children,
}) => (
  <main className="relative w-full overflow-hidden my-0 mx-auto">
    <Seo title={title} description={description} />
    <Header title={title} />
    {children}
    <Footer />
  </main>
);

export default Layout;
