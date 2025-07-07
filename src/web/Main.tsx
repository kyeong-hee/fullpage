import Header from './components/Header';
import VisualSec from "./components/main/VisualSec";
import StepSec from "./components/main/StepSec";
import InfoSec from "./components/main/InfoSec";
import Contact from "./components/main/Contact";
import Footer from './components/Footer';

export default function Main (){

    return(
        <div className="relative">
            <Header />
            <VisualSec />
            <StepSec />
            <InfoSec />
            <Contact />
            <Footer />
        </div>
    )
}