import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import AppLink from "../AppLink";
import linkedIn from "../../../static/svg/linkedin.svg";

const Footer: FunctionComponent = () => {
  const { t } = useTranslation(["navbar", "company", "footer"]);

  return (
    <footer className="text-gray-600 relative body-font bg-white gradient-shadow-down">
      <div className="container px-5 pt-8 pb-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 w-full px-4">
            <h2 className="title-font font-bold font-lg text-gray-900 tracking-widest text-sm mb-3">
              {t("navbar:about")}
            </h2>
            <ul className="list-none mb-10" id="footer-link">
              <li>
                <AppLink
                  to="/about/#history"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {t("navbar:history")}
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="/about/#article6"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {t("navbar:technology")}
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="/about/#managment"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {t("navbar:managment")}
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="/about/#quality"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {t("navbar:quality")}
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="/about/#testimonials2"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {t("navbar:clients")}
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="/about/#testimonials3"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {t("navbar:testimonials")}
                </AppLink>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3 w-full px-4">
            <h2 className="title-font font-bold font-medium text-gray-900 tracking-widest text-sm mb-3">
              {t("navbar:infrastructure")}
            </h2>
            <ul className="list-none mb-10" id="footer-link">
              <li>
                <AppLink
                  to="/infrastructure#machinery1"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {t("navbar:overview")}
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="/infrastructure#processes1"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {t("navbar:prod")}
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="/infrastructure#processes2"
                  className="text-gray-600 hover:text-gray-800"
                >
                  {t("navbar:prof")}
                </AppLink>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              {t("navbar:contact")}
            </h2>
            <ul className="list-none mb-10" id="footer-link">
              <li>
                <a
                  href="tel: +38(05542)2-13-02"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Тел.: +38(05542) 2-13-02
                </a>
              </li>
              <li style={{ height: "auto" }}>
                <span className="text-gray-600 hover:text-gray-800">
                  {t("company:address")}
                </span>
              </li>
              <li>
                <a
                  href="Skype:sfyunost?chat"
                  className="text-gray-800 font-medium hover:text-gray-800"
                >
                  Skype: sfyunost
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center w-auto">
                  <span className="border rounded-full bg-black w-10 h-10 flex items-center justify-center">
                    <img className="" src={linkedIn} alt="li" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-400">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row text-white">
          <p className="text-white text-sm text-center sm:text-left w-full">
            © {new Date().getFullYear()} Yunotex.com.{" "}
            <span>{t("footer:copyright")}</span>
            <span className="md:float-right block">
              <a href="https://hypersoft.io">
                {t("footer:designedBy")} <u>HyperSoft</u>
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*

const { t } = useTranslation(["site", "company", "footer", "products"]);



<div className="col-xl-4 col-lg-4 col-md-6">
              <div className={classNames(widgetColumn, widgetContactBox)}>
                <div className={widgetTitle}>
                  <h3>{t("site:contacts")}</h3>
                </div>
                <div className={widgetContact}>
                  <p>{t("company:address")}</p>
                  <a href="mailto:info@agroimpex.group">info@agroimpex.group</a>
                  <br />
                  <a href="tel:+380552390162">+38 055 239 0162</a>
                  <br />
                  <a href="tel:+380504940410">+38 050 494 0410</a>
                  <br />
                  <a href="tel:+380675589405">+38 067 558 9405</a>
                  <div className={widgetSocial}>
                    <a
                      href="https://www.linkedin.com/company/agroimpex/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={linkedInSvg} alt="in" width="20" height="20" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            */
