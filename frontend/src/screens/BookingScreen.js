import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const BookingScreen = () => {
  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
  return (
    <>
      <section className="demo py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Booking Screen</h1>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                dateClick={handleDateClick}
                initialView="timeGridWeek"
                
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingScreen;
