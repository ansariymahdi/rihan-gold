import {Layout} from "@containers/products/Layout";
import Products from "@containers/products/Products";
import Head from "next/head";
import {cloneElement} from "react";

const ProductLayout = () => {
  const data = [
    {
      name: "22",
    },
    {
      name: "22",
    },
  ];
  return (
    <>
      <Head
        title=" ریحان گل"
        description="برای خرید تتر د."
        keywords={`''`}
        url="https:/
        /"
      />
    </>
  );
};

ProductLayout.getLayout = (page: React.ReactElement) => {
  return (
    <Layout>
      {page?.key ? cloneElement(page, {setTitle: ""}) : <Products />}
    </Layout>
  );
};
export default ProductLayout;
