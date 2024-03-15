import { PiWalletBold } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
import Image from "next/image";



export default function Nav() {
    return (
      <>
     <div className="w-screen h-[100px] flex justify-between items-center px-[8rem]">
        <div>
            <h1 className="text-black text-[30px] font-medium">bank.c</h1>
        </div>
        <div>
            <ul className="flex text-black gap-10 font-medium text-[20px]">
                <li>
                    <a href="">Pricing</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>

        <div className="flex gap-6 items-center">
        <PiWalletBold className="text-black w-[30px] h-[30px]"/>
        <div className="relative">
           <CiBellOn className="text-black w-[30px] h-[30px]"/> 
            <div className=" w-[18px] h-[18px] bg-orange-600 flex justify-center items-center rounded-full absolute top-[-4px] right-[-3px]">
                <span>2</span>
            </div>
        </div>

        <div>
          <Image 
            src="/Cat-Hacker.jpg" 
            alt="" 
            width={1000} 
            height={1000} 
            className="w-[40px] rounded-full">
            </Image>  
        </div>
    
        </div>
     </div>
      </>
    );
  }