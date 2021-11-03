import { FunctionComponent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import logo from "../../../static/svg/logo.svg";
import AppLink from "../AppLink";

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = () => {
  const { t } = useTranslation("navbar");
  const [navbarTop, setNavbarTop] = useState(0);

  function setActiveLink(path: string): void {
    const pagesList: HTMLCollection =
      document.getElementsByClassName("animated-link");
    if (path === "/") {
      for (const item of pagesList) {
        if (item.id === "home") {
          item.classList.add("active-link");
        }
      }
    } else {
      for (const item of pagesList) {
        if (path.includes(item.id)) item.classList.add("active-link");
        else item.classList.remove("active-link");
      }
    }
  }

  useEffect(() => {
    setActiveLink(window.location.pathname);
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos < currentScrollPos && currentScrollPos > 120) {
        setNavbarTop(-130);
      } else {
        setNavbarTop(0);
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <div className="relative pt-24">
      <div
        className="flex fixed shadow-xl lg:shadow-none w-full top-0 h-24 justify-center z-50 border-t-4 border-blue-500 bg-gray-400"
        id="nav-bar"
        style={{
          transition: "all .25s ease-in-out",
          top: `${navbarTop}px`,
        }}
      >
        <div className="flex h-full text-black container items-center justify-between pl-2">
          <div className="h-full">
            <AppLink to="/">
              <img
                alt="logo"
                width="140"
                height="70"
                className="h-full w-auto pt-4"
                src={logo}
              />
            </AppLink>
          </div>
          <div className="flex items-center">
            <div className="w-auto hidden lg:flex">
              <AppLink to="/" className="mx-2 text-xl flex items-center">
                <div id="home" className="py-2 animated-link">
                  <span>{t("navbar:home")}</span>
                </div>
              </AppLink>
              <div className="relative mx-2 text-xl flex items-center h-auto withSubmenu">
                <AppLink id="about" to="/about" className="animated-link py-2">
                  {t("navbar:about")}
                </AppLink>
                <div className="triangleBox">
                  <div className="triangle" />
                </div>
                <ul className="absolute top-16 w-auto bg-white text-lg overflow-hidden">
                  <AppLink to="/about#history">
                    <li>{t("navbar:history")}</li>
                  </AppLink>
                  <AppLink to="/about#article6">
                    <li>{t("navbar:technology")}</li>
                  </AppLink>
                  <AppLink to="/about#managment">
                    <li>{t("navbar:managment")}</li>
                  </AppLink>
                  <AppLink to="/about#quality">
                    <li>{t("navbar:quality")}</li>
                  </AppLink>
                  <AppLink to="/about#testimonials2">
                    <li>{t("navbar:clients")}</li>
                  </AppLink>
                  <AppLink to="/about#testimonials3">
                    <li>{t("navbar:testimonials")}</li>
                  </AppLink>
                </ul>
              </div>
              <div className="relative mx-2 text-xl flex items-center h-auto withSubmenu">
                <AppLink
                  id="infrastructure"
                  to="/infrastructure"
                  className="py-2 animated-link"
                >
                  <span>{t("navbar:infrastructure")}</span>
                </AppLink>
                <div className="triangleBox">
                  <div className="triangle" />
                </div>
                <ul className="absolute top-16 w-auto bg-white text-lg overflow-hidden">
                  <AppLink to="/infrastructure#machinery1">
                    <li>{t("navbar:overview")}</li>
                  </AppLink>
                  <AppLink to="/infrastructure#processes">
                    <li>{t("navbar:prod")}</li>
                  </AppLink>
                  <AppLink to="/infrastructure#processes2">
                    <li>{t("navbar:prof")}</li>
                  </AppLink>
                </ul>
              </div>
              {/* <AppLink to="/apparel" className="mx-2 text-xl flex items-center">
                <div id="apparel" className="py-2 animated-link">
                  <span>{t("navbar:apparel")}</span>
                </div>
              </AppLink> */}
              <AppLink to="/contact" className="mx-2 text-xl flex items-center">
                <div id="contact" className="py-2 animated-link">
                  <span>{t("navbar:contact")}</span>
                </div>
              </AppLink>
              <div className="relative mx-2 text-xl flex items-center h-auto withSubmenu">
                <AppLink
                  id="catalog"
                  to="/catalog"
                  className="py-2 animated-link"
                >
                  <span>{t("navbar:catalog")}</span>
                </AppLink>
                <div className="triangleBox">
                  <div className="triangle" />
                </div>
                <ul className="absolute top-16 w-auto bg-white text-lg overflow-hidden">
                  <AppLink to="/catalog/clothes">
                    <li>{t("navbar:clothes")}</li>
                  </AppLink>
                  <AppLink to="/catalog/jersey">
                    <li>{t("navbar:jersey")}</li>
                  </AppLink>
                  <AppLink to="/catalog/overalls">
                    <li>{t("navbar:specialcloth")}</li>
                  </AppLink>
                  <AppLink to="/catalog/textile">
                    <li>{t("navbar:textile")}</li>
                  </AppLink>
                </ul>
              </div>
            </div>
            <LanguageMenu />
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
