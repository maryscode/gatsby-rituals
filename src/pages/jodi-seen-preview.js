import * as React from "react";
import { IssuuPlayer } from "../components/IssuuPlayer";
import Layout from "../components/Layouts/Layout";
import { HeadApi } from "../components/HeadApi";
export const Head = () => <HeadApi page="JodiSeenPreview" />;

const JodiSeenPreview = () => {
  return (
    <>
      <Layout theme={`single`} className="page-book" bg={false}>
        <IssuuPlayer mobilePDF="seen_book_-_full_layout_-_v34_-_jod_28f43ce0f6e5cf" desktopPDF="seen_book_-_full_layout_-_v34_-_jodi_digital_pages" />
      </Layout>
    </>
  );
};

export default JodiSeenPreview;
