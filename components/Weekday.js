import React, { useState, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';
import { useDispatch, useSelector } from 'react-redux';
import { setWeekday } from '@/slices/weekdaySlice';

const WeekdayDisplay = () => {
  const weekdays = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const dispatch = useDispatch();
  const weekday = useSelector(state => state.weekday)['chosenWeekday'];

  useEffect(() => {
    setCurrentDayIndex(weekdays.indexOf(weekday));
  }, [weekday, weekdays]);

  const goToPreviousDay = () => {
    const newDay = (currentDayIndex === 0 ? 6 : currentDayIndex - 1);
    setCurrentDayIndex(newDay);
    dispatch(setWeekday(weekdays[newDay]));
  };

  const goToNextDay = () => {
    const newDay = (currentDayIndex === 6 ? 0 : currentDayIndex + 1);
    setCurrentDayIndex(newDay);
    dispatch(setWeekday(weekdays[newDay]));
  };


  return (
    <div className="absolute z-[401] top-3 m-auto left-0 right-0 text-center w-max bg-[#f1f3f4] rounded-3xl p-5 pl-6 pr-6 shadow-lg text-gray-800">
      <h2 className='text-gray-800'> אזורי איסוף גזם </h2>
      <h2 className='font-semibold'> {weekdays[currentDayIndex]} </h2>
      <AnimatedButton className="absolute left-1 top-6 bottom-0 h-min m-auto transition material-symbols-outlined rounded-full text-gray-800 mdcursor" defaultBgColor='bg-[#f1f3f4]' onClick={goToPreviousDay}>chevron_left</AnimatedButton>
      <AnimatedButton className="absolute right-1 top-6 bottom-0 h-min m-auto transition material-symbols-outlined rounded-full text-gray-800 mdcursor" defaultBgColor='bg-[#f1f3f4]' onClick={goToNextDay}>chevron_right</AnimatedButton>
    </div>
  );
};

export default WeekdayDisplay;
