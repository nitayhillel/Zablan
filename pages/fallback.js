import React from 'react';

const fallback = () => (
    <div className={`bg-[#f1f3f4]`} dir="rtl">
        <img src="./logo512.png" alt="Zablan logo" className="w-20 h-20 block mx-auto mb-5"/>
        <h1 className="w-full text-xl text-gray-800 text-center">Zablan</h1>
        <h2 className="w-full text-lg text-gray-800 text-center">נראה שאין לכם חיבור לרשת... נסו שוב כשתהיו מחוברים</h2>
    </div>
    
);

export default fallback;