import String from "common/String";

const ProductItemList = (props) => {
  const {item, onClickHandler} = props;
  const {fileUrl, title} = item;

  return (
    <article onClick={onClickHandler} className="bg-white rounded-2xl	">
      <div className="bg-white rounded-2xl ">
        <img src={fileUrl} alt="" className="h-full w-full md:h-[15rem] my-2" />
        <div className="px-4 py-2 text-xs border-r-4 border-solid">{title}</div>
        <div className="flex flex-row  mx-8">
          <div className=" py-2 text-xs ">{String.weight}</div>
          <div className="px-8 py-2 text-xs ">69 گرم</div>
        </div>
        <div className="divider1 mx-8"></div>
        <div className="flex flex-row   mx-8">
          <div className=" py-2 text-xs ">{String.material}</div>
          <div className="px-8  py-2 text-xs ">طلای 24 عیار</div>
        </div>
        <div className="flex flex-row  ">
          <div className="px-4 py-2 text-xs ">6,000,000 تومان</div>
        </div>
      </div>
    </article>
  );
};

export default ProductItemList;
