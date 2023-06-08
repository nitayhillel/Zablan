import React, { useState } from 'react';

const AnimatedButton = ({ className, style, children, defaultBgColor = "bg-[#f1f3f4]", onClick}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        onClick()

        // Reset the button color after a delay
        setTimeout(() => {
            setIsClicked(false);
        }, 500);
    };

    return (
        <div
            style={style?style:{}}
            className={`transition-colors mdcursor cursor-pointer ${isClicked ? 'bg-gray-200' : defaultBgColor} ${className}`}
            onClick={handleClick}
        >
            {children}
        </div>
    );
};

export default AnimatedButton;
