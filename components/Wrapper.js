import BottomSheet from "@/components/BottomSheet"
import soonGezemStreets from "@/src/jsonReader.js"
import dynamic from 'next/dynamic'
import WeekdayDisplay from '@/components/Weekday'
import { useSelector } from 'react-redux';
import { useState } from 'react'
import HelpScreen from "./HelpScreen";


const LeafletMap = dynamic(() => import("@/components/LeafletMap"), { ssr: false })

export default function Wrapper({ Component, pageProps }) {
  const chosenWeekday = useSelector(state => state.weekday)['chosenWeekday']
  const weekday = useSelector(state => state.weekday)['weekday']
  const gezem = soonGezemStreets(2, chosenWeekday)
  const [flyTo, setFlyTo] = useState(null)
  return <>
    <WeekdayDisplay />
    <LeafletMap gezem={gezem} flyto={flyTo}/>
    <BottomSheet weekday={weekday} flyto={setFlyTo} />
    <HelpScreen/>
  </>
}
