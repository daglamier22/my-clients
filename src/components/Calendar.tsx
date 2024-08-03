import { useState, useCallback } from "react";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import withDragAndDrop, {
  EventInteractionArgs,
  withDragAndDropProps,
} from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";

import classes from "./Calendar.module.css";
import Event from "../models/event";

const localizer = momentLocalizer(moment);
const BigCalendarWithDnD = withDragAndDrop<Event>(BigCalendar);

const events: Event[] = [
  {
    id: 1,
    start: moment().set({ h: 10, m: 0, s: 0 }).toDate(),
    end: moment().set({ h: 11, m: 0, s: 0 }).toDate(),
    title: "Molly Ringwald",
    isAllDay: false,
  },
  {
    id: 2,
    start: moment().set({ h: 14, m: 0, s: 0 }).toDate(),
    end: moment().set({ h: 15, m: 30, s: 0 }).toDate(),
    title: "Judd Melson",
    isAllDay: false,
  },
];

export default function Calendar() {
  const [myEvents, setMyEvents] = useState<Event[]>(events);

  const moveEvent: withDragAndDropProps<Event>["onEventDrop"] = useCallback(
    ({
      event,
      start,
      end,
      isAllDay: droppedOnAllDaySlot = false,
    }: EventInteractionArgs<Event>) => {
      const { isAllDay } = event;
      if (!isAllDay && droppedOnAllDaySlot) {
        event.isAllDay = true;
      }
      if (isAllDay && !droppedOnAllDaySlot) {
        event.isAllDay = false;
      }

      setMyEvents((prev) => {
        const existing = prev.filter((ev) => ev.id === event.id);
        const filtered = prev.filter((ev) => ev.id !== event.id);
        const startDate =
          start instanceof Date ? start : new Date(Date.parse(start));
        const endDate = end instanceof Date ? end : new Date(Date.parse(end));
        const updatedEvent: Event = {
          ...existing[0],
          start: startDate,
          end: endDate,
          isAllDay,
        };
        return [...filtered, updatedEvent];
      });
    },
    [setMyEvents]
  );

  const resizeEvent: withDragAndDropProps<Event>["onEventResize"] = useCallback(
    ({ event, start, end }: EventInteractionArgs<Event>) => {
      setMyEvents((prev) => {
        const existing = prev.filter((ev) => ev.id === event.id);
        const filtered = prev.filter((ev) => ev.id !== event.id);
        const startDate =
          start instanceof Date ? start : new Date(Date.parse(start));
        const endDate = end instanceof Date ? end : new Date(Date.parse(end));
        const updatedEvent: Event = {
          ...existing[0],
          start: startDate,
          end: endDate,
        };
        return [...filtered, updatedEvent];
      });
    },
    [setMyEvents]
  );

  return (
    <div className={classes.height600}>
      <BigCalendarWithDnD
        localizer={localizer}
        events={myEvents}
        defaultView={Views.DAY}
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        draggableAccessor={() => true}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        resizable
        // date={moment().toDate()}
        // max={}
        // min={}
      />
    </div>
  );
}
