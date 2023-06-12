import { useState, useRef } from "react";
import GeoJSON from "@/src/gezem_rehovot_linestrings_geojson.json"
import { addDaysUntil, sortByProperty } from "@/src/jsonReader";
import AnimatedButton from "./AnimatedButton";

export default function BottomSheet(props) {
    let jsonData = addDaysUntil(GeoJSON.features, props.weekday)
    jsonData = sortByProperty(jsonData, "daysUntilGezem");

    const [sheet, setBottomSheet] = useState(false);

    const handleArrowClick = () => {
        setBottomSheet(!sheet);
        if (!sheet) { searchRef.current.focus() };
    };

    const handleStreetClick = (streetGeometry) => {
        if (streetGeometry.type == "LineString") {
            props.flyto(streetGeometry.coordinates[0])
        }
        else {
            props.flyto(streetGeometry.coordinates[0][0])
        }
    };

    const stringFromDayNumber = (n) => {
        const mapping = { 0: "היום", 1: "מחר", 2: "בעוד יומיים" };
        if (mapping[n]) {
            return mapping[n]
        }
        return `בעוד ${n} ימים`
    }

    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = jsonData.filter(record => {
        return record.properties.name.includes(searchTerm.toLowerCase());
    });

    const searchRef = useRef(null);

    const soonGezemStreets = filteredData.map((record, index) => (
        <AnimatedButton key={index} defaultBgColor="bg-white" className="transition-all ease-in-out duration-250 relative font-sans font-medium mb-1.5 mx-0 text-center w-full" onClick={() => handleStreetClick(record.geometry)}>
            <h1 className="text-lg text-gray-800" dir="auto">{record.properties.name}</h1>
            <p className="text-sm text-gray-600">{`איסוף גזם ביום ${record.properties.gezem}`}</p>
            <p className="text-sm  text-gray-600">{stringFromDayNumber(record.properties.daysUntilGezem)}</p>
        </AnimatedButton>
    ))

    return (
        <div className={`transition-all ease-in-out duration-500 h-[50vh] bg-[#f1f3f4] shadow-[0_-5px_10px_0px_rgba(0,0,0,0.14)] w-screen text-8xl text-black fixed bottom-0 rounded-xl ${!sheet && "translate-y-[calc(50vh-50px)]"}`}>
            <button className={`transition-transform ease-in-out duration-500 material-symbols-outlined mdcursor mt-3 top-0 left-1/2 right-1/2 text-center absolute text-gray-500 ${!sheet ? "-rotate-90" : "rotate-90"}`} onClick={handleArrowClick}>arrow_forward_ios</button>
            <div className="bg-red-500 mx-auto w-[33vw] min-w-[300px]">
                <i className="material-symbols-outlined text-4xl h-12 text-gray-500 select-none">search</i>
                <input ref={searchRef} className="w-[calc(100%-36px)] h-12 mt-16 mb-2 rounded-lg text-xl pl-14 pr-5" type="text" placeholder="" dir="auto" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className={`mt-8 overflow-scroll h-full scrollbar-hide`}>
                {soonGezemStreets}
            </div>
        </div>
    );
}