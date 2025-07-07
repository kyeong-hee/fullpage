import apple from '../../../assets/images/ic_apple_logo.svg';
import google from '../../../assets/images/ic_google_logo.png';
import kakao from '../../../assets/images/ic_kakao_logo.png';

export default function Contact (){

    return(
        <div>
            <div className="main-foot bg-[#E9EDF7]">
                <div className="main-foot-wrap flex flex-col max-w-[1232px] mx-auto gap-[32px] py-[80px] px-[16px] md:gap-[60px]">
                    <div className="txt-area text-center md:text-left">
                        <p className="mb-[32px] text-[20px] leading-[1.4] font-bold md:text-[60px] md:leading-[1.23] md:mb-[60px]">Contact us</p>
                        <p className="text-[14px] leading-[1.4] md:text-[24px]">
                            지금 바로 다운로드 받아보세요!<br/>
                            문의 사항은 카카오톡 채널로 연락주시면 <br className="md:hidden"/>
                            빠르게 답변 드리겠습니다.
                        </p>
                    </div>
                    <div className="btn-area flex flex-col items-center gap-[16px] md:w-auto md:flex-row md:gap-[16px] lg:items-start">
                        <button className="flex flex-low gap-[10px] justify-center bg-[rgba(31,33,46,0.90)] text-[#fff] text-[14px] font-medium items-center py-[10px] px-[16px] w-[158px] leading-[1.23] rounded-[6px] md:w-auto lg:text-[20px] md:py-[18px] md:px-[14px] " >
                            <img src={apple} alt="" className="w-[19.531px] h-[24px] " />
                            AppStore
                        </button>
                        <button className="flex flex-low gap-[10px] justify-center bg-[rgba(31,33,46,0.90)] text-[#fff] text-[14px] font-medium leading-[1.23] w-[158px] rounded-[6px] items-center py-[10px] px-[16px] md:w-auto lg:text-[20px] md:py-[18px] md:px-[14px]" >
                            <img src={google} alt="" className="w-[24px] h-[24px]" />
                            Google Play
                        </button>
                        <a href="https://pf.kakao.com/_BWPan" className="flex flex-low gap-[10px] justify-center bg-[#FEE502] text-[14px] font-medium leading-[1.23] items-center py-[10px] px-[16px] rounded-[6px] md:w-auto lg:text-[20px] md:py-[18px] md:px-[14px]" >
                            <img src={kakao} alt="" className="w-[24px] h-[22px]" />
                            카카오 채널 문의
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}