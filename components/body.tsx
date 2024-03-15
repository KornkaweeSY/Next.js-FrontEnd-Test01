
import Image from "next/image";


export default function Body() {
    return (
        <>
            <div className="flex">
                <div className="w-1/3 p-[8rem]">
                    <div>
                        <p className="text-violet-600 text-4xl font-semibold pb-5 "> * 30 Days free trial</p>
                        <p className="text-black text-6xl font-bold pb-5"> The Best
                            <p className="py-3"> Payments </p>
                            <p> Experience </p>
                        </p>
                        <p className="text-black text-[15px] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </p>

                        <div>
                            <div className="mt-5 flex border-l-2 text-black border-t-2 border-b-2 border-black rounded-full justify-between">
                                <input type="text" placeholder="Enter your Email" className="focus:outline-none border-none text-black rounded-l-full w-[200px] h-[40px] p-2 text-[15px]" />
                                <button className="bg-black text-white w-[120px] h-[40px] rounded-full">get started</button>
                            </div>
                            <div className="pt-[10rem]">
                                <p className="text-black py-5">Send Money to</p>
                                <div className="flex gap-3">
                                    <div className="bg-black drop-shadow-md rounded-lg w-[80px] h-[100px] flex flex-col justify-center items-center text-center">
                                        <div className="bg-white w-[35px] h-[35px] rounded-full flex justify-center items-center">
                                            <p className="text-black text-[30px]">+</p>
                                        </div>
                                        <p className="text-[11px] pt-2">Add new contact</p>
                                    </div>
                                    <div className="bg-white drop-shadow-md rounded-lg w-[80px] h-[100px] flex flex-col justify-center items-center text-center">
                                        <div className="bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center">
                                            <Image
                                                src="/Cat-Hacker.jpg"
                                                alt=""
                                                width={100}
                                                height={1000}
                                                className="w-[40px] rounded-full">
                                            </Image>
                                        </div>
                                        <p className="text-[11px] pt-2  text-black">Jason Star</p>
                                    </div>
                                    <div className="bg-white drop-shadow-md rounded-lg w-[80px] h-[100px] flex flex-col justify-center items-center text-center">
                                        <div className="bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center">
                                            <Image
                                                src="/Cat-Hacker.jpg"
                                                alt=""
                                                width={100}
                                                height={1000}
                                                className="w-[40px] rounded-full">
                                            </Image>
                                        </div>
                                        <p className="text-[11px] pt-2 text-black">Melody Ass</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="w-full h-full flex justify-center items-end">
                        <div className="bg-[#98ABB0] w-[400px] h-[700px] rounded-t-full">
                            <div className="w-[1300px] h-[550px] absolute top-100 right-[450px]">
                                <Image
                                    src="/phone2.png"
                                    alt=""
                                    width={10000}
                                    height={10000}>
                                </Image>
                                <div className=" gap-5 w-[250px] h-[100px] drop-shadow-lg bg-white flex justify-center items-center rounded-[20px] absolute top-60 left-[200px]">
                                    <div>
                                        <Image
                                            src="/Cat-Hacker.jpg"
                                            alt=""
                                            width={100}
                                            height={1000}
                                            className="w-[40px] rounded-full">
                                        </Image>
                                    </div>
                                    <div className="flex flex-col text-black" >
                                        <span className="font-bold">Dog</span>
                                        <span>Cat meme</span>
                                    </div>
                                    <div>
                                        <p className=" text-black">-$500</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[1300px] h-[550px] absolute top-[400px] right-[900px]">

                                <div className="w-[250px] h-[100px] drop-shadow-lg bg-white items-center rounded-[20px] p-5 absolute top-0 right-0">
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-black font-semibold">Payment method</p>
                                        </div>
                                        <div>
                                            <div className="bg-yellow-400 w-[25px] h-[25px] rounded-full flex justify-center items-center">
                                                <p className="text-white text-[15px] flex justify-center">+</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-10 pt-5">
                                        <div>
                                            <Image
                                                src="/Cat-Hacker.jpg"
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="w-[20px] rounded-lg">
                                            </Image>
                                        </div>
                                        <div>
                                            <p className="text-black font-semibold">***5432</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 p-[8rem]">
                    <div className="flex">
                        <Image
                            src="/Cat-Hacker.jpg"
                            alt=""
                            width={1000}
                            height={1000}
                            className="w-[100px] rounded-full">
                        </Image>
                    </div>
                    <div className="text-black text-4xl pb-5">
                        
                        <p className="pb-2 pt-8 font-medium"> World Class </p>
                        <div className=" flex ">

                        
                        <p className="pb-40 font-medium"> Experts </p>

                        <div className="grid-cols-12  grid relative">
                            <Image
                                src="/Cat-Hacker.jpg"
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-[40px] h-[40px] rounded-full col-[6/-1] row-start-1"
                            />
                            <Image
                                src="/Cat-Hacker.jpg"
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-[40px] h-[40px] rounded-full col-[1/_span_8] row-start-1"
                            />
                        </div>
                        
                        </div>
                        {/* <div className="grid-cols-12  grid relative">
                                <Image
                                    src="/Cat-Hacker.jpg"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className="w-[40px] h-[40px] rounded-full col-[5/-1] row-start-1"
                                />
                                <Image
                                    src="/Cat-Hacker.jpg"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className="w-[40px] h-[40px] rounded-full col-[1/_span_8] row-start-1"
                                />
                            </div> */}
                        {/* <div className=" flex justify-center  ">
                        <Image
                            src="/Cat-Hacker.jpg"
                            alt=""
                            width={1000}
                            height={1000}
                            className="w-[40px] rounded-full">
                        </Image>
                        <Image
                            src="/Cat-Hacker.jpg"
                            alt=""
                            width={1000}
                            height={1000}
                            className="w-[40px] rounded-full">
                        </Image>
                        </div> */}

                        <p className="pb-2 font-bold text-6xl">12k+</p>
                        <p className="pb-16 text-sm">User already Register and <br />siging up for using it.</p>
                        <p className="pb-2 font-bold text-6xl">0%</p>
                        <p className="text-sm">zoe-percen free to ny <br /> transaction for  your daily needs</p>
                    </div>
                </div>
            </div>
        </>
    );
}