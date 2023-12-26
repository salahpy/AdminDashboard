import React, { useState } from "react"
import { formatDate } from "@fullcalendar/core"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import { scheduleData } from "../data/dummy"
import listPlugin from "@fullcalendar/list"

const handleDateClick = (selected) => {
  const title = prompt("Please enter a new title for your event")
  const caldendarApi = selected.view.calendar
  caldendarApi.unselect()

  if (title) {
    caldendarApi.addEvent({
      id: `${selected.dateStr}-${title}`,
      title,
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay,
    })
  }
}

const handleEventClick = (selected) => {
  if (
    window.confirm(
      `Are you sure you want to delete this event '${selected.event.title}'`
    )
  ) {
    selected.event.remove()
  }
}

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState(scheduleData)

  return (
    <div>
      <div className="mt-28 ml-20">
        <p className="text-xl text-gray-500">Page</p>{" "}
        <p className=" font-bold text-3xl">Calendar</p>
      </div>
      <div className="flex">
        <div>
          <div className=" mt-5 rounded-xl ml-20 p-5 bg-white sidebar">
            <p className=" font-bold text-3xl">Your Events</p>
            <div>
              {currentEvents.map((event) => (
                <div>
                  <p className=" mt-8 text-xl">- {event.title}</p>
                </div>
              ))}
              <p className="text-gray-500 mt-10 text-sm">You can check the list section for more details</p>
            </div>
          </div>
        </div>
        <div>
          <div className="  w-800 mt-5 rounded-xl ml-10 p-5 bg-white sidebar">
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev, next today",
                center: "title",
                right: "dayGridMonth, timeGridDay, listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={currentEvents}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
