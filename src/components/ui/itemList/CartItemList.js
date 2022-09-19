import { useEffect, useState } from "react";
import String from "../../../common/String";
import Trash from './../../../assets/icons/Trash'


const CartItemList = props => {
    const [countNumber, setCountNumber] = useState()


    const { item, onClickHandler, onClickRemoveHandler } = props
    const { productName, count, productFileUrl, description, fileUrl } = item


    const increaseValue = () => {
        // console.log(countNumber)
        let a = countNumber;
        a = a + 1
        setCountNumber(a)

        onClickHandler(item, a)

    }
    const decreaseValue = () => {
        // console.log(countNumber)
        let a = countNumber;
        a = a - 1
        if (a >= 0) {
            setCountNumber(a)
            onClickHandler(item, a)

        }


    }
    useEffect(() => {
        setCountNumber(Number.parseInt(count))




    }, [])



    return (



        <div className="flex flex-col  border border-solid border-borderLightGray p-2 my-2 divide-y divide-solid  divide-borderLightGray mx-0 sm:mx-2">


            <div className="flex justify- flex-row my-2">
                <div className="flex flex-col justify-center mx-2">
                    <img src={productFileUrl} alt="" className="h-28  w-28 " />
                    <div className="flex  flex-row items-center justify-between border border-solid border-borderLightGray my-2">
                        {/* <span className="border border-solid border-borderLightGray px-2">
                                {count}
                            </span> */}
                        <div className="value-button" onClick={() => increaseValue()} >+</div>

                        <span className="flex justify-center text-xs px-2 w-[2rem]">
                            {countNumber}
                        </span>
                        <div className="value-button" onClick={() => decreaseValue()}  >-</div>

                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-between my-4 mr-2">

                    <span className="text-xs">{productName}</span>
                    {/* <span className="text-xs">{String.neckband}</span> */}
                    <div className="flex flex-row   mt-2">



                        <div className="flex flex-col justify-center ">

                            <div className="flex flex-row justify-center  ">

                                <Trash className="stroke-red justify-center w-5 h-5 " onClick={onClickRemoveHandler} />
                                <span className="text-xs mt-1">{String.remove}</span>

                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="flex flex-1 flex-row justify-end  mt-2">



                </div> */}


            </div>

            <div className="flex flex-col py-2">

                <div className="flex flex-row ">
                    <div className="flex flex-row  ">
                        <img src={fileUrl} alt="" className="h-16  w-16 " />

                    </div>

                    <span className="text-[0.4rem] md:text-xs mx-2">{description ? description : String.no_description}</span>


                </div>

            </div>


        </div>






    )
}

export default CartItemList;