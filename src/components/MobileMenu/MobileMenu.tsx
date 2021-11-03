import { useLocalization } from "gatsby-theme-i18n";
import {
  CSSProperties,
  Fragment,
  FunctionComponent,
  SyntheticEvent,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { getRootPath } from "../../utils/getRootPath";
import AppLink from "../AppLink";
import { overlay, content, closeBtn, menuIcon } from "./MobileMenu.module.scss";

interface MobileMenuProps {
  style?: CSSProperties;
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({ style }) => {
  const { t } = useTranslation("navbar");
  const { locale } = useLocalization();
  const rootPath = getRootPath(locale);
  const [open, setOpen] = useState(false);

  const handleOpen = (event: SyntheticEvent) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = (event: SyntheticEvent) => {
    event.preventDefault();
    setOpen(false);
  };

  return (
    <>
      <button
        className={menuIcon}
        onClick={handleOpen}
        style={style}
        aria-label={t("site:menu")}
      >
        <div />
        <div />
        <div />
      </button>

      <div
        className={overlay}
        style={{ height: `${open ? 100 : 0}%` }}
        onClick={handleClose}
      >
        <a href="#" className={closeBtn}>
          &times;
        </a>

        <div className={content}>
          <AppLink to={rootPath}>{t("navbar:home")}</AppLink>
          <AppLink to="/about">{t("navbar:about")}</AppLink>
          <AppLink to="/infrastructure">{t("navbar:infrastructure")}</AppLink>
          <AppLink to="/contact">{t("navbar:contact")}</AppLink>
          <AppLink to="/catalog">{t("navbar:catalog")}</AppLink>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
