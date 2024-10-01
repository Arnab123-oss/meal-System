import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calender.css'
// import { Modal, Button } from 'react-bootstrap';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [newEvent, setNewEvent] = useState({
  //   title: '',
  //   start: new Date(),
  //   end: new Date(new Date().getTime() + 60 * 60 * 1000) // Default 1-hour duration
  // });

  // Opens the modal with selected date (if provided) or default values
  // const openModal = (date) => {
  //   setSelectedDate(date || new Date());
  //   setNewEvent({
  //     ...newEvent,
  //     start: date || new Date(),
  //     end: date ? new Date(date.getTime() + 60 * 60 * 1000) : new Date(new Date().getTime() + 60 * 60 * 1000)
  //   });
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  //   setNewEvent({
  //     title: '',
  //     start: new Date(),
  //     end: new Date(new Date().getTime() + 60 * 60 * 1000) // Reset to default 1-hour duration
  //   });
  // };

  // const handleSaveEvent = () => {
  //   if (!newEvent.title || !newEvent.start || !newEvent.end) return; // Basic validation

  //   const eventToAdd = {
  //     title: newEvent.title,
  //     start: newEvent.start,
  //     end: newEvent.end
  //   };

  //   setEvents([...events, eventToAdd]);
  //   handleCloseModal();
  // };

  // const handleStartTimeChange = (e) => {
  //   const newStart = new Date(e.target.value);
  //   setNewEvent({
  //     ...newEvent,
  //     start: newStart,
  //     end: new Date(Math.max(newStart.getTime() + 60 * 60 * 1000, newEvent.end.getTime())) // Ensure end time is after start time
  //   });
  // };

  // const handleEndTimeChange = (e) => {
  //   setNewEvent({
  //     ...newEvent,
  //     end: new Date(e.target.value)
  //   });
  // };

  return (
    <div className="calendar-container">
      

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        // onSelectSlot={(slotInfo) => openModal(slotInfo.start)}
        style={{ height: '90vh' }}
        views={['month', 'week', 'day', 'agenda']} // Enable different views including "Agenda"
        defaultView="month" // Set default view to "Month"

      />

      
    </div>
  );
};

export default CalendarPage;