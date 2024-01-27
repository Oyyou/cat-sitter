import { Outlet } from "react-router-dom";
import { Layout } from "components";
import { HelmetProvider } from "react-helmet-async";

const Root = () => {

  return (
    <HelmetProvider>
      <Layout>
        <Outlet />
      </Layout>
    </HelmetProvider>
  );
};

export default Root