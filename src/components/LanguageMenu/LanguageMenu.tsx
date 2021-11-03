import { CSSProperties, FunctionComponent } from "react";
import { useLocation } from "@reach/router";
import { useLocalization } from "gatsby-theme-i18n";
import { LOCALE_RU, LOCALE_UA } from "../../../app-config";
import flagRuPng from "../../../static/img/flags/ru.png";
import flagUaPng from "../../../static/img/flags/ua.png";
import arrowDropDownSvg from "../../../static/svg/arrow_drop_down.svg";
import AppLink from "../AppLink";
import {
  box,
  arrowIcon,
  triangle,
  triangleBox,
  flag,
} from "./LanguageMenu.module.scss";

interface LanguageMenuProps {
  style?: CSSProperties;
}

const LanguageMenu: FunctionComponent<LanguageMenuProps> = ({ style }) => {
  const { pathname } = useLocation();
  const { locale } = useLocalization();

  let relativeUrl = "";
  if (pathname !== "/" && pathname !== `/${locale}`) {
    relativeUrl = pathname.startsWith(`/${locale}/`)
      ? pathname.substr(`/${locale}/`.length - 1)
      : pathname;
  }

  const getCurrentFlag = (): string | undefined => {
    switch (locale) {
      case LOCALE_RU:
        return flagRuPng;

      case LOCALE_UA:
        return flagUaPng;

      default:
        return undefined;
    }
  };

  return (
    <div className={box} style={style}>
      <ul>
        <li className="flex">
          <img
            src={getCurrentFlag()}
            alt=""
            width="23"
            height="17"
            aria-hidden="true"
            className={flag}
          />
          <img
            src={arrowDropDownSvg}
            alt=""
            width="24"
            height="24"
            aria-hidden="true"
            className={arrowIcon}
          />
          <div className={triangleBox}>
            <div className={triangle} />
          </div>
          <ul>
            <AppLink to={relativeUrl || "/"} language={LOCALE_RU}>
              <li className="flex">
                <img
                  className={flag}
                  style={{ marginTop: "5px" }}
                  src={flagRuPng}
                  alt=""
                  width="23"
                  height="17"
                />
                <span>Русский</span>
              </li>
            </AppLink>

            <AppLink to={relativeUrl || "/ua"} language={LOCALE_UA}>
              <li className="flex">
                <img
                  className={flag}
                  style={{ marginTop: "5px" }}
                  src={flagUaPng}
                  alt=""
                  width="23"
                  height="17"
                />
                <span>Українська</span>
              </li>
            </AppLink>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LanguageMenu;
