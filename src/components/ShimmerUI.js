import index from "../../index.css";
import { Image, Shimmer } from "react-shimmer";

const ShimmerUI = () => {
    const imgUrl = 'https://img.freepik.com/premium-photo/pale-gray-color-background-with-gradient-shimmering-shimmer-seamless-background-generative-ai_864588-6701.jpg'
    return (
        <div className="body-container w-[90%] m-auto">
            <div className="search-bar flex justify-center border-blue-50 mb-10">
                <input className=" w-[100%] mx-7 h-8 p-5 border-inherit bg-blue-50 focus:outline rounded-lg" ></input>
            </div>
            <div className="flex flex-wrap gap-x-[9px] mx-2 pl-[40px]">
                <div className="w-[31%] h-[280px] my-8 decoration-0 text-black">
                    <Image src={imgUrl}  fallback={<Shimmer width={600} height={50} />} />
                </div>
                <div className="w-[31%] h-[280px] my-8 decoration-0 text-black">
                    <Image src={imgUrl}   fallback={<Shimmer width={600} height={50} />} />
                </div>
                <div className="w-[31%] h-[280px] my-8 decoration-0 text-black">
                    <Image src={imgUrl}   fallback={<Shimmer width={600} height={50} />} />
                </div>
                <div className="w-[31%] h-[280px] my-8 decoration-0 text-black">
                    <Image src={imgUrl}   fallback={<Shimmer width={600} height={50} />} />
                </div>
                <div className="w-[31%] h-[280px] my-8 decoration-0 text-black">
                    <Image src={imgUrl}   fallback={<Shimmer width={600} height={50} />} />
                </div>
                <div className="w-[31%] h-[280px] my-8 decoration-0 text-black">
                    <Image src={imgUrl}   fallback={<Shimmer width={100} height={50} />} />
                </div>
               
            </div>
       </div>
)}

export default ShimmerUI;