import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {Observer} from "gsap/Observer";
import Header from './components/Header';
import VisualSec from "./components/main/VisualSec";
import StepSec from "./components/main/StepSec";
import InfoSec from "./components/main/InfoSec";
import Contact from "./components/main/Contact";
import Footer from './components/Footer';


gsap.registerPlugin(ScrollToPlugin, Observer);

const sections = ['#section1', '#section2', '#info3-0', '#info3-1', '#info3-2', '#info3-3', '#info3-4' ,'#section4'];

export default function Main (){

    useEffect(() => {
        const sectionEls = sections.map((sel) => document.querySelector(sel)) as HTMLElement[];

        let currentIndex = 0;
        let isAnimating = false;

        const scrollToSection = (index: number) => {
            if(isAnimating || index < 0 || index >= sectionEls.length) return;

            isAnimating = true;
            currentIndex = index;

            gsap.to(window, {
                scrollTo: sectionEls[currentIndex],
                duration: 1,
                ease: 'power2.inOut',
                onComplete: () => {
                    isAnimating = false ;
                }
            });
        };

        Observer.create({
            type: 'wheel, touch, pointer',
            onDown: () => scrollToSection(currentIndex + 1),
            onUp: () => scrollToSection(currentIndex - 1),
            preventDefault: true,
        });

        //초기화 (현재 scroll 위치 기준으로 currentIndex 설정)
        const initIndex = sectionEls.findIndex((el) => {
            return window.scrollY < el.offsetTop + el.offsetHeight;
        });
        currentIndex = initIndex !== -1 ? initIndex : 0 ;

        return () => {
            Observer.getAll().forEach(o => o.kill());
        };
    }, []);

    return(
        <div className="relative">
            <Header />
            <section id="section1"><VisualSec /></section>
            <section id="section2"><StepSec /></section>
            <section id="section3"><InfoSec /></section>
            <section id="section4">
                <Contact />
                <Footer />
            </section>
        </div>
    )
}