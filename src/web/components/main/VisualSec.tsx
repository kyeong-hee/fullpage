import {useState, useEffect} from 'react';
import main from '../../../assets/images/img_web_main.png';
import apple from '../../../assets/images/ic_apple_logo.svg';
import google from '../../../assets/images/ic_google_logo.png';


export default function VisualSec() {
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(()=> setVisible(true), 100)
        return () => clearTimeout(timer)
    },[]);

    const fadeIn = 'transform transition-all duration-1000 ease-out'

    return (
        <div className="bg-[linear-gradient(180deg,_#FFFFFF_8.94%,_#A6B4DC_100%)]  h-[100vh]">
            <div className="main-wrap w-full max-w-[1200px] h-full relative mx-auto">
                <div className="title-area flex flex-col gap-[40px] absolute w-full items-center left-1/2 transform -translate-x-1/2 md:w-auto md:items-start md:left-0 md:translate-x-0 md:px-4 top-[10.81vh] md:top-[30.52vh] lg:gap-[60px] ">
                    <p className={`title text-[clamp(24px,3.2vw,70px)] font-bold text-center md:text-left ${fadeIn} delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        출발부터 도착까지<br/>
                        세심한 동행, 러너웨이
                    </p>
                    <div className={`btn-area flex flex-low gap-[4px] max-md:gap-[10px] ${fadeIn} delay-300  ${visible ? 'opacity-150 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <button className="flex flex-row justify-center items-center gap-[10px] bg-[rgba(31,33,46,0.90)] text-[#fff] py-[10px] px-[16px] text-[14px] md:text-[20px] font-medium leading-[1.23] rounded-[6px] md:py-[14px] md:px-[18px]" ><img src={apple} alt="" className="w-[19.531px] h-[24px]" />AppStore</button>
                        <button className="flex flex-row justify-center items-center gap-[10px] bg-[rgba(31,33,46,0.90)] text-[#fff] py-[10px] px-[16px] text-[14px] md:text-[20px] font-medium leading-[1.23] rounded-[6px] md:py-[14px] md:px-[18px]" ><img src={google} alt="" className="w-[24px] h-[24px]" />Google Play</button>
                    </div>
                </div>
                <div className={`img-area self-end inline-block absolute bottom-0 right-1/2 translate-x-1/2 w-full px-[9px] text-center md:text-left md:w-auto md:right-0 md:bottom-0 md:translate-x-0 ${fadeIn} delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <img src={main} alt="" className="inline-block max-h-[48vh] md:max-w-[43.69vw] md:max-h-[80.74vh]"/>
                </div>
            </div>
        </div>
    );
}