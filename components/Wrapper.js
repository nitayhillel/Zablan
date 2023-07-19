import BottomSheet from "@/components/BottomSheet"
import soonGezemStreets from "@/src/jsonReader.js"
import dynamic from 'next/dynamic'
import WeekdayDisplay from '@/components/Weekday'
import { useSelector } from 'react-redux';
import { useState } from 'react'
import HelpScreen from "./HelpScreen";
import AnimatedButton from "./AnimatedButton";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), { ssr: false })

export default function Wrapper({ Component, pageProps }) {
  const chosenWeekday = useSelector(state => state.weekday)['chosenWeekday']
  const weekday = useSelector(state => state.weekday)['weekday']
  const geolocation = useSelector(state => state.userLocation)
  console.log(geolocation)
  const gezem = soonGezemStreets(2, chosenWeekday)
  const [flyTo, setFlyTo] = useState(null)
  return <>
  <div className="absolute z-[401] h-full w-full grid grid-cols-3 grid-rows-3 gap-4 box-border pt-3 px-3 pb-16 pointer-events-none">
    <WeekdayDisplay/>
    <AnimatedButton onClick={() => setFlyTo([geolocation['latitude'], geolocation['longitude']])} style={{"font-variation-settings":  `'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48`}} className="row-start-3 col-start-3 text-center self-end justify-self-end rounded-full small:h-12 small:w-12 small:p-1.5 h-16 w-16 p-3 !text-[36px] shadow-lg text-gray-600 material-symbols-outlined pointer-events-auto">
        my_location
        </AnimatedButton>
    <HelpScreen/>
    </div>
    <LeafletMap gezem={gezem} flyto={flyTo}/>
    <BottomSheet weekday={weekday} flyto={setFlyTo} />
  </>
}
