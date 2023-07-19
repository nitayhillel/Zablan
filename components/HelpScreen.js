import React, { useState, useRef } from 'react';
import AnimatedButton from './AnimatedButton';

function HelpScreen() {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const closePopup = (event) => {
        if (event.target.id === "popup-background") {
            setShowPopup(false);
        }
    };

    const handleAnimationEnd = () => {
        if (!showPopup) {
            popupRef.current.classList.remove('zoom-in');
        }
    };

    return (
        <>
            <AnimatedButton className="row-start-1 col-start-1 text-center rounded-full small:h-12 small:w-12 small:p-1.5 p-3 !text-[36px] h-16 w-16 shadow-lg text-gray-600 material-symbols-outlined pointer-events-auto" onClick={togglePopup}>help</AnimatedButton>
            {showPopup && (
                <div className="w-full h-full bg-black bg-opacity-30 z-[402] absolute top-0 pointer-events-auto" id="popup-background" onClick={closePopup}>
                    <div className={`relative top-[calc(50%-15vh)] bg-[#f1f3f4] shadow-lg rounded-xl mx-auto min-h-fit w-fit px-16 py-7 ${showPopup ? 'zoom-in' : ''}`} dir="rtl" ref={popupRef} onAnimationEnd={handleAnimationEnd}>
                        <img src="./logo512.png" alt="Zablan logo" className="w-20 h-20 block mx-auto mb-5"/>
                        <h1 className="w-full text-xl text-gray-800 text-center">Zablan</h1>
                        <h2 className="w-full text-lg text-gray-800 text-center">לחובבי שימוש חוזר, יצירה והרפתקאות</h2>
                        <div className="w-fit text-center block">
                            <div className="text-base text-gray-600 text-center">במפה תוכלו לראות רחובות מסומנים בירוק, בהם אוספים גזם וגרוטאות ביום בשבוע המצוין בחלק העליון של המסך.</div>
                            <div className="text-base text-gray-600 text-center block">ניתן לדפדף בין ימות השבוע, ולהשתמש בתפריט למטה כדי למצוא מידע על רחובות ספציפיים.</div>
                            <div className="text-base text-gray-600 text-center block">גזם וגרוטאות נאספים לרוב בשעות הבוקר המוקדמות, לכן כדאי לחפש ברחובות בהם נאסף הגזם מחר ולא היום.</div>
                        </div>
                        <div className="mt-6 text-left">
                            <div className="text-gray-400">
                                Nitay Hillel, 2023
                            </div>
                            <a href="https://github.com/nitayhillel/Zablan" target="_blank">
                                <img src="./github.svg" alt="Source code on github" className="w-7 h-7 inline-block cursor-pointer" />
                            </a>
                            <a href="https://www.linkedin.com/in/nitay-hillel-835b98180" target="_blank">
                                <img src="./linkedin.svg" alt="Linkedin profile" className="w-7 h-7 inline-block cursor-pointer" />
                            </a>
                            <a href="mailto:nithay1@gmail.com" target="_blank">
                                <img src="./email.svg" alt="Email address" className="w-7 h-7 inline-block cursor-pointer" />
                            </a>
                        </div>
                        <button className="w-fit absolute top-1 right-1 rounded-full text-gray-600 material-symbols-outlined" onClick={togglePopup}>close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default HelpScreen;
