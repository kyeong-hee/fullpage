import{useRef, useState, useEffect} from 'react';
import {InfoItem} from "./InfoItem";

const itemMap = {
    info: InfoItem
}

export default function InfoSec (){
   const items = itemMap["info"]

    const[visible, setVisible] = useState(false);
   const wrapRef = useRef(null);



    return(
        <section className="w-full max-w-full my-[60px] px-[16px] flex flex-col gap-[100px] md:w-[1200px] mx:mx-auto md:gap-[220px]">
            {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center max-md: flex-col">
                    <div className="text-center">
                        <span className="inline-block mb-[10px] md:text-[24px] md:mb-[24px] lg:text-[32px]" style={{color:"#4D5FEF", fontWeight:"700", lineHeight:"1.4"}}>{item.title}</span>
                        <h3
                            className="text-[20px] lg:text-[60px] md:text-[32px] lg:font-semibold leading-[1.4] lg:mb-[80px] font-bold mb-[32px]"
                            dangerouslySetInnerHTML={{ __html: item.subtitle }}
                        />
                        <p
                            className="text-[28px] leading-[1.4] max-md:text-[14px] mb-[32px] whitespace-pre-line"
                            dangerouslySetInnerHTML={{__html: item.text}}
                        />
                    </div>
                    <div className="shrink-0">
                        <img className="max-w-[70vw] max-h-[70vh] md:max-w-[30.26vw]" src={item.img} alt=""/>
                    </div>
                </div>
            ) )}


        </section>
    )
}