import * as React from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { CookieBanner } from "../CookieBanner";
/**
 * start - Styles
 */
import ThemeSingle from "./ThemeSingle";
import ThemeFull from "./ThemeFull";
import ThemeGlobal from "./ThemeGlobal";
import { BackgroundGradient } from "../BackgroundGradient";
import "normalize.css";

/**
 * Component definition
 */
const Layout = ({ theme, children, isHome, className, bg = true, footerBg, isMural = false }) => {
  return (
    <>
      <ThemeGlobal />
      {theme === `single` ? <ThemeSingle /> : <ThemeFull />}

      {bg && <BackgroundGradient position="center" />}

      <Header className={className} />
      <main className={className}>{children}</main>
      <Footer isMural={isMural} className={className} isHome={isHome} bgColor={footerBg} />
      <CookieBanner />
    </>
  );
};

export default Layout;
