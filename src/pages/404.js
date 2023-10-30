import React from "react";
import ActualPageNotFound from "./page-not-found";

import { HeadApi } from "../components/HeadApi";
export const Head = () => <HeadApi page="pageNotFound" />;

const PageNotFound = () => {
  return <ActualPageNotFound />;
};

export default PageNotFound;
