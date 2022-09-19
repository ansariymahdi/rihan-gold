import MemoArrowLeftSlider from "assets/icons/ArrowLeftSlider";
import AppConstants from "constants/AppConstants";
import { useEffect, useState } from "react";
import { changeDateToJalali } from "utility";
import String from "../../../common/String";
import Trash from './../../../assets/icons/Trash'


const OrderItemList = props => {


    const [statusClass, setStatusClass] = useState()
    const [statusText, setStatusText] = useState()
    const { item, onClickHandler } = props
    const { publicOrderId, status, createdOn } = item




    const getDate = () => {

        return changeDateToJalali(createdOn)
    }
    useEffect(() => {
        setStatus()

    }, [])

    const setStatus = () => {

        switch (status) {
            case AppConstants.PENDING:
                setStatusClass("bg-warning")
                setStatusText(String.pending)

                break;
            case AppConstants.REJECT:
                setStatusClass("bg-red")
                setStatusText(String.reject)


                break;

            case AppConstants.ACCEPT:
                setStatusClass("bg-green")
                setStatusText(String.accept)


                break;

            case AppConstants.COMPLETE:
                setStatusClass("bg-blue")
                setStatusText(String.complete)


                break;

            default:
                break;
        }

    }

    return (



        <div className="flex  flex-1  flex-1 flex-col  border border-solid border-borderLightGray p-2 my-2 divide-y divide-solid  divide-borderLightGray mx-0 sm:mx-2">


            <div className="flex justify- flex-row my-2">
                <div className="flex flex-col justify-center mx-2">

                    <span className="text-xs">{getDate()}</span>
                    {/* <span className="text-xs">{String.neckband}</span> */}


                </div>
                <div className="flex flex-1 flex-row justify-end  ">
                    <div className="flex flex-col justify-between items-center  ">

                        <div className="flex  flex-row  ">
                            <span className="flex  flex-row  text-xs items-center text-white  bg-black px-2 py-2" onClick={onClickHandler}>
                                {String.view}
                                <MemoArrowLeftSlider className="stroke-white" />
                            </span>

                        </div>
                    </div>


                </div>


            </div>

            <div className="flex flex-col py-2">

                <div className="flex flex-col justify-center">
                    <span className="text-xs">{publicOrderId}</span>
                    <span className={`${statusClass} text-xs text-white flex self-baseline	p-1 my-2`}>{statusText}</span>

                    {/* <span className="text-[0.4rem] md:text-xs">{String.lorem}</span> */}


                </div>

            </div>


        </div>







    )
}

export default OrderItemList;