import { useState } from "react";
import Tooltip from "./Tooltip";

export default function Marker(props) {
    const [tooltip, setTooltip] = useState(false);

    const handleMarkerClick = () => {
        setTooltip(!tooltip);
    };  

    return (
        <>
        <a className="material-symbols-outlined text-green-800 cursor-pointer" onClick={handleMarkerClick}> redeem </a>
        <Tooltip show={tooltip} onClose={handleMarkerClick} title={props.title} content={props.content}/>
        </>
    );
}