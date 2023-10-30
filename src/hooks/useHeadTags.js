import React, { useEffect, Fragment } from "react";
import { Script } from "gatsby";
import { HeadTags } from "../constants/HeadTags";

export const useHeadTags = (page) => {
  let siteUrl = HeadTags.all.siteUrl;
  let { scripts = [], image, title, description, noIndex, slug = false } = HeadTags?.[page] ? HeadTags[page] : HeadTags["pageNotFound"];
  let pageUrl = slug ? `${siteUrl}/${slug}/` : siteUrl;
  if (title) {
    if (!Array.isArray(title)) {
      title = [title, title, title];
    } else if (Array.isArray(title) && title.length === 1) {
      title = [title[0], title[0], title[0]];
    } else if (Array.isArray(title) && title.length === 2) {
      title = [title[0], title[1], title[1]];
    }
  } else {
    title = ["Speak Up In Bronchiectasis", "Speak Up In Bronchiectasis", "Speak Up In Bronchiectasis"];
  }
  if (description) {
    if (!Array.isArray(description)) {
      description = [description, description, description];
    }
    if (!Array.isArray(description)) {
      description = [description, description, description];
    } else if (Array.isArray(description) && description.length === 1) {
      description = [description[0], description[0], description[0]];
    } else if (Array.isArray(description) && description.length === 2) {
      description = [description[0], description[1], description[1]];
    }
  } else {
    description = ["Speak Up In Bronchiectasis", "Speak Up In Bronchiectasis", "Speak Up In Bronchiectasis"];
  }
  if (image) {
    if (!Array.isArray(image)) {
      image = [image, image];
    } else if (Array.isArray(image) && image.length === 1) {
      image = [image[0], image[0]];
    }
  } else {
    image = ["/images/registration-page-og.png", "/images/registration-page-og.png"];
  }
  return (
    <>
      { page === "JodiSeenPreview" && page === "AmberSeenPreview" && <><Fragment>
        <Script
          strategy="off-main-thread"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window, document, 'script', 'dataLayer', 'GTM-MK5SSNQT');
          `,
          }}
        />
      </Fragment>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MK5SSNQT" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript></> }
      {[...scripts, ...HeadTags.all.scripts].map((script, index) => {
        return <script key={index} type="text/javascript" src={script} />;
      })}
      <title>{title[0]}</title>
      <meta name="description" content={description[0]} />
      <meta property="og:title" content={title[1]} />
      <meta property="og:description" content={description[1]} />
      {noIndex && <meta name="robots" content="noindex"></meta>}
      {!noIndex && (
        <>
          <meta property="og:image" content={`${siteUrl}${image[0]}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={`${pageUrl}`}></meta>
          <meta name="twitter:title" content={title[2]} />
          <meta name="twitter:description" content={description[2]} />
          <meta name="twitter:image" content={`${siteUrl}${image[1]}`} />
        </>
      )}
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
    </>
  );
};
