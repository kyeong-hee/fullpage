import FooterLogo from '../../assets/images/header_logo.png';

export default function Footer(){

    return(
        <footer className="bg-[#CFD6E9]">
            <div className="footer-wrap max-w-[1230px] mx-auto pt-[60px] pb-[100px] px-[16px] md:pt-[120px] md:pb-[126px]">
                <div className="logo-area mb-[60px] w-[120px] max-md:w-[87px] max-md:mb-[32px]">
                    <img src={FooterLogo} alt="" className="w-[100%]" />
                </div>
                <div className="company-area mb-[80px] flex flex-col gap-[10px] text-[20px] leading-[1.4] max-md:text-[14px] max-md:mb-[32px]">
                    <p>러너웨이 주식회사</p>
                    <p>이메일</p>
                </div>
                <ul className="terms-area text-[20px] flex flex-row max-md:text-[14px]">
                    <li className="after:content-['|'] after:mx-[10px]"><a href="">개인정보처리방침</a></li>
                    <li><a href="">이용약관</a></li>
                </ul>
            </div>
        </footer>
    )
}