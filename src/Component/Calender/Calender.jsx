import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'; // Make sure this CSS file is correctly configured

function ScheduleCalendar() {
  const [value, setValue] = useState(new Date());

  const schedules = [
    { date: '2024-09-30', lunch: true, dinner: false },
    { date: '2024-09-06', lunch: false, dinner: true },
    { date: '2024-09-03', lunch: true, dinner: true },
    { date: '2024-09-04', lunch: true, dinner: true },
    { date: '2024-09-10', lunch: true, dinner: true },

    // More schedules...
  ];

  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getTileContent = ({ date }) => {
    const formattedDate = getFormattedDate(date);
    const schedule = schedules.find(item => item.date === formattedDate);

    return (
      <div className='flex justify-evenly items-center'>
        {schedule?.lunch && <span className="lunch">L</span>}
        {schedule?.dinner && <span className="dinner">D</span>}
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={getTileContent}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
}

export default ScheduleCalendar;
