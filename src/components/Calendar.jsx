import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isWithinInterval,
  endOfWeek,
} from "date-fns";

const Calendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [fertilityCycleDays, setFertilityCycleDays] = useState(7); // Default fertility cycle days

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleFertilityCycleDaysChange = (e) => {
    const cycleDays = parseInt(e.target.value);
    setFertilityCycleDays(cycleDays);
  };

  const renderCalendar = () => {
    if (!selectedStartDate || !fertilityCycleDays || fertilityCycleDays <= 0)
      return null;

    const currentDate = new Date();
    const startDate = addDays(selectedStartDate, fertilityCycleDays);
    const endDate = addDays(startDate, 3);
    const fertilityStartDate = addDays(endDate, 4);
    const fertilityEndDate = addDays(fertilityStartDate, 6);

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDateOfWeek = startOfWeek(monthStart);
    const endDateOfWeek = addDays(startOfWeek(addDays(monthEnd, 1)), -1);

    const calendar = [];
    let day = startDateOfWeek;

    while (day <= endDateOfWeek) {
      const isSameMonthDay = isSameMonth(day, monthStart);
      let backgroundColor = "";

      if (isSameMonthDay) {
        if (isWithinInterval(day, { start: startDate, end: endDate })) {
          backgroundColor = "red";
        } else if (
          isWithinInterval(day, {
            start: fertilityStartDate,
            end: fertilityEndDate,
          })
        ) {
          backgroundColor = "green";
        }
      }

      const calendarDay = {
        date: day,
        backgroundColor,
      };

      calendar.push(calendarDay);
      day = addDays(day, 1);
    }

    return calendar.map((calendarDay) => (
      <div
        key={calendarDay.date}
        className={`p-2 border border-gray-200`}
        style={{ background: calendarDay.backgroundColor }}
      >
        {format(calendarDay.date, "d")}
      </div>
    ));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Current Month Calendar</h2>
      <div className="flex mb-4">
        <div>
          <label className="mr-2">Start Date:</label>
          <DatePicker
            selected={selectedStartDate}
            onChange={handleStartDateChange}
            dateFormat="yyyy-MM-dd"
            className="border border-gray-300 p-2"
          />
        </div>
        <div className="ml-4">
          <label className="mr-2">Menstrual Cycle:</label>
          <input
            type="number"
            min="1"
            value={fertilityCycleDays}
            onChange={handleFertilityCycleDaysChange}
            className="border border-gray-300 p-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
        <div className="text-center">Mon</div>
        <div className="text-center">Tue</div>
        <div className="text-center">Wed</div>
        <div className="text-center">Thu</div>
        <div className="text-center">Fri</div>
        <div className="text-center">Sat</div>
        <div className="text-center">Sun</div>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;