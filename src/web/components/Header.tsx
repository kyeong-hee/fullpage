import HeaderLogo from '../../assets/images/header_logo.png';

export default function Header (){
    return(
        <header className="w-full absolute top-0 left-0 z-10">
            <div className="w-[1232px] max-w-full py-[23px] px-[16px] mx-auto">
                <h1 className="w-[120px] max-md:w-[87px]"><img className="w-full" src={HeaderLogo} alt=""/></h1>
            </div>
        </header>
    )
}