export default class Event {
  id: number;
  start: Date;
  end: Date;
  title: string;
  isAllDay: boolean;

  constructor(
    id: number,
    start: Date,
    end: Date,
    title: string,
    isAllDay: boolean
  ) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.title = title;
    this.isAllDay = isAllDay;
  }
}
