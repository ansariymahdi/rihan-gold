// import String from "../../../common/String";

import Strings from "src/common/Strings";
import styled from "styled-components";
import {SimpleLabel} from "../labels/SimpleLabel";

const ProductJewelryItemList: React.FC<{
  item: any;
  onClickHandler?: () => void;
}> = (props) => {
  const {item, onClickHandler} = props;
  const {fileUrl} = item;
  // console.log(fileUrl)

  return (
    <ProductArticle onClick={onClickHandler}>
      <div className="bg-white rounded-2xl ">
        <img
          src={
            "https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg"
          }
          alt=""
          className="img-product  h-full w-full md:h-[15rem] my-2"
        />
        <div className="px-4 py-2 text-xs border-r-4 border-solid">{"طلا"}</div>
        <div className="flex flex-row  mx-8">
          <SimpleLabel variant="tertiary">{Strings.weight}</SimpleLabel>
          <div className="px-8 py-2 text-xs ">69 گرم</div>
        </div>
        <div className="divider1 mx-8"></div>
        <div className="flex flex-row   mx-8">
          <SimpleLabel variant="tertiary">{Strings.material}</SimpleLabel>
          <div className="px-8  py-2 text-xs ">طلای 24 عیار</div>
        </div>
        <div className="flex flex-row  ">
          <div className="px-4 py-2 text-xs ">6,000,000 تومان</div>
        </div>
      </div>
      {/* <img
        src={
          "https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg"
        }
        alt=""
        className="img-product "
      /> */}
      {/* <h3 className="p-4">{String.neckband}</h3> */}
    </ProductArticle>
  );
};

const ProductArticle = styled.article`
  /* box-shadow: 0px 6px 26px 0px #101e730f; */
  /* padding: 1rem; */
  /* border-radius: 10px; */
`;

export default ProductJewelryItemList;
