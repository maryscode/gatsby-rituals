import * as React from "react";
import { IssuuPlayer } from "../components/IssuuPlayer";
import Layout from "../components/Layouts/Layout";
import { HeadApi } from "../components/HeadApi";
export const Head = () => <HeadApi page="AmberSeenPreview" />;

const AmberSeenPreview = () => {
  return (
    <>
      <Layout theme={`single`} className="page-book" bg={false}>
      <IssuuPlayer mobilePDF="seen_book_-_full_layout_-_v34_-_amb_78b226560a6674" desktopPDF="seen_book_-_full_layout_-_v34_-_amber_digital_page" />
      </Layout>
    </>
  );
};

export default AmberSeenPreview;
