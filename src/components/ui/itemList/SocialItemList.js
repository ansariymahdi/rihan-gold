import MemoArrowLeftSlider from "assets/icons/ArrowLeftSlider";
import React from "react";



const SocialItemList = props => {
    const { item, children, onClickHandler } = props;

    const { title, } = item
    // console.log(title)

    return (
        // <Link to={link && link}>

        <div className="    cursor-pointer   border border-solid border-borderLightGray mx-2 my-2 " onClick={onClickHandler}>

            <div className=" p-3 px-5 h-full flex flex-col justify-center  ">
                {/* {children} */}
                <span className=" Mui-selected text-textColor m-1 text-xs mr-1">{title}</span>

            </div>
            {/* <div className="flex flex-row    w-full  bg-bgSecondary">
                <a className=" inline-flex flex-col  " >
                  


                </a>


            </div> */}

        </div>

        // </Link>


    )
}

export default SocialItemList;