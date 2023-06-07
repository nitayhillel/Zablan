import { useState, useEffect } from "react";
import GeoJSON from "@/src/gezem_rehovot_linestrings_geojson.json"
import { addDaysUntil } from "@/src/jsonReader";
import AnimatedButton from "./AnimatedButton";

export default function BottomSheet(props) {
    const jsonData = addDaysUntil(GeoJSON.features, props.weekday)

    const [sheet, setBottomSheet] = useState(false);

    const handleArrowClick = () => {
        setBottomSheet(!sheet);
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
        const mapping = {0: "היום", 1: "מחר", 2: "בעוד יומיים"};
        if (mapping[n]) {
            return mapping[n]
        }
        return `בעוד ${n} ימים`
    }

    const soonGezemStreets = jsonData.map((record, index) => (
        <AnimatedButton key={index} className="transition-all ease-in-out duration-250 relative font-sans font-medium bg-white mb-1.5 mx-0 text-center w-full" onClick={() => handleStreetClick(record.geometry)}>
          <h1 className="text-lg text-gray-800" dir="auto">{record.properties.name}</h1>
          <p className="text-sm text-gray-600">{`איסוף גזם ביום ${record.properties.gezem}`}</p>
          <p className="text-sm  text-gray-600">{stringFromDayNumber(record.properties.daysUntilGezem)}</p>
        </AnimatedButton>
      ))

    return (
        <div className={`transition-all ease-in-out duration-500 h-[50vh] bg-[#f1f3f4] shadow-[0_-5px_10px_0px_rgba(0,0,0,0.14)] w-screen text-8xl text-black fixed bottom-0 rounded-xl ${!sheet && "translate-y-[calc(50vh-30px)]"}`}>
            <button className={`transition-transform ease-in-out duration-500 material-symbols-outlined mdcursor mt-3 top-0 left-1/2 right-1/2 text-center absolute text-gray-500 ${!sheet?"-rotate-90":"rotate-90"}`} onClick={handleArrowClick}>arrow_forward_ios</button>
            <div className={`mt-16 overflow-scroll h-full scrollbar-hide`}>
            {soonGezemStreets}
            </div>
        </div>
    );
}