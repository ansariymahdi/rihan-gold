import MemoLeftArrow from "assets/icons/LeftArrow";
import String from "common/String";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const FaqItemList = props => {
    let navigate = useNavigate();


    const [activeClass, setActiveClass] = useState(false)
    const { item, onClickHandler } = props
    const { title, description } = item

    const onClickhandle = () => {



        // if (subCategories.length > 0) {
        setActiveClass(!activeClass)

        // } 
        // else {
        //     onClickHandler()

        // }


    }


    return (
        <ul className=" cursor-pointer menu flex flex-row flex-1 border border-solid border-borderLightGray    px-6 py-2  mt-3 mx-2 !w-full  " onClick={() => onClickhandle()}>

            <li className={activeClass ? "list active" : "list" + "   !mx-4 !px-4"}><a>{title}</a>
                <ul className="items">
                    {/* {
                        subCategories.map((element, index) => {
                            return ( */}
                    <div className="text-textColorLight !mx-4" dangerouslySetInnerHTML={{ __html: description }} />

                    {/* // <li key={`${index}`}> <a onClick={() => onSubClickhandlr(element)}>{element.title}</a></li> */}

                    {/* )
                        })
                    } */}

                </ul>
            </li>


        </ul>


    )
}

export default FaqItemList;