import {useRef, useState, useEffect} from 'react';
import Icon_1 from '../../../assets/images/ic_img_web_001.svg'
import Icon_2 from '../../../assets/images/ic_img_web_002.svg'
import Icon_3 from '../../../assets/images/ic_img_web_003.svg'

export default function StepSec (){
    const [visible, setVisible] = useState(false);
    const wrapRef = useRef(null);

    useEffect(()=>{
        const obs = new IntersectionObserver(([entry])=>{
                if(entry.isIntersecting){
                    setVisible(true)
                    obs.unobserve(entry.target)
                }
            },
            {threshold: 0.5}
        )
        if(wrapRef.current) obs.observe(wrapRef.current)
        return() => obs.disconnect()
    }, [])

    const fadeIn = 'transform transition-all duration-700 ease-out'

    return(
        <div className="solution bg-[#CFD6E9] px-[16px] box-border">
            <p className="sub-title text-[20px] font-bold pt-[100px] pb-[40px] text-center leading-[1.4] lg:text-[54px] md:text-[32px] md:font-semibold  md:pt-[200px] md:pb-[88px] ">러너웨이는 이런 걱정을<br className="block md:hidden"/> 해결해 드립니다</p>
            <div className="solution-wrap pt-0 pb-[60px] lg:pb-[200px]" ref={wrapRef}>
                <ul className="solution flex flex-col justify-center items-center gap-[16px] lg:flex-row md:gap-[21px]">
                    <li className={`w-[328px] h-[328px] max-w-full md:w-[386px] md:h-[386px] bg-[rgba(255,255,255,0.8)] rounded-[16px] text-center ${fadeIn} delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="txt-area mb-[28px] mt-[32px] md:mt-[40px]">
                            <p className="text-[16px] leading-[1.4] md:text-[18px]">여행 프로그램 상품은 비싼데<br/>
                                세심한 케어를 받을 수 있을까?</p>
                        </div>
                        <div className="img-area w-[120px] h-[120px] mx-auto md:w-[150px] md:h-[150px]">
                            <img src={Icon_1} alt="" className="block w-full h-full"/>
                        </div>
                        <div className="desc-area mt-[30px] mb-[40px]">
                            <span className="rounded-[85px] bg-[#4D5FEF] text-[#fff] text-[16px] font-semibold leading-[1.4] py-[8px] px-[16px] md:rounded-[100px] md:text-[20px] md:py-[10px] md:px-[20px]">상품 선택부터 귀국까지 케어 </span>
                        </div>
                    </li>
                    <li className={`w-[328px] h-[328px] max-w-full md:w-[386px] md:h-[386px] bg-[rgba(255,255,255,0.8)] rounded-[16px] text-center ${fadeIn} delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="txt-area mt-[40px] mb-[28px] max-md:mt-[32px]">
                            <p className="text-[16px] leading-[1.4] md:text-[18px]">상품은 좋아보이는데<br/>
                                담당자가 전문성이 없으면 어떡하지?</p>
                        </div>
                        <div className="img-area w-[120px] h-[120px] mx-auto md:w-[150px] md:h-[150px]">
                            <img src={Icon_2} alt="" className="block w-full h-full" />
                        </div>
                        <div className="desc-area mt-[30px] mb-[40px]">
                            <span className="rounded-[85px] bg-[#4D5FEF] text-[#fff] text-[16px] font-semibold leading-[1.4] py-[8px] px-[16px] md:rounded-[100px] md:text-[20px] md:py-[10px] md:px-[20px]">담당자 프로필로 전문성 확인</span>
                        </div>
                    </li>
                    <li className={`w-[328px] h-[328px] max-w-full md:w-[386px] md:h-[386px] bg-[rgba(255,255,255,0.8)] rounded-[16px] text-center ${fadeIn} delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="txt-area mt-[40px] mb-[28px] max-md:mt-[32px]">
                            <p className="text-[16px] leading-[1.4] md:text-[18px]">다른 나라에서 문제가 생길 때<br/>
                                도움을 받을 수 있을까?</p>
                        </div>
                        <div className="img-area w-[120px] h-[120px] mx-auto md:w-[150px] md:h-[150px]">
                            <img src={Icon_3} alt="" className="block w-full h-full" />
                        </div>
                        <div className="desc-area mt-[30px] mb-[40px] max-md:mt-[26px]">
                            <span className="rounded-[85px] bg-[#4D5FEF] text-[#fff] text-[16px] font-semibold leading-[1.4] py-[8px] px-[16px] md:rounded-[100px] md:text-[20px] md:py-[10px] md:px-[20px]">현지 헬퍼와의 채팅 24시간 대기</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}