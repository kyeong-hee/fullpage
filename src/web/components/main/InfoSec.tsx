import{useRef, useState, useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {InfoItem} from "./InfoItem";

gsap.registerPlugin(ScrollTrigger);

const itemMap = {
    info: InfoItem
}

export default function InfoSec (){
   const items = itemMap["info"]
    const refs = useRef<(HTMLElement | null)[]>([]);

   useEffect( () => {
       refs.current.forEach((ref, idx) => {
           if(!ref) return;

           gsap.fromTo(
               ref,
               {
                   opacity: 0,
                   y: 40,
               },
               {
                   opacity: 1,
                   y: 0,
                   duration: 0.8,
                   ease: 'power3.out',
                   scrollTrigger: {
                       trigger: ref,
                       start: 'top 80%',
                       toggleActions: 'play none none none',
                   },
               }
           );
       });

       return () =>{
           ScrollTrigger.getAll().forEach(trigger => trigger.kill());
       };
   }, []);





    return (
        <div className="w-[1200px] max-w-full my-[200px] mx-auto px-[16px] flex flex-col gap-[220px] max-md:my-[60px] max-md:px-[16px] max-md:gap-[100px]">
            {items.map((item, idx) => (
                <section
                    key={idx}
                    id={`info3-${idx}`}
                    ref={(el) => {
                        refs.current[idx] = el;
                    }}
                    className="h-screen flex justify-between items-center px-[16px] max-md:flex-col"
                >
                    <div className="text-center">
            <span
                className="inline-block mb-[10px] md:text-[24px] md:mb-[24px] lg:text-[32px]"
                style={{ color: '#4D5FEF', fontWeight: '700', lineHeight: '1.4' }}
            >
              {item.title}
            </span>
                        <h3
                            className="text-[20px] lg:text-[60px] md:text-[32px] lg:font-semibold leading-[1.4] lg:mb-[80px] font-bold mb-[32px]"
                            dangerouslySetInnerHTML={{ __html: item.subtitle }}
                        />
                        <p
                            className="text-[28px] leading-[1.4] max-md:text-[14px] mb-[32px] whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    </div>
                    <div className="shrink-0">
                        <img
                            className="max-w-[70vw] max-h-[70vh] md:max-w-[30.26vw]"
                            src={item.img}
                            alt=""
                        />
                    </div>
                </section>
            ))}
        </div>
    );
}