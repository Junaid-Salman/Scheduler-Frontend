import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Navbar from "./components/Navbar";

const events = [
  {
    id: "1",
    title: "Morning Shift",
    start: "2026-02-15T09:00:00",
    end: "2026-02-15T17:00:00",
    backgroundColor: "#3b82f6",
    borderColor: "#3b82f6",
  },
  {
    id: "2",
    title: "Evening Shift",
    start: "2026-02-16T13:00:00",
    end: "2026-02-16T21:00:00",
    backgroundColor: "#10b981",
    borderColor: "#10b981",
  },
  {
    id: "3",
    title: "Closed - Holiday",
    start: "2026-02-18",
    allDay: true,
    backgroundColor: "#ef4444",
    borderColor: "#ef4444",
  },
];

function App() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-4xl mx-auto border border-slate-50 rounded-sm">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "today,next",
          }}
        />
      </div>
    </div>
    </>
  );
}

export default App;
