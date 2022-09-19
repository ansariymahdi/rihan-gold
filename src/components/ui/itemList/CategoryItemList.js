import MemoLeftArrow from "assets/icons/LeftArrow";
import String from "common/String";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const CategoryItemList = props => {
    let navigate = useNavigate();


    const [activeClass, setActiveClass] = useState(false)
    const { item, onClickHandler } = props
    const { title, subTitle, subCategories } = item

    const onClickhandle = () => {



        if (subCategories.length > 0) {
            setActiveClass(!activeClass)

        } else {
            onClickHandler()

        }


    }
    const onSubClickhandlr = item => {


        navigate(`/products`, {
            state: {
                category: item
            }
        });


    }




    return (
        <ul className=" cursor-pointer menu flex flex-row  border border-accent  rounded-2xl   px-3 py-2  mt-3 mx-2 w-full bg-bgSecondary " onClick={() => onClickhandle()}>

            <li className={activeClass ? "list active" : "list"}><a>{title}</a>
                <ul className="items">
                    {
                        subCategories.map((element, index) => {
                            return (

                                <li key={`${index}`}> <a onClick={() => onSubClickhandlr(element)}>{element.title}</a></li>

                            )
                        })
                    }

                </ul>
            </li>

            {/* 
            <div className="flex flex-row  border border-accent  rounded-2xl   px-3 py-2  mt-3 w-full bg-bgSecondary">

                <div className="flex flex-col justify-center">
                    <span className="text-center text-textColor m-1 text mr-1 text-base">{title}</span>
                </div> */}

            {/* <div className="flex flex-row flex-1 items-center justify-end">
                    <span className="text-center text-textColor m-1 text mr-1">{subTitle}</span>
                </div> */}
            {/* <div className="flex flex-1 justify-end items-center">

                    <MemoLeftArrow className="w-4 h-4" />

                </div>


            </div> */}

        </ul>


    )
}

export default CategoryItemList;