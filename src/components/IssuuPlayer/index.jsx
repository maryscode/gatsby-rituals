import React from "react";

/**
 * Component definition
 */
export const IssuuPlayer = ({ mobilePDF, desktopPDF }) => {
  return (
    <>
      {desktopPDF && (
        <div className="hidden lg:block !p-0 w-full !bg-[#1e1e1e]">
          <div className="relative h-0 mx-auto w-full pt-[55%]">
            <iframe
              allow="clipboard-write"
              sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
              allowFullScreen={true}
              className="absolute border-none w-full h-full left-0 right-0 top-0 bottom-0"
              src={`https://e.issuu.com/embed.html?backgroundColor=%231e1e1e&d=${desktopPDF}&hideIssuuLogo=true&hideShareButton=true&u=petermylonas`}
            />
          </div>
        </div>
      )}
      {mobilePDF && (
        <div className="block lg:hidden !p-0 !pb-12 w-full !bg-[#1e1e1e]">
          <div className="relative h-0 mx-auto w-full pt-[365px]">
            <iframe
              allow="clipboard-write"
              sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
              allowFullScreen={true}
              className="absolute border-none w-full h-full left-0 right-0 top-0 bottom-0"
              src={`https://e.issuu.com/embed.html?backgroundColor=%231e1e1e&d=${mobilePDF}&hideIssuuLogo=true&hideShareButton=true&pageLayout=singlePage&u=petermylonas`}
            />
          </div>
        </div>
      )}
    </>
  );
};
