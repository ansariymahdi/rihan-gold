import {Layout} from "@components/layout/Layout";
import NotFound from "@containers/errors/NotFound";

const NotFoundPage = () => {
  return <NotFound />;
};

NotFoundPage.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default NotFoundPage;
