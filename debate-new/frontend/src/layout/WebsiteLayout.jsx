import { Outlet } from "react-router";

import { Footer, Header } from "../components";

const WebsiteLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default WebsiteLayout;
