import ProductJewelryItemList from "@components/ui/itemList/ProductJewelryItemList";
import {GridCon} from "@utils/utils";
import type {NextPage} from "next";
import Head from "next/head";

const Products: NextPage = () => {
  const data = [
    {
      name: "22",
    },
    {
      name: "22",
    },
    {
      name: "22",
    },
    {
      name: "22",
    },
    {
      name: "22",
    },
    {
      name: "22",
    },
    {
      name: "22",
    },
    {
      name: "22",
    },
  ];
  return (
    <>
      <div>
        <div>
          <section>
            <GridCon colGap="4rem" rowGap="4rem">
              {data?.map((item, index) => {
                return (
                  <ProductJewelryItemList
                    onClickHandler={() => goToDetailProduct(item)}
                    item={item}
                    key={`${index}`}
                  />
                );
              })}
            </GridCon>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
