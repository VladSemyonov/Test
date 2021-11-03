import { FunctionComponent, ReactNode } from "react";
import { LocalizedLink } from "gatsby-theme-i18n";

interface AppLinkProps {
  to: string;
  language?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

const AppLink: FunctionComponent<AppLinkProps> = ({
  to,
  language,
  children,
  className,
  id,
}) => (
  <LocalizedLink id={id} to={to} language={language} className={className}>
    {children}
  </LocalizedLink>
);

export default AppLink;
